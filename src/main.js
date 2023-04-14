import { createApp } from 'vue'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import itemSeries from 'highcharts/modules/item-series'
import App from './App.vue'
import store from './store';
import $ from 'jquery';

window.$ = window.jQuery = $;


itemSeries(Highcharts);

createApp(App).use(store).use(HighchartsVue).mount('#app')
