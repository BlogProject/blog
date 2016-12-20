<template>
  <myheader></myheader>
      <router-view></router-view>
</template>

<script>
import myheader from './components/header.vue'

export default {
  components: {
      myheader,
  }
}
</script>

<style>
body {
    padding-top:50px;
}
</style>
