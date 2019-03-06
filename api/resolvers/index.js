const authResolver = require('./auth');
const clientResolver = require('./clients');
const labelResolver = require('./labels');

const rootResolver = {
  ...authResolver,
  ...clientResolver,
  ...labelResolver
};

module.exports = rootResolver;
