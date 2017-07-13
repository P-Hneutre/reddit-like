<template>
  <div class="ui container">
    <h1>Post Page</h1>
    <h2>Post number {{ id }}</h2>
    <post v-bind:post="post"></post>
    <div class="ui form">
      <div class="field">
        <label>User Text {{ comment }}</label>
        <textarea v-model="comment"></textarea>
        <button v-on:click="postComment" class="ui button">Submit</button>
      </div>
    </div>
    <h2>Comments:</h2>
    <div v-for="comment in post.comments">
      <comment v-bind:comment="comment"></comment>
    </div>
  </div>
</template>

<script>

  import Post from './Post'
  import Comment from './Comment'

  export default {
    components: {Post, Comment},
    name: 'postPage',
    props: ['id'],
    data () {
      return {
        post: Object,
        comments: Object,
        comment: ''
      }
    },
    mounted () {
      this.$post = this.$resource('posts{/id}{/term}')
      this.getPost()
    },
    methods: {
      getPost () {
        this.$post.get({id: this.id}).then((response) => {
          response.json().then((data) => {
            this.post = data
          })
        }, () => {
        })
      },

      postComment (event) {
        console.log(event)
        console.log(this.comment)

        if (this.comment !== '') {
          this.$post.save({id: this.id, term: 'comments'}, {userId: this.post.userId, body: this.comment})
            .then((response) => {
              this.comment = ''
              this.getPost()
            }, () => { })
        }
      }
    }
  }
</script>
