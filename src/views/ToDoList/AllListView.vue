<template>
    <div>
        <ListView></ListView>
        <ListView></ListView>
    </div>
</template>

<script>
import ListView from './EachListView.vue'
    export default {
        name : 'AlllistView',
        components: {
            ListView
        }
    }
</script>

<style lang="stylus" scoped>

</style>
