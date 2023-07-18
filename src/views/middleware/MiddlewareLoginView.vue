<template>
    <div class="offset-3 col-6">
        <legend>
            <fieldset>
                <label for="">Email</label>
                <input type="text" class="form-control" v-model="user.email">
            </fieldset>
        </legend>
        <button class="btn btn-primary mx-3" @click="login()">Login</button>
        <button class="btn btn-danger" @click="logout()">Logout</button>
    </div>
</template>

<script>
    export default {
        name : 'MiddlewareLoginView',
        data () {
            return {
                user : {
                    email : ''
                }
            }
        },
        methods: {
            login () {
               if (this.user.email != '') {
                 localStorage.setItem('useritem',"true")
               }else{
                alert('Error');
               }
            },
            logout () {
                localStorage.setItem('useritem',"false")
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
