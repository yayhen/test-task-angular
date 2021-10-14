# TestTaskAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
Создать упрощенный вариант социальной сети, в котором имеется база пользователей с подробными характеристиками о каждом.

Требования:

1. Layout
   требования:
   a) header, footer, content
   b) при переходе на другую страницу перезагружается только content page (header/footer остаются неизменными)

2. работа с Rest API (json server)
   требования: 
   a) Глобальный data-service для работы с API

3. Angular routing и Angular guards
   требования:
   a) Два типа юзера: admin/user
   b) Простая login page (без токенов)
   c) Два модуля overview users/create-edit users с lazy loading'ом
   d) Логин происходит через глобальный auth-service который управляет авторизацией
   Пример роутинга:
   users list - видят все
   details page - видят все
   create/edit user - видит только admin

4. добавление, изменение пользователей (только для админа)
   требования:
   a) формы angular reactive-forms (также прочитать про template driven form и понять отличия от reactive-forms);
   b) один form array (к примеру блок обучение что б я мог добавить 1-2-3 университета с годами обучения и специальностями, а также возможность удалить)
   c) хотя бы один встроенный Angular валидатор, хотя бы один кастомный валидатор поля (к примеру возраст моложен 25 лет ИЛИ старше 65), 
   один кастомный валидатор двух полей (к примеру, год поступления не должен быть позже года выпуска)
   d) динамическое отображение ошибок валидации после того как юзер дотронулся до поля.
   e) изменения должны сохраняться на json-server с помощью POST/PUT запросов
5. Удаление пользователей (только для админа)
   требования:
   a) Перед удалением всплывающее bootstrap диалоговое окно, которое спрашивает действительно ли удалить пользователя.
   b) Изменения должны сохраняться с помощью DELETE запроса.
7. Просмотр списка пользователей (доступно всем)
8. Просмотр подробной информации о пользователя (доступно всем)
9. Users list должно содержать поиск по юзерам с автокомплитом (тип поиска - contains, запретить спецсимволы)
10. В проекте должен быть Spinner (loader) который крутится пока грузится контент (должен быть абстрактный, а не в каждом компоненте)
11. Добавление фото к профилю юзера (сохранять при помощи стринговый byteArray)
12. Сайт должен быть на двух языках (en и fr - использовать ngx-translate)
13. Использовать либу ngx-toastr
14. Создать кастомный pipe (к примеру закидываешь имя и фамилию, а он преобразовывает в Name S. (типа John Wick - John W.)
15. Создать кастомную директиву (к примеру если юзер онлайн, слева кружок красится в нужный цвет (онлайн - зеленый, оффлайн - красный)


Верстка с bootstrap 4/angular material/any other UI library полностью адаптивная, также работа с SASS препроцессором.

