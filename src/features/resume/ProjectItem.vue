<template>
  <div class="project" v-animate="{type: 'bounce', trigger: 'mouseenter'}">
    <div>{{title}}</div>
    <div>{{desc}}</div>
  </div>
</template>

<script>
  export default {
    name: 'project-item',
    data () {
      return {

      }
    },
    props: {
      title: {
        require: true,
        type: String
      },
      desc: {
        type: String
      }
    },
    methods: {

    }
  }
</script>

<style>
  .project {
    
  }
</style>