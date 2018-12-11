<template>
  <a @click.prevent="jumpToAnchor" :href="href">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    data () {
      return {
        blogCatalogList: []
      }
    },
    props: {
      href: {
        require: true,
        type: String,
        default: '111'
      }
    },
    methods: {
      jumpToAnchor () {
        let dom = document.querySelector(this.href)
        if (dom) {
          window.scrollTo(0, dom.offsetTop)
        }
      }
    },
    mounted () {
      console.log(this.href)
    }
  }
</script>

<style lang="less">
  
</style>