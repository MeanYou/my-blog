import Vue from 'vue'

const speedObj = {
  faster: 500, // 500毫秒
  fast: 800, // 800毫秒
  normal: 1000, // 1秒
  slow: 2000, // 2秒
  slower: 3000 // 3秒
}

export default function registDirective () {
  Vue.directive('animate', {
    bind (el, binding, vnode, oldVnode) {
      if (!binding.value || !binding.value.type || !binding.value.trigger) {
        throw new Error("传参有误，格式{type: 'bounce', trigger: 'click'}")
      }
      let trigger = binding.value.trigger
      let type = binding.value.type
      let speed = binding.value.speed || 'normal'
      el.addEventListener(trigger, () => {
        el.classList.add('animated')
        el.classList.add(type)
        el.classList.add(speed)

        setTimeout(() => {
          el.classList.remove('animated')
          el.classList.remove(type)
          el.classList.remove(speed)
        }, speedObj[speed])
      })
      // console.log(el.classList)
      // console.log(binding)
    },
    inserted (el, binding, vnode, oldVnode) {

    },
    update (el, binding, vnode, oldVnode) {

    },
    componentUpdated (el, binding, vnode, oldVnode) {

    },
    unbind (el, binding, vnode, oldVnode) {

    }
  })
}
