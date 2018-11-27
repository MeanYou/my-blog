<template>
  <div class="container">
    <app-nav></app-nav>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppBar from '@/components/app-bar'
import AppSidebar from '@/components/app-sidebar'
import AppDialog from '@/components/app-dialog'
import AppSnackbar from '@/components/app-snackbar'
import AppFooter from '@/components/app-footer'

export default {
  name: 'DefaultLayout',

  components: { AppBar, AppSidebar, AppDialog, AppSnackbar, AppFooter },

  methods: {

  }
}
</script>

<style lang="stylus">
</style>
