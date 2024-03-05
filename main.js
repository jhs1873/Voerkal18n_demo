import App from './App'
import Vue from 'vue'
import './uni.promisify.adaptor'

import { t, i18nScope } from "./languages"
import { i18nPlugin, i18nMixin } from "@voerkai18n/vue2"
Vue.prototype.$t = t
Vue.use(i18nPlugin, { i18nScope })
Vue.mixin(i18nMixin(i18nScope))

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()

