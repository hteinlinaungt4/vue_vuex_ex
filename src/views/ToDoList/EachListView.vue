<template>
    <div>
       <div class="row">
            <div class="col-6 offset-3">
                <ul class="">
                    <li class="list-group-item">
                        <input type="text" class="form-control" v-model="input" @keypress.enter="save()" v-if="textshow">
                       <span v-else @dblclick="edittext()"> {{ input }}</span>
                    </li>
                </ul>
            </div>
       </div>
    </div>
</template>

<script>
    export default {
        name : 'EachListView',
        data() {
            return {
                textshow : true,
                input : '',
            }
        },
        methods: {
            save(){
                this.textshow = false
            },
            edittext(){
                this.textshow = true
            }
        },
    }
</script>

<style lang="stylus" scoped>

</style>
