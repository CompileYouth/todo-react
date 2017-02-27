[中文版文档](./README-zh-CN.md)

# todo-demo
A demo for learning react and redux.

[![Build Status](https://travis-ci.org/CompileYouth/todo-react.svg?branch=master)](https://travis-ci.org/CompileYouth/todo-react)

## Project Feature

Despite this app is simple and this project is small, the project contains lots of important technologies when building a react project.

- **Standard Model**: The project is built with React, Redux and some plugins, including react-redux, react-actions, Immutable and so on.
- **High Performance**: The project takes some steps to improve performance, including uglify JavaScript, minimize CSS and so on.
- **Comprehensive Test**: The project uses Mocha and Should to do unit tests. Apart from that, it uses Travis to do tests automatically.
- **Cool Design**: All components in the project are of material-design style. Besides, animation is cool.

## Used Technologies

- React
- Redux including react-actions, react-redux
- Immutable
- Webpack 2
- ES6
- ESLint
- Babel
- LESS
- Material Design
- Mocha
- Should
- Others including classnames, normalize.css


## Application Preview

![](http://i.giphy.com/26BGzZZdvcVRzKDBe.gif)

## Online demo @DaoCloud

<http://compileyouth-todo-react.daoapp.io/>

> Since it's running on a free Docker host, I just can't guarantee it would be always working.

## How to install

1. Clone the repo to your local storage.

  ```
  git clone https://github.com/CompileYouth/todo-react.git
  ```

2. Install dependencies.

  ```
  npm install
  ```

## How to Build and Run

- Run in Webpack DevServer.

  ```
  npm run dev
  ```

  Then open <http://localhost:8080>

- Or build it in production mode.

  ```
  npm run build
  ```

  Then run

  ```
  npm start
  ```

## Test

Firstly, you can install [Mocha](https://github.com/mochajs/mocha) in global mode.

```
npm install -g mocha
```

Then run

```
npm test
```

If you don't want to install [Mocha](https://github.com/mochajs/mocha), you can run command below to test:

```
./node_modules/mocha/bin/mocha --compilers js:babel-core/register test/manager.test.js
```
