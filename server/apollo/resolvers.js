const services = require('./services');

/*services.getVrtArticles();*/

const articles = [
    {
        id: '1',
        title: 'Harry Potter and the Chamber of Secrets',
    },
    {
        id: '2',
        title: 'Jurassic Park',
    },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        articles: () => services.getVrtArticles(),
    },
};

module.exports = resolvers;
