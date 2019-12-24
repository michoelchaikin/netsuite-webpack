const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const fs = require('fs');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // Use all *.ts files in ./src as entry points
  // Based on https://stackoverflow.com/a/45827671/3230114
  entry: glob.sync('./src/**.ts').reduce((obj, el) => {
    obj[path.parse(el).name] = el;
    return obj;
  }, {}),
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  optimization: {
    // Do not remove the SuiteScript JSDoc when minifying
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: /@NApiVersion/i,
          },
        },
      }),
    ],
  },
  plugins: [
    // Remove moment.js locales (https://github.com/moment/moment/issues/2416#issuecomment-111713308)
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

    // Copy the SuiteScript JSDoc to the top of the script
    new webpack.BannerPlugin({
      banner: data => {
        const filename = data.chunk.entryModule.resource;
        console.log(filename);
        const contents = fs.readFileSync(filename, 'UTF-8');
        const comments = contents.match(/\/\*[\s\S]*?\*\//);
        return comments.length ? comments[0] : '';
      },
      raw: true,
    }),
  ],
  externals: [/^N\//],
};
