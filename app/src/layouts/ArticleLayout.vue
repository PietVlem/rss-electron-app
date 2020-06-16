<template>
    <div class="overview-view">
        <Sidebar/>
        <div class="articles">
            <div class="articles__header">
                <h1>{{ pagetitle }}</h1>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Article-layout',
        components: {
            'Sidebar': () => import('@/components/Sidebar'),
        },
        props: {
            pagetitle: {
                type: String,
                default: ''
            }
        },
    }
</script>