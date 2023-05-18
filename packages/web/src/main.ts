import { createApp } from 'vue'
import { registerLayouts } from './layouts/register';

import './style.css'
import App from './App.vue'

import router from './router';
import store from './store';

const app = createApp(App)

app.use(router)
app.use(store)

registerLayouts(app)

app.mount('#app')
