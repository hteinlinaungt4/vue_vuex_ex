import { createStore } from 'vuex'

export default createStore({
  state: {
    name : "T42",
    fruits :[
      'Apple','Banana','Cup'
    ],
    userlists : [
      {
        id : 1,
        name : 'mgmg',
        address : 'Ygn',
        age : 21,
        workdone : true,
      },
      {
        id : 2,
        name : 'Aung Aung',
        address : 'Aungban',
        age : 25,
        workdone : false,
      },
      {
        id : 3,
        name : 'Kyaw Kyaw',
        address : 'Kalaw',
        age : 28,
        workdone : true,
      },
      {
        id : 4,
        name : 'Aye Aye',
        address : 'Mong Hsu',
        age : 19,
        workdone : false,
      },
    ]
  }, 
  getters: {
    count : state =>state.userlists.length,
    workfinish : state =>state.userlists.filter(x=>x.address === "Mong Hsu"),
    unwork : (state,getters) => getters.count - getters.workfinish.length,
  },
  mutations: {
  },
  actions: { 
    // change(){
    //   this.state.name = "Update Name";
    // }
    change : ({state},v)=> state.name = v,
  },
  modules: {
  }
})
