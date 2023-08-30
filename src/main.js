import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Swal from 'sweetalert2'; 
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const app = createApp(App);

app.config.globalProperties.$swal = Swal;

app.use(router).mount('#app');