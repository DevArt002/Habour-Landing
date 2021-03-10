const path = require('path')

module.exports = {
  // Location of stories
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  // Custom webpack config
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // We can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes we need
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      },
    ]

    config.resolve.alias = {
      ...config.resolve.alias,
      Components: path.resolve(__dirname, '../src/components/'),
      Hooks: path.resolve(__dirname, '../src/hooks/'),
      Utils: path.resolve(__dirname, '../src/utils/'),
      Assets: path.resolve(__dirname, '../src/assets/'),
      Configs: path.resolve(__dirname, '../src/configs/'),
    }

    return config
  },
  // Custom babel config
  babel: async (options) => ({
    ...options,
  }),
  // addons added to storybook
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
}
