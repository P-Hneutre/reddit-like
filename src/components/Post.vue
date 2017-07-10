<template>
  <div>
    <router-link :to="{name: 'postPage', params: {id: post.id} }" class="item"><h3>{{ post.title }}</h3></router-link>
    <p>{{ post.body }}</p>
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
