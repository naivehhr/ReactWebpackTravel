const webpack = require('webpack')
const WebpackDeveServer = require('webpack-dev-server')
const config = require('./webpack.config.js')
const server = new WebpackDeveServer(webpack(config), {
  publicPath: config.output.publicPath
})

server.listen(3000, 'localhost', function(err, result) {
  if (err) {
    return console.log(err)
  }
  return console.log('listening at localhost: 3000....')
})