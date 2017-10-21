export default class Slider {
    constructor(el) {
        this.el = el;
        this.el.addEventListener('input', this.action.bind(this));
    }
    action(e) {
        console.log('value',e.target.value)
        let style = document.getElementById('pretty-scale-test').style;
        style.fontSize = e.target.value+'px';
    }
}
