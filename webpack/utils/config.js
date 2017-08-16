const HtmlWebpackPlugin = require('html-webpack-plugin')
const consts = require('./consts')
const path = require('path')
const pxtorem = require('postcss-pxtorem')

const config = {
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=es2015&presets[]=react&presets[]=stage-1&plugins[]=transform-decorators-legacy'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=8192&name=images/[hash].[ext]'
      },
      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff" 
      },
      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader" 
      },
      {
        test: /\.less$/,
        include: [path.resolve('src/themes')],
        loader: 'style!css!less!postcss'
      }
    ]
  },
  lessLoader: {
    includePaths: ['src', 'node_modules']
  },
  postcss: [
    pxtorem({
      rootValue: 75,
      propWhiteList: [],
    }),
    require('postcss-font-magician')()
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: consts.TEMPLATE,
      title: consts.TITLE,
      filename: '../index.html',
      hash: true
    })
  ],
  resolve: {
    root: path.resolve(),
    modulesDirectories: ['src', 'node_modules'],
    extensions: ['', '.web.js', '.js', '.jsx', '.html', '.css', '.less'],
    alias: {
      'react': 'react-lite',
      'react-dom': 'react-lite'
    }
  }
}

module.exports = config
