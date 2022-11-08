import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Import Style
import '@/assets/styles.css'

createApp(App).use(router).mount('#app')
