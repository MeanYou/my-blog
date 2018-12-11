let util = {
  hasScrollbar () {
    return document.body.scrollHeight > window.innerHeight
  },
  lazyLoad () {
    let eles = document.querySelectorAll('[data-src]')
    eles.forEach(item => {
      console.log(item.attributes['data-src'])
    })
  },
  uuid () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = Math.random() * 16 | 0
      let v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  }
}

export default util
