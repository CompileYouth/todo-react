[Document in English](./README.md)

# todo-demo
学习 React 和 Redux 的 Demo 程序。

[![Build Status](https://travis-ci.org/CompileYouth/todo-react.svg?branch=master)](https://travis-ci.org/CompileYouth/todo-react)

## 项目特色

虽然 App 很简单项目也很小，但这个项目包含了搭建一个 React 项目所需要的几乎所有技术。

- **标准的框架**：项目使用 React、Redux 以及相关插件使得项目更加符合标准。
- **高性能**：项目采取一些措施来提升性能，比如丑化 JS 代码，最小化 CSS 代码等等。
- **全面的测试**：项目采用 Mocha、Should 来做测试，并且使用 Travis 做自动化集成测试。
- **酷酷的风格**：所有组件采用 Material Design 风格，并且为所有交互添加了流畅的动画。

## 涉及技术

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

## 应用预览

![](http://i.giphy.com/26BGzZZdvcVRzKDBe.gif)

## 在线项目 @DaoCloud

<http://compileyouth-todo-react.daoapp.io/>

## 如何安装

1. 将项目克隆至本地。

  ```
  git clone https://github.com/CompileYouth/todo-react.git
  ```

2. 安装依赖包。

  ```
  npm install
  ```

## 如何构建和运行

- 使用 webpack-dev-server 运行。

  ```
  npm run dev
  ```

  打开： <http://localhost:8080>

- 或者在生成模式下构建

  ```
  npm run build
  ```

  然后运行

  ```
  npm start
  ```

## 测试

首先，你需要在全局安装 [Mocha](https://github.com/mochajs/mocha)。

```
npm install -g mocha
```

然后运行

```
npm test
```

如果你不想在全局安装 [Mocha](https://github.com/mochajs/mocha)，你可以执行下面的命令来测试：

```
./node_modules/mocha/bin/mocha --compilers js:babel-core/register test/manager.test.js
```
