<template>
  <div>
    <router-link :to="{name: 'postPage', params: {id: post.id} }" class="item"><h1>{{ post.title }}</h1></router-link>
    <h3>{{ post.body }}</h3>
  </div>
</template>

<script>
  export default {
    name: 'post',
    props: ['post']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
