/* pakages */
const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');
const {ApolloServer} = require('apollo-server-koa');
const cors = require('@koa/cors')

/* files */
const rssStreams = require('./rss-services');
const resolvers = require('./apollo/resolvers');
const typeDefs = require('./apollo/typedefs');

const app = new Koa();
const router = new KoaRouter();

const PORT = process.env.PORT || 3000;

app.use(json());
app.use(router.routes()).use(router.allowedMethods());
app.use(cors())

router.get('/', ctx => (ctx.body = {'msg': 'Hello World 😉'}));

/*setInterval(function () {*/
    rssStreams.getArticles();
/*    console.log('updating articles db...')
}, 300000);*/

/* The ApolloServer constructor requires two parameters: your schema definition and your set of resolvers. */
const apolloServer = new ApolloServer({typeDefs, resolvers});

apolloServer.applyMiddleware({app});

app.listen({port: PORT}, () => {
    console.log(`🚀 Production => server running on port: ${PORT}`)
    console.log(`🚀 Local => server ready at http://localhost:3000${apolloServer.graphqlPath}`)
});