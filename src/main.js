import { createApp,  } from 'vue'
import VueParticles from 'vue-particles';
import App from './App.vue'

const app = createApp(App)

app.use(VueParticles)
app.mount('#app')

