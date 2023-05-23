import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { router } from './router';
import vuetify from './plugins/vuetify';
import '@/scss/style.scss';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import VueTablerIcons from 'vue-tabler-icons';
import './_mockApis';
import Maska from 'maska';

const app = createApp(App);
app.use(router);
app.use(PerfectScrollbar);
app.use(VueTablerIcons);
app.use(createPinia());
app.use(Maska);
app.use(vuetify).mount('#app');
