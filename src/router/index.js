import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/IndexPage'

// lazy loading
const PostPage = () => import('@/pages/PostPage')
const SignupPage = () => import('@/pages/SignupPage')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
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
