const { gql } = require('apollo-server-koa');

const typeDefs = gql`
    scalar DateTime
    
    type article {
        id: String,
        link: String,
        title: String,
        imageSrc: String,
        summary: String,
        pubDate: DateTime,
    }
    
    type Query {
        vrtArticles: [article],
        vergeArticles: [article],
    }
`;

module.exports = typeDefs;