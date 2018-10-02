import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Account from '@/components/Account'
import Post from '@/components/Post'
import Block from '@/components/Block'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/@:account',
      name: 'Account',
      component: Account
    },{
      path: '/@:account/:permlink',
      name: 'Post',
      component: Post
    },{
      path: '/b/:id',
      name: 'Block',
      component: Block
    },    
  ],
  //mode: 'history',
})
