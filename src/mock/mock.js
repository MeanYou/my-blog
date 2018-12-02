import Mock from 'mockjs'

function beforeIntercept (data) {
  return {
    ...data,
    status: 1,
    message: '请求成功'
  }
}

function intercept () {
  // 拦截登录
  Mock.mock(/\/user\/login/, options => {
    let data = {
      token: '111'
    }
    return beforeIntercept(data)
  })
  // 拦截登出
  Mock.mock(/\/user\/logout/, options => {
    let data = {
      token: '111'
    }
    return beforeIntercept(data)
  })
  // 拦截我的简历
  Mock.mock(/\/resume/, options => {
    let data = [
      {
        date: ['2015-07-01', '2017-03-01'],
        company: '浙江贵仁科技股份有限公司',
        pieces: [
          {
            title: '西藏风险图',
            imgs: [],
            skills: ['jquery', 'dojo', 'arcgis js api'],
            content: '包含了几个模块，几个内容'
          },
          {
            title: '西藏风险图',
            imgs: [],
            skills: ['jquery', 'dojo', 'arcgis js api'],
            content: '包含了几个模块，几个内容'
          },
          {
            title: '西藏风险图',
            imgs: [],
            skills: ['jquery', 'dojo', 'arcgis js api'],
            content: '包含了几个模块，几个内容'
          }
        ]
      },
      {
        date: ['2015-07-01', '2017-03-01'],
        company: '中科宇图科技股份有限公司',
        pieces: [
          {
            title: '西藏风险图',
            imgs: [],
            skills: ['jquery', 'dojo', 'arcgis js api'],
            content: '包含了几个模块，几个内容'
          },
          {
            title: '西藏风险图',
            imgs: [],
            skills: ['jquery', 'dojo', 'arcgis js api'],
            content: '包含了几个模块，几个内容'
          },
          {
            title: '西藏风险图',
            imgs: [],
            skills: ['jquery', 'dojo', 'arcgis js api'],
            content: '包含了几个模块，几个内容'
          }
        ]
      }
    ]
    return beforeIntercept(data)
  })
  // 拦截博客分类目录及列表
  Mock.mock(/\/blog\/list/, options => {
    let data = [
      {
        catalog: 'vue',
        blogList: [
          {
            title: 'vue学习笔记（1）',
            date: '2017-01-03',
            author: 'MeanYou',
            readCount: 1210,
            overview: '学习之前。。。。。。。。。。。'
          },
          {
            title: 'vue学习笔记（1）',
            date: '2017-01-03',
            author: 'MeanYou',
            readCount: 1210,
            overview: '学习之前。。。。。。。。。。。'
          },
          {
            title: 'vue学习笔记（1）',
            date: '2017-01-03',
            author: 'MeanYou',
            readCount: 1210,
            overview: '学习之前。。。。。。。。。。。'
          },
          {
            title: 'vue学习笔记（1）',
            date: '2017-01-03',
            author: 'MeanYou',
            readCount: 1210,
            overview: '学习之前。。。。。。。。。。。'
          }
        ]
      },
      {
        catalog: 'react学习笔记',
        blogList: [
          {
            title: 'react学习笔记',
            date: '2017-01-03',
            author: 'MeanYou',
            readCount: 1210,
            overview: '学习之前。。。。。。。。。。。'
          },
          {
            title: 'react学习笔记',
            date: '2017-01-03',
            author: 'MeanYou',
            readCount: 1210,
            overview: '学习之前。。。。。。。。。。。'
          },
          {
            title: 'react学习笔记',
            date: '2017-01-03',
            author: 'MeanYou',
            readCount: 1210,
            overview: '学习之前。。。。。。。。。。。'
          },
          {
            title: 'react学习笔记',
            date: '2017-01-03',
            author: 'MeanYou',
            readCount: 1210,
            overview: '学习之前。。。。。。。。。。。'
          }
        ]
      }
    ]
    return beforeIntercept(data)
  })
}

let setup = (options) => {
  Mock.setup({
    timeout: 300 // 300毫秒后返回结果

  })
}

let myMock = {
  intercept,
  setup
}

export default myMock
