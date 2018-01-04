export default class Toggleall {
    constructor(el) {
        this.el = el;
        this.checked = false;
        this.show = false;
        this.el.addEventListener('click', this.action.bind(this));
        document.addEventListener('scroll', this.onWinScroll.bind(this));
    }
    action(e) {
        this.checked = !this.checked;
        for (var i = 0; i <= document.getElementsByTagName('input').length; i++) {
            document.getElementsByTagName('input')[i].checked = this.checked;
        }
    }
    onWinScroll(e) {
        const winHeight = window.innerHeight;
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;
        this.show = scrolled > (winHeight);
        if (this.show)
            this.el.className = this.el.className.replace('hide', '');
        else
            this.el.className = 'hide';
    }
}