const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');
const config = require('./config/config');

const graphQlSchema = require('./api/schema/index');
const graphQlResolvers = require('./api/resolvers/index');
const isAuth = require('./middleware/is-auth');

var app = express();

app.use(bodyParser.json());

app.use(isAuth);

app.use(
  '/api',
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

const connectionString = `mongodb://${config.mongo_user}:${config.mongo_password}@${config.mongo_host}:${config.mongo_port}/${config.mongo_database}?authSource=admin`

mongoose.connect(connectionString, { useNewUrlParser: true })
  .then(() => {
    app.listen(3000);
    console.log("Server listening on port 3000");
    
  })
  .catch(err => {
    console.log(err);
  });


module.exports = app;
