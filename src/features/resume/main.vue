<template>
  <div class="main__content__in">
    <feature-catalog :catalogs="catalogs"></feature-catalog>
    <div class="projects" id="projects">
      <resume-title>项目经验</resume-title>
      <div class="triangle"></div>
      <div class="resume-item-container">
        <resume-item v-for="(item, index) in projects" :key="item.id" :float="index%2 === 0 ? 'left' : 'right'" :title="item.title">
          {{item.desc}}
        </resume-item>
      </div>
    </div>
    <div class="skills" id="skills">
      <resume-title>专业技能</resume-title>
      <div class="triangle"></div>
      <div class="resume-item-container">
        <resume-item v-for="(item, index) in skills" :key="item.id" :float="index%2 === 0 ? 'left' : 'right'" :title="item.title">
          {{item.desc}}
        </resume-item>
      </div>
    </div>
    <div class="education" id="education">
      <resume-title>教育经历</resume-title>
    </div>
  </div>
</template>

<script>
import util from '@/util'

import FeatureCatalog from '@/components/FeatureCatalog'
import ResumeTitle from './ResumeTitle'
import ResumeItem from './ResumeItem'

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
    FeatureCatalog,
    ResumeTitle,
    ResumeItem
  }
}
</script>

<style lang="less">
  .projects {
  }

  .resume-item-container {
    position: relative;
    padding: 60px 0;
    margin: 30px 0;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -2px;
      height: 100%;
      width: 4px;
      background: #ccc;
    }
  }

  .triangle {
    position: relative;
    margin-left: 50%;
    left: -60px;
    width: 0;
    height: 0;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
    border-top: 45px solid #98d361;
  }
</style>
