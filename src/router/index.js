import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

// lazy loading
const PostPage = () => import('@/components/PostPage')
const SignupPage = () => import('@/components/SignupPage')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Hello,
      name: 'root'
    },
    {
      path: '/signup',
      component: SignupPage,
      name: 'signupPage'
    },
    {
      path: '/posts/:id',
      component: PostPage,
      props: true,
      name: 'postPage'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
