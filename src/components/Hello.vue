<template>
  <div class="hello">
    <h1>Welcome to Your Vue.js App</h1>
    <div class="ui container" v-for="post in posts">

      <post v-bind:post="post"></post>

    </div>
  </div>
</template>

<script>

  import Post from './Post'

  export default {
    components: { Post },
    name: 'hello',
    data () {
      return {
        posts: []
      }
    },
    mounted () {
      this.$hello = this.$resource('posts{/id}')
      this.$hello.query().then((response) => {
        response.json().then((data) => {
          this.posts = data
        })
      }, () => {
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
