const { gql } = require('apollo-server-koa');

const typeDefs = gql`    
    type article {
        id: String,
        link: String,
        title: String,
        imageSrc: String,
        summary: String,
        pubDate: String,
    }
    
    type Query {
        articles: [article]
    }
`;

module.exports = typeDefs;