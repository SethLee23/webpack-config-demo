# 作用

1. ES6(7/8)->ES5
2. css 结构化/逻辑化
   less/sass 编译打包
3. HTML 压缩
   处理模板 ejs/pug
4. 实时编译

# 操作

```
npm init -y
```

# 安装依赖步骤

1. 安装 webpack（三大件）:
   webpack、 webpack-cli、weback-dev-server

2. 安装处理 js 插件（六大件）:
   2.1 转换 ES6:
   babel-loader@7、babel-core、babel-preset-env
   2.2 转换 ES7、ES8:
   babel-plugin-transform-runtime
   2.3 转换装饰器:
   babel-plugin-transform-decorators
   babel-plugin-transform-decorators-legacy

3. 转换样式,处理 sass->css->style（四大件）:
   sass-loader
   node-sass
   css-loader
   style-loader

postcss-loader、autoprefixer //添加前缀

4. 处理模板(ejs/tpl):
   ejs-loader

5. 处理 html
   html-webpack-plugin

衍生：

- 安装在开发环境下
  --save-dev === -D

- 安装在生产环境下
  --save -d

bash

```
 npm i -D webpack webpack-cli webpack-dev-server babel-loader@7 babel-core babel-preset-env babel-plugin-transform-runtime babel-plugin-transform-decorators babel-plugin-transform-decorators-legacy sass-loader node-sass css-loader style-loader ejs-loader html-webpack-plugin --registry=https://registry.npm.taobao.org
```

# 配置步骤

新建 webpack.config.js

# 创建文件

src/js/index.js
src/index.html

# 配置脚本

```json
"scripts": {
    "dev": "webpack serve --config webpack.config.js",
    "build": "webpack --config webpack.config.js",
  },
```
