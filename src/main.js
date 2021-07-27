import { createApp,  } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCloudMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

library.add(faCloudMoon);
library.add(faSun);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)

// Mount Application
app.mount('#app')

