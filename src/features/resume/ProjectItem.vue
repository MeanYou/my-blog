<template>
  <div class="project-container clear">
    <div :class="classList" v-animate="{type: 'flipInX', trigger: 'mouseenter'}">
      <div class="project-item__title">{{title}}</div>
      <div class="project-item__desc">{{desc}}</div>
    </div>
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
      float: {
        type: String,
        default: 'left'
      },
      title: {
        require: true,
        type: String
      },
      desc: {
        type: String
      }
    },
    computed: {
      classList () {
        return 'project-item ' + (this.float === 'left' ? 'project-item--left' : 'project-item--right')
      }
    },
    methods: {

    },
    mounted () {
      console.log(this.float)
    }
  }
</script>

<style lang="less">
  .project-container {
    width: 100%;
    margin-top: -30px;
  }
  .project-item {
    box-sizing: border-box;
    width: 480px;
    border-radius: 10px;
    padding: 20px;
    background-color: #EEE;
    position: relative;

    .project-item__title {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    .project-item__desc {
      font-size: 16px;
      color: #333;
      line-height: 24px;
    }
  }

  .project-item--left {
    float: left;
    margin-left: 50px;

    &:after {
      content: '';
      display: block;
      width: 60px;
      height: 60px;
      border-radius: 30px;
      background-color: #EEE;
      position: absolute;
      top: 10px;
      right: -100px;
    }
  }

  .project-item--right {
    float: right;
    margin-right: 50px;

    &:before {
      content: '';
      display: block;
      width: 60px;
      height: 60px;
      border-radius: 30px;
      background-color: #EEE;
      position: absolute;
      top: 10px;
      left: -100px;
    }
  }
</style>