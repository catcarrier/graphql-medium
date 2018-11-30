// https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1
var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

// GraphQL Schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root resolver
var root = {
    message: () => 'Hi there!'
};

// Create an express server and GraphQL middleware
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express/GraphQL running on 4000'));