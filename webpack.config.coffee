module.exports = 
  entry: './coffee/namespace.coffee'
  output:
    filename: './dist/vendor.js'

  resolve:
    extensions: ['', '.js', '.coffee']
  module:
    loaders: [
      test: /\.coffee$/, loader: 'coffee-loader'
    ]
