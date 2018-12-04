let util = {
  lazyLoad() {
    let eles = document.querySelectorAll('[data-src]');
    eles.forEach(item => {
      console.log(item.attributes['data-src'])
    });
  }
};

export default util;