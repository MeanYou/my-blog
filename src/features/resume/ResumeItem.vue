<template>
  <div class="resume-container clear">
    <div :class="classList" v-animate="{type: 'flipInX', trigger: 'mouseenter'}">
      <div class="resume-item__title">{{title}}</div>
      <div class="resume-item__desc">
        <slot></slot>
      </div>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: 'resume-item',
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
      }
    },
    computed: {
      classList () {
        return 'resume-item ' + (this.float === 'left' ? 'resume-item--left' : 'resume-item--right')
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
  .resume-container {
    width: 100%;
    margin-top: -30px;
  }
  .resume-item {
    box-sizing: border-box;
    width: 480px;
    border-radius: 10px;
    padding: 20px;
    background-color: #EEE;
    position: relative;

    .resume-item__title {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    .resume-item__desc {
      font-size: 16px;
      color: #333;
      line-height: 24px;
    }
  }

  .resume-item--left {
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

  .resume-item--right {
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