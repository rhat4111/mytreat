export { default as Accordion } from '../..\\components\\Accordion.vue'
export { default as AppointmentCard } from '../..\\components\\AppointmentCard.vue'
export { default as Avatar } from '../..\\components\\Avatar.vue'
export { default as Button } from '../..\\components\\Button.vue'
export { default as CategoryCard } from '../..\\components\\CategoryCard.vue'
export { default as FavoriteCard } from '../..\\components\\FavoriteCard.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as Radio } from '../..\\components\\Radio.vue'
export { default as Rate } from '../..\\components\\Rate.vue'
export { default as Review } from '../..\\components\\Review.vue'
export { default as Service } from '../..\\components\\Service.vue'
export { default as Step } from '../..\\components\\Step.vue'
export { default as Tab } from '../..\\components\\Tab.vue'
export { default as TextField } from '../..\\components\\TextField.vue'
export { default as TimeCard } from '../..\\components\\TimeCard.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
