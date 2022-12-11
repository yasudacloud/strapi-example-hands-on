module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'cognitoController.index',
    config: {
      policies: [],
    },
  },
];
