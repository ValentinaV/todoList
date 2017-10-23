const path = require('path');

module.exports = {
  entry: './src/App.jsx',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  devServer: {
    inline: true,
    contentBase: './public',
    port: 9000
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
        		  {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            ]
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  devtool: 'eval-source-map',

  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  }
};
