  module.exports = {
    'strapi-plugin-user-pools': {
      enabled: true,
      resolve: './src/plugins/strapi-plugin-user-pools',
      config: {
        userPoolId: '',
        region: 'ap-northeast-1'
      }
    }
  }
