/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const webpack = require('webpack')
const config = require('./webpack.mod.config')

Promise.all([{
  weui: './src/weui.js'
}].map((entry) => new Promise((resolve, reject) => {
  webpack(config(entry, false), (error) => {
    if (error) {
      reject(error)
      return
    }
    webpack(config(entry, true), (err, stats) => {
      if (err) {
        reject(err)
      } else {
        resolve(stats)
      }
    })
  })
}))).then(() => {
  console.info('build finished')
}).catch((err) => {
  console.error('build error', err)
})
