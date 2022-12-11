'use strict';
const {
  CognitoIdentityProviderClient,
  ListUsersCommand
} = require("@aws-sdk/client-cognito-identity-provider");

module.exports = ({strapi}) => ({
  async index(ctx) {
    const {userPoolId, region} = strapi.config.get('plugin.strapi-plugin-user-pools')
    const client = new CognitoIdentityProviderClient({region});
    const command = new ListUsersCommand({
      UserPoolId: userPoolId
    });
    const {Users, PaginationToken} = await client.send(command);
    ctx.body = {Users, PaginationToken}
  },
});
