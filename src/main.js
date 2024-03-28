import '@vuepic/vue-datepicker/dist/main.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify.js'
import VueDatePicker from '@vuepic/vue-datepicker'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.component('VueDatePicker', VueDatePicker)

app.mount('#app')
