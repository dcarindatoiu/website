import { createApp } from 'vue'
import App from './App.vue'
import './design-system/tokens/index.css'
import router from './router/index.ts'

createApp(App).use(router).mount('#app')
