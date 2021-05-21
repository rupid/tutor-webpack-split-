
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 使用OptimizeCssnanoPlugin插件压缩和去重css样式文件
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin')
const PreloadPlugin = require('@vue/preload-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname),
  devtool: 'source-map',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'js/[name].[contenthash:8].js',
    publicPath: '/',
    chunkFilename: 'js/[name].[contenthash:8].js'
  },
  resolve: {
    alias: {
      '@': '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/src',
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules',
      '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/@vue/cli-service/node_modules'
    ],
    plugins: [
      {
        apply: function nothing () {
          // ¯\_(ツ)_/¯
        },
        makePlugin: function () { /* omitted long function */ },
        moduleLoader: function () { /* omitted long function */ },
        topLevelLoader: {
          apply: function nothing () {
            // ¯\_(ツ)_/¯
          }
        },
        bind: function () { /* omitted long function */ },
        tsLoaderOptions: function () { /* omitted long function */ },
        forkTsCheckerOptions: function () { /* omitted long function */ }
      }
    ]
  },
  resolveLoader: {
    modules: [
      '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/@vue/cli-plugin-babel/node_modules',
      'node_modules',
      '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules',
      '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/@vue/cli-service/node_modules'
    ],
    plugins: [
      {
        apply: function nothing () {
          // ¯\_(ツ)_/¯
        }
      }
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          {
            loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/.cache/vue-loader',
              cacheIdentifier: '6855dd7a'
            }
          },
          {
            loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/vue-loader/lib/index.js',
            options: {
              compilerOptions: {
                whitespace: 'condense'
              },
              cacheDirectory: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/.cache/vue-loader',
              cacheIdentifier: '6855dd7a'
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/file-loader/dist/cjs.js',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').rule('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').rule('pug-template') */
          {
            use: [
              {
                loader: 'raw-loader'
              },
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal') */
          {
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal') */
          {
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal') */
          {
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal') */
          {
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal') */
          {
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal') */
          {
            use: [
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/.cache/babel-loader',
              cacheIdentifier: 'c3d40954'
            }
          },
          {
            loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/thread-loader/dist/cjs.js'
          },
          {
            loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/babel-loader/lib/index.js'
          }
        ]
      },
      /* config.module.rule('eslint') */
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: [
          /node_modules/,
          '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/@vue/cli-service/lib'
        ],
        use: [
          {
            loader: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/eslint-loader/index.js',
            options: {
              extensions: [
                '.js',
                '.jsx',
                '.vue'
              ],
              cache: true,
              cacheIdentifier: '26d664c0',
              emitWarning: false,
              emitError: false,
              eslintPath: '/Users/liujianwei/Documents/personal_code/tutor-webpack-split/node_modules/eslint',
              formatter: undefined
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: true,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          terserOptions: {
            output: {
              comments: /^\**!|@preserve|@license|@cc_on/i
            },
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          }
        }
      }
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new webpack.DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"production"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('extract-css') */
    new MiniCssExtractPlugin(
      {
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      }
    ),
    /* config.plugin('optimize-css') */
    new OptimizeCssnanoPlugin(
      {
        sourceMap: false,
        cssnanoOptions: {
          preset: [
            'default',
            {
              mergeLonghand: false,
              cssDeclarationSorter: false
            }
          ]
        }
      }
    ),
    /* config.plugin('hash-module-ids') */
    new webpack.HashedModuleIdsPlugin(
      {
        hashDigest: 'hex'
      }
    ),
    /* config.plugin('named-chunks') */
    new webpack.NamedChunksPlugin(
      function () { /* omitted long function */ }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        title: 'tutor-webpack-split',
        templateParameters: function () { /* omitted long function */ },
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeScriptTypeAttributes: true
        },
        template: path.resolve(__dirname, 'public/index.html')
      }
    ),
    /* config.plugin('preload') */
    new PreloadPlugin(
      {
        rel: 'preload',
        include: 'initial',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        include: 'asyncChunks'
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      [
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'dist'),
          toType: 'dir',
          ignore: [
            '.DS_Store',
            {
              glob: 'index.html',
              matchBase: false
            }
          ]
        }
      ]
    )
  ],
  entry: {
    app: [
      './src/main.js'
    ]
  }
}
