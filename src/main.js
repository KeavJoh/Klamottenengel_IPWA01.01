import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "bootstrap";
import Datepicker from '../node_modules/@vuepic/vue-datepicker';
import '../node_modules/@vuepic/vue-datepicker/dist/main.css';

const app =createApp(App);
app.use(store);
app.use(router);
app.component('TheDatepicker', Datepicker);
app.mount('#app');
