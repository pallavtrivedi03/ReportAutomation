const authResolver = require('./auth');
const clientResolver = require('./clients');
const labelResolver = require('./labels');
const reportResolver = require('./report');

const rootResolver = {
  ...authResolver,
  ...clientResolver,
  ...labelResolver,
  ...reportResolver
};

module.exports = rootResolver;
