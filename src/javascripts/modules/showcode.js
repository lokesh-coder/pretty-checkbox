export default class Showcode {
  constructor(el) {
    this.el = el;
    this.isShowing=false;
    this.showCodeHTML ='show code <i class="mdi mdi-code-tags"></i>';
    this.hideCodeHTML ='hide code <i class="mdi mdi-chevron-down"></i>';
    this.el.addEventListener('click',(e)=>{
      const footerEl = e.target.parentNode.parentNode.querySelector('.card-footer');
      if (this.isShowing){
        footerEl.className = footerEl.className.replace(' fadeIn', ' hide');
        e.target.innerHTML = this.showCodeHTML;
        this.isShowing = false;
      }else{
        footerEl.className = footerEl.className.replace(' hide', ' fadeIn');
        e.target.innerHTML = this.hideCodeHTML;
        this.isShowing = true;
      }
    });
  }
}
