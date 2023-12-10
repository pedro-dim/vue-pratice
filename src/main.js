import { createApp } from "vue";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import router from "./routes/router";
import App from "./App.vue";
import "./assets/css/tailwind.css";
import { createPinia } from "pinia";

createApp(App)
  .use(autoAnimatePlugin)
  .use(createPinia())
  .use(router)

  .mount("#app");
