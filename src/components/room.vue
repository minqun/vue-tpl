<template>
  <div class="room">
    <h1>{{ msg }}</h1>
    <div @click="onClick">{{count}}</div>
    
      
  </div>
</template>

<script>
import {toGet} from '../require/request'
export default {
  name: 'room',
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
    async onClick () {
      this.$store.dispatch('increment')
      let res = await toGet('hello', {id: 3333}, {contype: 1});
      console.log(res)
      console.log(window.location.origin)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
