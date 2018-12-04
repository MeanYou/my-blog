<template>
  <div>
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
    props: ['title', 'desc'],
    methods: {

    }
  }
</script>