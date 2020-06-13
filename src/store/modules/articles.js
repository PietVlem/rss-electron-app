/*import Parser from "rss-parser";*/
import vrt from './article-services/vrt';

const state = {
    articles: [],
    feedStreams: [],
}
const getters = {
    allArticles: () => state.articles,
    allFeedStreams: () => state.feedStreams
}

const actions = {
    async fetchArticles({commit, dispatch}) {
        /*Vrt-nieuws*/
        const vrtArticles = await vrt.getVrtFeed();
        dispatch({
            type: "addFeedStream",
            feedStreamName: 'vrt'
        })
        commit('setArticles', vrtArticles)
    },
    addFeedStream: ({ commit }, feedStreamName) => {
        commit('setFeedStream', feedStreamName);
    }
}

const mutations = {
    setArticles: (state, articles) => (state.articles = articles),
    setFeedStream: (state, feedStreamName) => (state.feedStreams.push(feedStreamName.feedStreamName)),
}

export default {
    state,
    getters,
    actions,
    mutations
}