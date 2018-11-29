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
