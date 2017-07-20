<template>
  <div class="ui text container">
    <h1>Sign-up Page</h1>
      <form class="ui form segment" @submit.prevent="validateBeforeSubmit">
        <div class="field">
          <!--todo create a custom validator letters and dash-->
          <label>First Name</label>
          <input v-validate="'required'" v-bind:class="{'input': true, 'is-danger': errors.has('firstName') }"
                 placeholder="First Name" name="firstName" v-model="user.firstName" type="text">
          <span v-show="errors.has('firstName')" class="help is-danger">{{ errors.first('firstName') }}</span>
        </div>
        <div class="field">
          <label>Last Name</label>
          <input v-validate="'required'" v-bind:class="{'input': true, 'is-danger': errors.has('lastName') }"
                 placeholder="Last Name" name="lastName" v-model="user.lastName" type="text">
          <span v-show="errors.has('lastName')" class="help is-danger">{{ errors.first('lastName') }}</span>
        </div>
        <div class="two fields">
          <div class="field">
            <label>Email</label>
            <input  v-validate="'required|email'" v-bind:class="{'input': true, 'is-danger': errors.has('email') }"
                    placeholder="Email" name="email" v-model="user.email" type="text">
            <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
          </div>
          <div class="field">
            <label>Password</label>
            <input v-validate="'required|min: 8'" v-bind:class="{'input': true, 'is-danger': errors.has('password') }"
                   type="password" name="password" v-model="user.password">
            <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
          </div>
        </div>
        <button class="ui primary submit button">Submit</button>
      </form>
  </div>
</template>

<script>

  export default {
    name: 'signupPage',
    data () {
      return {
        user: {
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        }
      }
    },
    methods: {
      validateBeforeSubmit () {
        this.$validator.validateAll().then(result => {
          if (result) {
            this.postUser()
          }
        })
      },
      postUser () {
        this.$http.post('users', this.user).then((user) => {
          console.log(user)
        }, () => { })
      }
    }
  }

</script>
