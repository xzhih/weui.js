/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  context: path.join(__dirname, '../example'),
  entry: {
    example: './example.js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }
    }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '../example'),
    port: 8001
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../example/index.html')
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8001'
    })
  ]
}
