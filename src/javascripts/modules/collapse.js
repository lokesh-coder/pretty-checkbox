export default class Collapse {
    constructor(el) {
        this.el = el;
        this.el.addEventListener('click', this.action.bind(this));
    }
    action(e) {
        let name = e.target.getAttribute('data-name');
        let beforeBtnEl = document.getElementById('collapse-before');
        let afterBtnEl = document.getElementById('collapse-after');
        let collapseEl = document.getElementById('collapse-section');
        if(name=='before'){
            beforeBtnEl.className = beforeBtnEl.className += ' hide';
            afterBtnEl.className = afterBtnEl.className.replace(' hide', '');
            collapseEl.className = collapseEl.className.replace(' hide', '')
        }else{
            beforeBtnEl.className = beforeBtnEl.className.replace(' hide', '');
            afterBtnEl.className = afterBtnEl.className += ' hide';
            collapseEl.className = collapseEl.className += ' hide'
        }
    }
}
