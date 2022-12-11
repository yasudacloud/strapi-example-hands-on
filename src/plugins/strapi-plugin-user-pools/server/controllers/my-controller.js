'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-plugin-user-pools')
      .service('myService')
      .getWelcomeMessage();
  },
});
