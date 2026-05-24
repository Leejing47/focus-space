const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development', // 开发模式
  entry: './src/index.js', // 入口文件
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, //每次构建清理 dist 文件夹
  },
  devServer: {
    static: './dist',
    port: 3000, // 本地开发服务器端口
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // 处理CSS的loader
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // 使用我们的HTML作为模板
    }),
  ]
}