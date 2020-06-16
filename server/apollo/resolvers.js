const services = require('./services');

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        vrtArticles: () => services.getVrtArticles(),
        vergeArticles: () => services.getVergeArticles(),
    },
};

module.exports = resolvers;