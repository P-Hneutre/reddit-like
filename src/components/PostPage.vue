<template>
  <div>
    <h1>Post Page</h1>
    <h4>--{{ id }}--</h4>
    <post v-bind:post="post"></post>
    <div v-for="comment in comments">
      <comment v-bind:comment="comment"></comment>
    </div>
  </div>
</template>

<script>

  import Post from './Post'
  import Comment from './Comment'

  export default {
    components: { Post, Comment },
    name: 'postPage',
    props: ['id'],
    data () {
      return {
        post: Object,
        comments: Object
      }
    },
    mounted () {
      this.$post = this.$resource('posts{/id}{/term}')
      this.$post.get({id: this.id}).then((response) => {
        response.json().then((data) => {
          this.post = data
        })
      }, () => {
      })
      this.$post.query({id: this.id, term: 'comments'}).then((response) => {
        response.json().then((data) => {
          this.comments = data
        })
      }, () => {
      })
    }
  }
</script>
