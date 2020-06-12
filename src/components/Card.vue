<template>
    <div @click="show" class="card">
        <img :src="info.imageSrc" alt="">
        {{ info.title }}
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            info: {
                type: Object,
            },
        },
        methods: {
            show() {
                this.$modal.show({
                    template: `
                        <div class="article-modal">
                            <h1>{{ title }}</h1>
                            <img :src="imageSrc" alt="">
                            <p>{{ summary }}</p>
                            <a target="_blank" :href="link">View on website</a>
                        </div>
                    `,
                    props: ['title','summary', 'link', 'imageSrc']
                }, {
                    title: this.info.title,
                    summary: this.info.summary,
                    link: this.info.link,
                    imageSrc: this.info.imageSrc,
                }, {
                    height: 'auto'
                },)
            },
        },
    }
</script>
