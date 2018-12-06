<template>
  <div class="main">
    <app-nav></app-nav>
    <div class="main__content">
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav'
import AppSidebar from '@/components/AppSidebar'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'DefaultLayout',

  components: { AppNav, AppSidebar, AppFooter },

  methods: {

  }
}
</script>

<style lang="less">
  .main {
    width: 100%;
    height: 100%;
    position: absolute;

    .main__content {
      width: 100%;
      height: auto;
      position: relative;
    }
  }
</style>
