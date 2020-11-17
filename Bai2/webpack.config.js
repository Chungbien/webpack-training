const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, agrv) => {
  const isDev = agrv.mode === 'development'
  return {
    entry: './src/index.ts',
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(s[ac]ss|css)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { sourceMap: isDev ? true : false }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: isDev ? true : false }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]'
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        '@': path.resolve('src'),
        '@@': path.resolve()
      }
    },
    output: {
      path: path.resolve('dist'),
      publicPath: '',
      filename: 'bundle.[hash:6].js',
      environment: {
        arrowFunction: false,
        bigIntLiteral: false,
        const: false,
        destructuring: false,
        dynamicImport: false,
        forOf: false,
        module: false
      }
    },
    devtool: isDev ? 'source-map' : false,
    devServer: {
      contentBase: 'public',
      port: 3000,
      hot: true,
      watchContentBase: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html'
      })
    ]
  }
}
