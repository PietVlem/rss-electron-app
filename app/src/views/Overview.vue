<template>
    <div class="overview-view">
        <!--<Sidebar :allFeedStreams="allFeedStreams"/>-->
        <div class="siderbar">
            <!--<ul>
                <li :key="index" v-for="(FeedStream, index) in allFeedStreams">
                    {{ FeedStream }}
                </li>
            </ul>-->
        </div>
        <div>
            <ApolloQuery class="article-grid" :query="require('../graphql/articles.gql')">
                <template v-slot="{ result: { loading, error, data } }">
                    <div v-if="data" class="article-grid-inner">
                        <Card :info="article" :key="article.id" v-for="article in data.articles"/>
                    </div>
                </template>
            </ApolloQuery>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Overview',
        components: {
            'Card': () => import('@/components/Card'),
            /*'Sidebar': () => import('@/components/Sidebar'),*/
        },
    }
</script>

<style lang="postcss">
    .overview-view {
        @apply flex;
    }

    .article-grid {
        @apply flex justify-center;
        width: calc(100vw - 320px);
    }

    .article-grid-inner {
        @apply w-4/5 -mx-3 mt-6 flex flex-wrap;
    }
</style>
