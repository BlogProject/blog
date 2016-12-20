<template>
  <header-pic></header-pic>
  <div class="container">
    <div class="col-md-7">
      <h1> tag </h1>
    </div>

    <div class="col-md-5">
      <recent-post></recent-post>
    </div>
  </div>
</template>

<script>
import RecentPost from '../components/RecentPost.vue'
import headerPic from '../components/headerPic.vue'

export default {
  components: {
    RecentPost,
    headerPic
  }
}
</script>

<style>
</style>
