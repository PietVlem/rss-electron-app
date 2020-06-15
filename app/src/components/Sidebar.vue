<template>
    <div class="siderbar">
        <ul>
            <li :key="index" v-for="(FeedStream, index) in allFeedStreams">
                {{ FeedStream }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
        props: {
            allFeedStreams: {
                type: Array
            },
        },
    }
</script>