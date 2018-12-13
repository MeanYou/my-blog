<template>
  <div class="resume-title clear">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'resume-item',
    data () {
      return {

      }
    },
    mounted () {
      console.log(this.float)
    }
  }
</script>

<style>
  .resume-title {
    width: 100%;
    height: 150px;
    line-height: 150px;
    vertical-align: middle;
    text-align: center;
    font-size: 26px;
    color: #333;
    border-bottom: 4px solid #98d361;
    border-top: 4px solid #98d361;
  }
</style>