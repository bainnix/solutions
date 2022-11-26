import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import router from './router/index.js';


let app = createApp(App)
app
.use(PrimeVue)
.use(router)
.mount('#app')
