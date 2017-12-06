const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: ['babel-loader']

        },
         {
          test: /\.(scss)$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [{
              loader: 'css-loader',
              options: {
                modules: true,
                camelCase: true,
                importLoaders: 2,
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: function () {
                  return [
                    require('autoprefixer')()
                  ];
                }
              }
            },
            {
              loader: 'sass-loader'
            },
          ]
        })
      },
      {
  test: /\.(png|jpg|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]'
      }
    }
  ]
},
    {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    }
  ]
  },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      new ExtractTextPlugin("styles.css")
    ],
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname,'dist')
  }
}
