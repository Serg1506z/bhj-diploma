/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  // xhr.responseType = 'json';
  const xhr = new XMLHttpRequest();
  const data = new FormData();
  for (const key in options.data) {
    data.append(key, options.data[key]);
  }
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      options.callback(null, JSON.parse(xhr.responseText));
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      options.callback(xhr.statusText, JSON.parse(xhr.responseText));
    }
  };
  if (options.method === "GET") {
    xhr.open(
      options.method,
      options.url + "?" + new URLSearchParams(data).toString()
    );
  } else {
    xhr.open(options.method, options.url);
  }
  xhr.send(data);
};
