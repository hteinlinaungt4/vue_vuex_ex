<template>
    <div>
        {{ TextProps }}
        <slot>Default</slot>
    </div>
</template>

<script>
    export default {
        name : 'TestView',
        props: {
            TextProps: {
                type: String,
                default:'Default',
                validator(value){
                    return value.length > 10
                } 
            },
        },
    }
</script>

<style lang="stylus" scoped>

</style>
