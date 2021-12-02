import { createApp } from 'vue'
import 'reset-css'
import 'vant/lib/index.css'
import Vant from 'vant'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app
  .use(Vant)
  .use(router)
  .use(store)
  .mount('#app')
