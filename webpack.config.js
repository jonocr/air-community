const path = require('path');

module.exports = (env) => {

  // console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
  console.log('ENV: ', process.env.NODE_ENV); // 'local'
  console.log('***********************************************************************'); // 'local'
  // console.log('Production: ', env.NODE_ENV); // true
  return {
    mode: 'development',
    entry: './client/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
    devServer: {
      publicPath: '/build',
      contentBase: path.join(__dirname, './'),
      compress: true,
      port: 8080,
      hot: true,
      proxy: {
        '/items': {
          target: 'http://localhost:3000/'
        }
      },
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env','@babel/preset-react']
            }
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        }
      ]
    }
  }
};