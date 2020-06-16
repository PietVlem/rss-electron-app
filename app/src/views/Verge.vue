<template>
    <ArticleLayout :pagetitle="'The verge'">
        <ApolloQuery :query="require('../graphql/queries/verge-articles.gql')" class="articles__grid">
            <template v-slot="{ result: { loading, error, data } }">
                <div class="articles__grid-inner" v-if="data">
                    <Card :info="article" :key="article.id" v-for="article in data.vergeArticles"/>
                </div>
            </template>
        </ApolloQuery>
    </ArticleLayout>
</template>

<script>
    export default {
        name: 'Overview',
        components: {
            'ArticleLayout': () => import('@/layouts/ArticleLayout'),
            'Card': () => import('@/components/Card'),
        },
    }
</script>