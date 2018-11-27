<template>
  <div id="app">
    <component :is="component">
      <slot></slot>
    </component>
  </div>
</template>

<script>
import PublicLayout from '@/layouts/public/main.vue'
import DefaultLayout from '@/layouts/default/main.vue'

export default {
  name: 'app',

  components: {
    PublicLayout,
    DefaultLayout
  },

  computed: {
    component () {
      return this.$store.state.common.layout
    }
  },

  mounted () {
    // 更新标题
    this.$store.watch((state) => {
      return state.common.title
    }, (title) => {
      document.title = title
      console.log('title updated')
    }, {
      deep: true
    })
  }
}
</script>

<style>

</style>
