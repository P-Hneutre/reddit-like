<template>
  <div>
    <h1>{{ comment.name }}</h1>
    <h3>{{ comment.body }}</h3>
  </div>
</template>

<script>
  export default {
    name: 'comment',
    props: ['comment']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
