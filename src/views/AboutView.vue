<template>
  <div>
      This is About Page<br>
      <button @click="home()">Home</button>
      <button class="btn btn-danger mx-3" @click="getstate">Alert</button>
      <h1 class="text-black">{{ getstate }}</h1>
      <h1>{{ name }}</h1>
      <ul>
        <li v-for="(f,index) in this.$store.state.fruits" :key="index">
          {{f}}
        </li>
      </ul>
      <h1>Count {{count}}</h1>
      <h1>Done {{ workfinish.length }}</h1>
      <h1>Not Done {{ unwork }}</h1>
      <input type="text" placeholder="Enter name" v-model="storename" @keyup.enter="action()">
      <button class="btn btn-info mx-3" @click="action()">Change actions</button>
      <button class="btn btn-warning" @click="getter()">Getter Test</button>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
  export default {
    name : 'AboutView',
    data () {
      return {
       storename : '',
      }
    },
  //  computed: {
  //   getstate () {
  //     return console.log(this.$store.state.name);
  //   }
  //  },
  // computed : mapState({ getstate : (state) => state.name}),
  computed :{
     ...mapState(["name"]),
     ...mapGetters(["count","workfinish","unwork"]),
  },
    methods: {
      home(){
        this.$router.push({name : 'home'});
      },
      state(){
        console.log(this.$store.state.name);
      },
      getter(){
        console.log(this.$store.getters.unwork);
      },
      action(){
        this.$store.dispatch('change',this.storename);
        this.storename='';
      }
    },
  }
</script>

<style lang="stylus" scoped>

</style>
