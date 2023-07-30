const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    publicPath: 'http://localhost:3001/'
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
  },

  devServer: {
    port: 3001,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    })
  ]
}
