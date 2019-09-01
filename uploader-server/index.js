/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
let formidable = require('formidable')
let uuid = require('node-uuid')
let fs = require('fs')
let express = require('express')
let http = require('http')
let path = require('path')

let app = express()
let allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')

  next()
}
app.use(allowCrossDomain)

function nodeUpload(req, callback, next) {
  let form = new formidable.IncomingForm()
  form.encoding = 'utf-8'
  form.uploadDir = `${__dirname}/uploads/`
  form.maxFieldsSize = 10 * 1024 * 1024
  // 解析
  form.parse(req, (err, fields, files) => {
    if (err) return callback(err)

    for (let file in files) {
      if ({}.hasOwnProperty.call(files, file)) {
        // 后缀名
        let extName = path.extname(files[file].name)

        // 重命名，以防文件重复
        let avatarName = uuid() + extName

        // 移动的文件目录
        let newPath = form.uploadDir + avatarName
        fs.renameSync(files[file].path, newPath)
        fields[file] = {
          size: files[file].size,
          path: newPath,
          name: files[file].name,
          type: files[file].type,
          extName
        }
      }
    }
    callback(null, fields)
  })
}

app.post('/upload', (req, res, next) => {
  nodeUpload(req, (err, fields) => {
    res.json(fields)
  }, next)
})

http.createServer(app).listen(8002, () => {
  console.log('Express server listening on port 8002')
})
