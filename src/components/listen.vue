<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <div @click="onClick">{{count}}</div>

      
  </div>
</template>

<script>
export default {
  name: 'listen',
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  data () {
    return {
      msg: process.env.NODE_ENV
    }
    
  },
  mounted () {
  
  },
  methods: {
    onClick () {
      this.$store.dispatch('increment')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
