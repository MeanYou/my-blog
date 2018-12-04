<template>
  <div class="app-nav">
    <div class="nav-container">
      <img class="nav-container__logo" src="@/assets/logo.png"/>
      <ul class="nav-container__menu">
        <li class="nav-container__menu__item" @click="$router.push('/')">
          <a href="javascript:void(0);">博客</a>
        </li>
        <li class="nav-container__menu__item" @click="$router.push('/resume')">
          <a href="javascript:void(0);">简历</a>
        </li>
        <li class="nav-container__menu__item" @click="$router.push('/account')">
          <a href="javascript:void(0);">个人中心</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        blogCatalogList: []
      }
    },
    methods: {
      goToCatalog (item) {
        console.log(item)
      }
    },
    mounted () {
      console.log(this.$store)
    }
  }
</script>

<style lang="less">
  .app-nav {
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    background-color: #98d361;
    border-color: transparent;
    border-width: 0 0 1px;
    height: 50px;

    .nav-container {
      position: absolute;
      width: 1200px;
      height: 50px;
      line-height: 50px;
      left: 50%;
      margin-left: -600px;

      .nav-container__logo {
        width: 35px;
        vertical-align: middle;
      }

      .nav-container__menu {
        float: right;
        font-size: 16px;
        box-sizing: border-box;

        .nav-container__menu__item {
          position: relative;
          background-color: transparent;
          float: left;
          cursor: pointer;
          -webkit-transition: all 350ms ease-in-out;
          -moz-transition: all 350ms ease-in-out;
          -o-transition: all 350ms ease-in-out;
          transition: all 350ms ease-in-out;
          padding: 0 15px;

          a {
            color: #EAFFD6;
            text-decoration: none;
            padding: 0;
            position: relative;
            -webkit-transition: color 250ms ease-in-out;
            -moz-transition: color 250ms ease-in-out;
            -o-transition: color 250ms ease-in-out;
            transition: color 250ms ease-in-out;
          }

          &:after {
            content:"";
            position: absolute;
            display: block;
            width: 0;
            height: 0;
            border: 1px solid transparent;
            box-sizing: border-box;
            left: 0;
            bottom: 0;
            -webkit-transition: all 250ms ease-in-out;
            -moz-transition: all 250ms ease-in-out;
            -o-transition: all 250ms ease-in-out;
            transition: all 250ms ease-in-out;
          }
        }
        .nav-container__menu__item:hover {
          background-color: #EEE;

          a {
            color: #7CB14A;
          }

          &:after {
            width: 100%;
            border-color: #333;
          }
        }
      }
    }
  }
</style>