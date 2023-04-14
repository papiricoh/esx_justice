import { createApp } from 'vue'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import itemSeries from 'highcharts/modules/item-series'
import App from './App.vue'
import store from './store';

import 'quill/dist/quill.snow.css';

itemSeries(Highcharts);

createApp(App).use(store).use(HighchartsVue).mount('#app')
