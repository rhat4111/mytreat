import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d9585016 = () => interopDefault(import('..\\pages\\appointments\\index.vue' /* webpackChunkName: "pages/appointments/index" */))
const _53e2d4d6 = () => interopDefault(import('..\\pages\\categories.vue' /* webpackChunkName: "pages/categories" */))
const _4a529d55 = () => interopDefault(import('..\\pages\\favorite.vue' /* webpackChunkName: "pages/favorite" */))
const _61ed1fde = () => interopDefault(import('..\\pages\\message.vue' /* webpackChunkName: "pages/message" */))
const _c96c3bd0 = () => interopDefault(import('..\\pages\\myaccount.vue' /* webpackChunkName: "pages/myaccount" */))
const _1f432785 = () => interopDefault(import('..\\pages\\payment\\index.vue' /* webpackChunkName: "pages/payment/index" */))
const _4f256cea = () => interopDefault(import('..\\pages\\services\\index.vue' /* webpackChunkName: "pages/services/index" */))
const _e2a23cb2 = () => interopDefault(import('..\\pages\\setting.vue' /* webpackChunkName: "pages/setting" */))
const _a918780c = () => interopDefault(import('..\\pages\\appointments\\time.vue' /* webpackChunkName: "pages/appointments/time" */))
const _70bd938a = () => interopDefault(import('..\\pages\\payment\\fail.vue' /* webpackChunkName: "pages/payment/fail" */))
const _03413914 = () => interopDefault(import('..\\pages\\payment\\success.vue' /* webpackChunkName: "pages/payment/success" */))
const _64e21130 = () => interopDefault(import('..\\pages\\services\\detail.vue' /* webpackChunkName: "pages/services/detail" */))
const _3a71539d = () => interopDefault(import('..\\pages\\appointments\\_id.vue' /* webpackChunkName: "pages/appointments/_id" */))
const _5ac1e22e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/appointments",
    component: _d9585016,
    name: "appointments"
  }, {
    path: "/categories",
    component: _53e2d4d6,
    name: "categories"
  }, {
    path: "/favorite",
    component: _4a529d55,
    name: "favorite"
  }, {
    path: "/message",
    component: _61ed1fde,
    name: "message"
  }, {
    path: "/myaccount",
    component: _c96c3bd0,
    name: "myaccount"
  }, {
    path: "/payment",
    component: _1f432785,
    name: "payment"
  }, {
    path: "/services",
    component: _4f256cea,
    name: "services"
  }, {
    path: "/setting",
    component: _e2a23cb2,
    name: "setting"
  }, {
    path: "/appointments/time",
    component: _a918780c,
    name: "appointments-time"
  }, {
    path: "/payment/fail",
    component: _70bd938a,
    name: "payment-fail"
  }, {
    path: "/payment/success",
    component: _03413914,
    name: "payment-success"
  }, {
    path: "/services/detail",
    component: _64e21130,
    name: "services-detail"
  }, {
    path: "/appointments/:id",
    component: _3a71539d,
    name: "appointments-id"
  }, {
    path: "/",
    component: _5ac1e22e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
