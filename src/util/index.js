let util = {
  hasScrollbar () {
    return document.body.scrollHeight > window.innerHeight
  },
  lazyLoad () {
    let eles = document.querySelectorAll('[data-src]')
    eles.forEach(item => {
      console.log(item.attributes['data-src'])
    })
  }
}

export default util
