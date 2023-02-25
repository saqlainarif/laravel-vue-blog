import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Post from '../views/Post.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/posts/:slug',
        name: 'post',
        component: Post,
        props: true
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
