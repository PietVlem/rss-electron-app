<template>
    <div class="overview-view">
        <!--<Sidebar :allFeedStreams="allFeedStreams"/>-->
        <div class="siderbar">
            <ul>
                <li :key="index" v-for="(FeedStream, index) in allFeedStreams">
                    {{ FeedStream }}
                </li>
            </ul>
        </div>
        <div class="article-grid">
            <div class="article-grid-inner">
                <Card :info="item" :key="index" v-for="(item, index) in allArticles"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import Parser from 'rss-parser';

    export default {
        name: 'Overview',
        data() {
            return {
                allFeeds: [],
            }
        },
        components: {
            'Card': () => import('@/components/Card'),
            /*'Sidebar': () => import('@/components/Sidebar'),*/
        },
        computed: {
            ...mapGetters(['allArticles', 'allFeedStreams']),
        },
        methods: {
            ...mapActions(['fetchArticles']),
        },
        created() {
            this.fetchArticles();

            let parser = new Parser({
                customFields: {
                    item: [
                        'content',
                    ],
                }
            });
            (async () => {

                let feed = await parser.parseURL('https://www.theverge.com/rss/index.xml');
                console.log(feed);

                /*feed.items.forEach(item => {
                    console.log(item.title + ':' + item.link)
                });*/

            })();
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
