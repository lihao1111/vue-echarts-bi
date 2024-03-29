import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'

Vue.component('svg-icon', SvgIcon)
const req = require.context('./svg', true, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
