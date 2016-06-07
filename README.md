## Angular message feed application example

Нам нужна лента текстовых сообщений с фильтрацией. Сообщения состоят из:

* даты и времени;
* текста;
* автора.

Модальное окно добавления нового сообщения. Поле ввода сообщения со счётчиком символов и вариацией по длине.

Страница автора:

* произвольная информация по автору;
* список сообщений.

Обращения к серверу можно замокать и описать требуемое api.

##How to run

1. Clone this repo
2. Install [node](https://nodejs.org/en/)
3. Install npm dependencies with `npm install`
4. Install webpack dev server with `npm install webpack-dev-server -g`
4. Run application with `npm start`
5. Open <http://localhost:8000>
6. For developing install webpack `npm install webpack -g`