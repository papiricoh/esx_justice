import { createApp } from 'vue'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import itemSeries from 'highcharts/modules/item-series'
import App from './App.vue'
import store from './store';
import $ from 'jquery';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faListOl } from '@fortawesome/free-solid-svg-icons'
import { faBold } from '@fortawesome/free-solid-svg-icons'
import { faItalic } from '@fortawesome/free-solid-svg-icons'

window.$ = window.jQuery = $;

library.add(faUserSecret)
library.add(faList)
library.add(faListOl)
library.add(faBold)
library.add(faItalic)

itemSeries(Highcharts);

createApp(App).use(store).use(HighchartsVue).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
