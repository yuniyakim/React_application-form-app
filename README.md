# Тестовое задание [![Build Status](https://app.travis-ci.com/yuniyakim/React_application-app.svg?branch=master)](https://app.travis-ci.com/yuniyakim/React_application-app)
Макет: https://www.figma.com/file/I2RCamxFW7q8luwXLxHeax (в папке с заданием так же есть файл
*.fig дублирующий содержимое макета Figma)

Необходимо сверстать предложенный макет, и написать простое SPA на React + Redux, используя
следующие инструменты, технологии и подходы:
* компонентное использование styled-components
* повторное использование блоков
* разделение кода на React-компоненты

## Задание:
1. Сверстать макет
2. Элемент выпадающего списка городов нужно наполнить данными из прилагаемого JSON
cities.json
3. Элемент выпадающего списка источников нужно наполнить данными из прилагаемого
JSON sources.json
4. Поля с "*" в плейсхолдере обязательны для заполнения
5. По умолчанию кнопка отправки заявки заблокирована. Кнопка становится активной при
корректном заполнении формы.
6. Реализовать валидацию на клиенте:
Имя
* поле не пустое
* поле имеет 2 или более символов
Номер телефона (вводить можно только цифры)
* поле не пустое
* номер заполнен корректно и полностью
E-mail
* поле не пустое
* поле соответствует регулярному выражению .+@.+\..+
Ссылка на профиль
* поле не пустое
* поле имеет 3 или более символов
7) После заполнения формы, при попытке отправить данные, используя функцию setTimeout
симулировать получение ответа от сервера
* учесть смену состояния кнопки
* использовать таймаут на 2 секунды
* по истечению таймаута сформировать JSON из данных формы (Redux) и вывести данные в
консоль
* очистка формы

### Дополнительно (необязательно):
1. Сверстать макет адаптивно (мобилка/десктоп)
2. Для поля ввода "Номер телефона" использовать react-input-mask
3. Использовать TypeScript при написании React-компонентов



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
