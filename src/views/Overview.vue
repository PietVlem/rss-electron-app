<template>
    <div class="overview-view">
        <Sidebar></Sidebar>
        <div class="article-grid">
            <div class="article-grid-inner">
                <Card :info="item" :key="index" v-for="(item, index) in allArticles"></Card>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'Overview',
        components: {
            'Card': () => import('@/components/Card'),
            'Sidebar': () => import('@/components/Sidebar'),
        },
        computed: {
            ...mapGetters(['allArticles'])
        },
        methods: {
            ...mapActions(['fetchArticles']),
        },
        created() {
            this.fetchArticles();
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
