<template>
  <div>{{title}}: {{desc}}</div>
</template>

<script>
  export default {
    name: 'blogPreview',
    data () {
      return {
        blogId: null
      }
    },
    props: {
      title: {
        type: String,
        required: true
      },
      desc: {
        type: String,
        required: true
      }
    },
    methods: {
    }
  }
</script>