const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: ['./src/server/server.ts'],
  output: {
    filename: './server.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.node$/, loader: 'node-loader' }
    ]
  },

  externals: ['bufferutil'],

  stats: {
    warningsFilter: warning => {
      // Suppress Critical dependency https://github.com/webpack/webpack/issues/1576
      let filesWithWarningsToIgnore = [
        "node_modules/express/lib/view.js",
        "node_modules/socket.io/lib/index.js"
      ];
      return filesWithWarningsToIgnore.some((rgx) => RegExp(rgx).test(warning));
    }
  }
};
