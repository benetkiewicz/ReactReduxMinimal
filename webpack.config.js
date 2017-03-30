module.exports = {
  entry: './src/index.tsx',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loaders: ['babel-loader', 'ts-loader']
    }]
  },
  resolve: {
    extensions: ['.webpack.js', '.js', '.jsx', '.ts', '.tsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};