const services = require('./services');
const DateTime = require('./scalars/dateTime');

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    DateTime,
    Query: {
        vrtArticles: () => services.getVrtArticles(),
        vergeArticles: () => services.getVergeArticles(),
    },
};

module.exports = resolvers;