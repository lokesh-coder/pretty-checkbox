export default class Indeterminate {
    constructor(el) {
        this.el = el;
        this.el.addEventListener('click', this.action.bind(this));
    }
    action(e) {
        let checkboxEl = document.getElementsByClassName('p-has-indeterminate')[0].querySelector('input');
        checkboxEl.indeterminate=true;
    }
}
