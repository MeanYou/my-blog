<template>
  <div class="feature-catalog">
    <div class="feature-catalog__item" v-for="catalog in catalogs">
      <anchor :href="'#'+catalog.id">
        <img :src="catalog.img"/>
        <span>{{catalog.title}}</span>
      </anchor>
    </div>
  </div>
</template>

<script>
import Anchor from '@/components/Anchor'

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
  },
  components: {
    Anchor
  }
}
</script>

<style lang="less">
  .feature-catalog {
    width: 100%;
    height: 500px;
    text-align: center;

    .feature-catalog__item {
      display: inline-block;
    }
  }
</style>