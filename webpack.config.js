const path = require('path')

module.exports = {
  entry: {
    bundle: './playground/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    alias: {
      'stimulus-render': path.resolve(__dirname, './dist/index.js')
    }
  },
  devServer: {
    contentBase: './playground',
    watchContentBase: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              [ '@babel/plugin-transform-runtime', { regenerator: true } ]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
           {
             loader: 'css-loader',
             options: { importLoaders: 1 }
           },
           'postcss-loader'
         ]
      }
    ]
  }
}
