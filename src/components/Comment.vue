<template>
  <div>
    <h3>{{ comment.name }}</h3>
    <p>{{ comment.body }}</p>
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
