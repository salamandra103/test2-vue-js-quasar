import { createApp } from "vue";
import App from "./App.vue";
import quasarUserOptions from "./quasar-user-options";
import { Quasar } from "quasar";

import "@/styles/index.scss";

import Typography from "@/components/Typography.vue";

const app = createApp(App);

app.component("Typography", Typography);

app.use(Quasar, quasarUserOptions).mount("#app");
