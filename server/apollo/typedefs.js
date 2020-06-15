const { gql } = require('apollo-server-koa');

const typeDefs = gql`    
    type article {
        id: String,
        title: String
    }
    
    type Query {
        articles: [article]
    }
`;

module.exports = typeDefs;