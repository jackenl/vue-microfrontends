<template>
  <div class="home">
    <p class="desc">window.appName: {{ appName }}</p>
    <div>
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <router-link to="/app2/about">App2's about page</router-link>
  </div>
</template>

<script>

export default {
  name: 'home',
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
