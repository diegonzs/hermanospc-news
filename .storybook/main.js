const path = require('path')

// For our css modules these will be locally scoped
const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    importLoaders: 2,
    sourceMap: false,
  }
}

const SCSSLoader = {
  loader: 'sass-loader',
  options: {
    prependData: `@import 'main.scss';`,
    sassOptions: {
      includePaths: [path.resolve(__dirname, '../styles')],
    },
  },
}

module.exports = {
  stories: ['../**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-docs'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', CSSModuleLoader, SCSSLoader],
      include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push({
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    })

    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: ['file-loader'],
      include: path.resolve(__dirname, '../public'),
    })

    config.resolve.alias = {
      ...config.resolve.alias,
      'components': path.resolve(__dirname, '../components'),
      'context': path.resolve(__dirname, '../context'),
      '/images': path.resolve(__dirname, '../public/images'),
    }

    return config
  },
}
