module.exports = {
  entry: './views/index.js',
  output: 'bundle.js',
  module: {
    loaders: [
      { loader: 'babel-loader', test: /\.jsx?$/, exclude: 'node_modules' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
}
Contact GitHub API Training Shop Blog About
