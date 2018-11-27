<template>
</template>

<script>
export default {
  name: 'AppFooter',

  computed: {
    sidebarVisibility () {
      return this.$store.state.common.sidebar.visible && this.$vuetify.breakpoint.mdAndUp
    }
  }
}
</script>

<style lang="stylus">
.my-appfooter
  justify-content: center

  &--sidebar-open
    padding-left: 300px

</style>
