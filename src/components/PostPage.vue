<template>
  <div>
    <h1>Post Page</h1>
    <h4>--{{ id }}--</h4>
    <post v-bind:post="post"></post>
  </div>
</template>

<script>

  import Post from './Post'

  export default {
    components: { Post },
    name: 'postPage',
    props: ['id'],
    data () {
      return {
        post: Object
      }
    },
    mounted () {
      this.$http.get(`posts/${this.id}`).then((response) => {
        response.json().then((data) => {
          this.post = data
        })
      }, () => {
      })
    }
  }
</script>
