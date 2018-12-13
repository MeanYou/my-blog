<template>
  <div>{{blogId}}</div>
</template>

<script>
  export default {
    data () {
      return {
        blogId: null
      }
    },
    created () {
      this.blogId = this.$route.params.id
    }
  }
</script>

<style></style>