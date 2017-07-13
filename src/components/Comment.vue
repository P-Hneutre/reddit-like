<template>
  <div>
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
