<template>
  <div class="main__content__in">
    <div class="blog-author">
      <author-panel></author-panel>
    </div>
    <div class="blog-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AuthorPanel from './AuthorPanel'
export default {
  name: 'blog',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  components: {
    AuthorPanel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  
</style>
