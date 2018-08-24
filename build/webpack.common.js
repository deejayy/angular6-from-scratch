console.log('# loading common webpack config');

const path = require('path');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const environmentFiles = {
  'dev': './src/environments/environment.dev.ts',
  'prod': './src/environments/environment.prod.ts',
};

module.exports = {
  watch: false,
  stats: 'verbose',
  mode: 'none',
  entry: {
    styles: './src/styles.scss',
    vendorcss: './src/vendor.scss',
    vendor: './src/vendor.ts',
    polyfills: './src/polyfills.ts',
    main: './src/main.ts',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            enforce: true,
            chunks: 'all'
        },
      }
    }
  },
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    crossOriginLoading: false
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  module: {
    rules: [
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        use: [
          {
            loader: '@ngtools/webpack',
          },
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'raw-loader',
          },
        ],
      },
      {
        test: /\.s?css$/,
        include: [
          path.join(process.cwd(), 'src', 'app'),
        ],
        use: [
          {
            loader: 'raw-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'embedded',
              plugins: [
                require('autoprefixer'),
              ],
              sourceMap: true
            }
          },
        ],
      },
      {
        test: /\.s?css$/,
        exclude: [
          path.join(process.cwd(), 'src', 'app'),
        ],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              import: true,
              importLoaders: 1,
              sourceMap: true
            }
          },
        ],
      },
      {
        test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[hash:20].[ext]',
          limit: 10000
        }
      },
      {
        test: /\.(eot|svg|cur)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash:20].[ext]',
          limit: 10000
        }
      },
    ],
  },
  plugins: [
    new AngularCompilerPlugin({
      mainPath: './src/main.ts',
      tsConfigPath: './tsconfig.webpack.json',
      sourceMap: true,
      hostReplacementPaths: {
        './src/environments/environment.ts': environmentFiles[process.env.NODE_ENV]
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[name].[contenthash].css"
    }),
    new CopyWebPackPlugin([
      {
        context: 'src',
        to: '',
        from: {
          glob: 'assets/**/*',
          dot: true
        },
      },
      {
        context: 'src',
        to: '',
        from: {
          glob: 'favicon.ico',
          dot: true
        }
      },
    ]),
  ],
  devServer: {
    port: 4300,
    historyApiFallback: true,
    // stats: 'verbose',
    contentBase: './src',
    progress: true,
  }
}
