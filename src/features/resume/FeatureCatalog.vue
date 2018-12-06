<template>
  <div class="feature-catalog">
    <div class="feature-catalog__item" v-for="catalog in catalogs">
      <a :href="'#'+catalog.id"></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'feature-catalog',
    data () {
      return {

      }
    },
    props: {
      catalogs: {
        require: true,
        type: Array
      }
    },
    methods: {

    },
    mounted () {
    }
  }
</script>

<style lang="less">
  .feature-catalog {

  }
</style>