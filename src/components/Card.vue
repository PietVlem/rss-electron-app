<template>
    <a :href="info.link" class="card">
        <img :src="info.imageSrc" alt="">
        {{ info.title }}
    </a>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            info: {
                type: Object,
            },
        },
    }
</script>