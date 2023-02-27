import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/app.css'
import axios from "axios";
import store from './store';

axios.defaults.baseURL='http://127.0.0.1:8000';
axios.defaults.withCredentials = true;

store.dispatch('authenticate').then(()=>{
    createApp(App).use(router).use(store).mount('#app')
})

