<template>
<div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links{{count}}</h2>
    
    <h2>Ecosystem{{a}}</h2>
    
</div>
</template>

<script>

export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    computed:{
      count :{
        get(){
          return this.$store.state['templateA'].count
        },set(val){
          this.$store.commit('templateA/count',val)
        }
      },
      a:{
        get(){
          return this.$store.state['templateB'].count
        },set(val){
          this.$store.commit('templateB/count',val)
        }
      }
    },
    mounted(){
      // setInterval(()=>{
        this.count = Math.random() *100
        this.a = Math.floor(Math.random() *10000)
        this.$store.dispatch('templateB/count')
      // },100)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
