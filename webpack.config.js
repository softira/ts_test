// 引入一个包
const path = require('path')
// 引入htnl插件
const HTMLWebpackPlugin = require('html-webpack-plugin')

// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {

  // 设置mode
  mode: 'development',

  // 指定入口文件
  entry: "./chapter02/part01/src/index.ts",

  // 指定打包文件所在目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    clean: true,

    // 告诉webpack不使用箭头函数
    environment:{
      arrowFunction:false
    }
  },

  // 指定webpack打包时要使用的模块
  module: {
    // 指定要加载的规则
    rules: [{
      // test指定的是规则生效的文件
      test: /\.ts$/,
      // 要使用的loader
      use: [{
          // 指定加载器
          loader: "babel-loader",
          // 设置babel
          options: [
            [
              // 指定环境的插件
              "@babel/preset-env",
              // 配置信息
              {
                // 要兼容的目标浏览器
                targets: {
                  "chrome": "88"
                },

                // 指定corejs的版本
                "corejs": "3",
                // 使用corejs的方式"usage" 表示按需加载
                "useBuiltIns": "usage"
              }
            ]
          ]
        },
        'ts-loader'
      ],
      exclude: /(node-modules)|(chapter01)/
    }]
  },

  // 配置webpack插件
  plugins: [
    new HTMLWebpackPlugin({
      // title: '网页模板'
      template: "./chapter01/part03/src/index.html"
    }),
  ],

  // 用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}