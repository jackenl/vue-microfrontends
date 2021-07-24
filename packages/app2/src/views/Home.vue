<template>
  <div class="home">
    <p class="desc">window.appName: {{ appName }}</p>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      appName: ''
    }
  },
  created() {
    this.appName = window.appName
  }
}
</script>
