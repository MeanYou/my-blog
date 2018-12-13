<template>
  <div>
    <blog-preview v-for="item in blogList" :key="item.id" :title="item.title" :desc="item.desc" @click.native="$router.push('/blog/'+item.id)"></blog-preview>
  </div>
</template>

<script>
  import BlogPreview from './BlogPreview'
  export default {
    name: 'blogList',
    data () {
      return {
        blogList: [
          {
            id: 0,
            title: 'blog1',
            desc: 'blog1'
          },
          {
            id: 1,
            title: 'blog2',
            desc: 'blog2'
          },
          {
            id: 2,
            title: 'blog3',
            desc: 'blog3'
          }
        ]
      }
    },
    components: {
      BlogPreview
    }
  }
</script>