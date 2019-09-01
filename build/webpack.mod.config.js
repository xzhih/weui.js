/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const pkg = require('../package.json')

const banner = [
  `/* eslint-disable */`,
  `/*! `,
  ` * ${pkg.name} v${pkg.version} (${pkg.homepage})`,
  ` * Copyright ${new Date().getFullYear()}, ${pkg.author}`,
  ` * ${pkg.license} license`,
  ` */`
].join('\n')

module.exports = (entry, isMinify) => ({
  mode: 'production',
  entry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: isMinify ? '[name].min.js' : '[name].js',
    library: 'weui',
    libraryTarget: 'umd'
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
      test: /\.html$/,
      exclude: /node_modules/,
      use: {
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }
    }
    ]
  },
  optimization: {
    minimize: isMinify,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
            preamble: banner
          }
        }
      })
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner,
      raw: true
    })
  ]
})
