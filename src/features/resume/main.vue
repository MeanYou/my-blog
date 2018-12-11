<template>
  <div class="main__content__in">
    <feature-catalog :catalogs="catalogs"></feature-catalog>
    <div class="projects" id="projects">
      <resume-item v-for="(item, index) in projects" :key="item.id" :float="index%2 === 0 ? 'left' : 'right'" :title="item.title">
        {{item.desc}}
      </resume-item>
    </div>
    <div class="skills" id="skills">
      <resume-item v-for="(item, index) in skills" :key="item.id" :float="index%2 === 0 ? 'left' : 'right'" :title="item.title">
        {{item.desc}}
      </resume-item>
    </div>
    <div class="education" id="education">education</div>
  </div>
</template>

<script>
import util from '@/util'

import ResumeItem from './ResumeItem'
import FeatureCatalog from '@/components/FeatureCatalog'

export default {
  name: 'resume',
  data () {
    return {
      catalogs: [
        {
          id: 'projects',
          title: '项目经验',
          img: ''
        },
        {
          id: 'skills',
          title: '专业技能',
          img: ''
        },
        {
          id: 'education',
          title: '教育经历',
          img: ''
        }
      ],
      projects: [
        {
          id: util.uuid(),
          title: '1',
          desc: '1',
          imgs: [
            '/static/img/icons/favicon.ico'
          ]
        },
        {
          id: util.uuid(),
          title: '1',
          desc: '1'
        },
        {
          id: util.uuid(),
          title: '1',
          desc: '1'
        }
      ],
      skills: [
        {
          id: util.uuid(),
          title: 'JavaScript',
          proficiency: '熟练'
        },
        {
          id: util.uuid(),
          title: 'JavaScript',
          proficiency: ''
        }
      ]
    }
  },
  components: {
    ResumeItem,
    FeatureCatalog
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
