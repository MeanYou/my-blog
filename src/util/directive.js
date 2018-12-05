import Vue from 'vue'

export default function registDirective () {
  Vue.directive('animate', {
    bind (el, binding, vnode, oldVnode) {
      if (!binding.value || !binding.value.type || !binding.value.trigger) {
        throw new Error("传参有误，格式{type: 'bounce', trigger: 'click'}")
      }
      if (binding.value && binding.value.speed) {

      }
      let trigger = binding.value.trigger
      let type = binding.value.type
      if (type === 'scroll') {
        window.addEventListener('scroll', () => {
          console.log(111)
        })
      } else {
        el.addEventListener(trigger, () => {
          el.classList.add('animated')
          el.classList.add(type)
          if(binding.value.speed) {
            el.classList.add(binding.value.speed)
          }
        })
      }
      
      console.log(el.classList)
      console.log(binding)
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
