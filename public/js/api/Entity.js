/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */
class Entity {
  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static URL = "";
  static list(data, callback) {
    console.log("Список транзакций");
    createRequest({
      method: "GET",
      data,
      url: this.URL,
      callback,
    });
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity
   * */
  static create(data, callback) {
    createRequest({
      data,
      url: this.URL,
      callback,
      method: "PUT",
    });
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove(data, callback) {
    createRequest({
      data,
      url: this.URL,
      callback,
      method: "DELETE",
    });
  }
}
