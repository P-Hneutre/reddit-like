<template>
  <div id="app">
    <div class="ui grid inverted menu navbar">
      <div class="ui container">
        <router-link :to="{name: 'root'}" class="header item">Welcome</router-link>
        <!--<router-link :to="{name: '', params: {id:1} }" class="item">Article</router-link>-->
        <div class="right menu">
          <router-link :to="{name: ''}" class="item">Sign Up</router-link>
          <router-link :to="{name: ''}" class="item">Log In</router-link>
        </div>
      </div>
    </div>

    <div class="main">
      <h1>Main View</h1>
      <router-view></router-view>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>

</style>
