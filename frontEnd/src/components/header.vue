<template>
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" v-link="'/'">PCS</a>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" >

        <ul class="nav navbar-nav">
            <li><a v-link="'/tags'">标签列表</a></li>
            <li><a v-link="'/ojs'">OJ列表</a></li>
        </ul>

        <form class="navbar-form navbar-right" role="search">
          <div class="form-group">
            <input v-model="id" type="number" class="form-control" placeholder="输入id,快速跳转" @keyup.enter="jump">
          </div>
          <button type="submit" class="btn btn-default" @click="jump">Go!</button>
        </form>

        <ul class="nav navbar-nav navbar-right">
            <li><a href="#">帮助</a></li>
        </ul>

    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>
<script>
    export default {
      props:{
        name:String,
        id:1,
      },
      methods:{
        jump:function(){
          console.log('jump to /posts/'+this.id)
          this.$router.go('/posts/'+this.id)
        }
      }
    }
</script>
