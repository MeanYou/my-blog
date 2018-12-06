<template>
  <div class="main__content__in">
    <div class="projects">
      <project-item v-for="(item, index) in projects" :key="item.id" :float="index%2 === 0 ? 'left' : 'right'" :title="item.title" :desc="item.desc"></project-item>
    </div>
    <div class="skills">skills</div>
    <div class="education">education</div>
  </div>
</template>

<script>
import ProjectItem from './ProjectItem'
export default {
  name: 'resume',
  data () {
    return {
      projects: [
        {
          id: 0,
          title: '1',
          desc: '1',
          imgs: [
            '/static/img/icons/favicon.ico'
          ]
        },
        {
          id: 1,
          title: '1',
          desc: '1'
        },
        {
          id: 2,
          title: '1',
          desc: '1'
        }
      ]
    }
  },
  components: {
    ProjectItem
  }
}
</script>

<style lang="less">
  .main__content__in {
    width: 1200px;
    height: auto;
    position: relative;
    left: 50%;
    margin-left: -600px;

    .projects {
      margin-top: 100px;
    }
  }
</style>
