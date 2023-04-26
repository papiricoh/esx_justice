import { createApp } from 'vue'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import itemSeries from 'highcharts/modules/item-series'
import sankey from 'highcharts/modules/sankey'
import organizationSeries from 'highcharts/modules/organization'
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
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons'

window.$ = window.jQuery = $;

library.add(faUserSecret)
library.add(faList)
library.add(faListOl)
library.add(faBold)
library.add(faItalic)
library.add(faHouse)
library.add(faBuildingColumns)
library.add(faFlag)
library.add(faBook)
library.add(faBalanceScale)

itemSeries(Highcharts);
sankey(Highcharts);
organizationSeries(Highcharts);

createApp(App).use(store).use(HighchartsVue).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
