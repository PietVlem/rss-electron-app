<template>
    <div class="siderbar">
        <div class="nav">
            <rss-icon size="1.5x" class="custom-class"></rss-icon>
            <span>Feeds</span>
            <router-link class="nav__item" to="/">Overview</router-link>
            <router-link class="nav__item" to="/vrt">Vrt Nieuws</router-link>
            <router-link class="nav__item" to="/verge">The Verge</router-link>
        </div>
    </div>
</template>

<script>
    import { RssIcon } from 'vue-feather-icons'
    export default {
        name: 'Sidebar',
        components: {
            RssIcon
        }
    }
</script>