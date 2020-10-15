/**
 * @typedef Icon
 * @type {object}
 * @property {string} dom
 * @property {'p-icon' | 'p-svg' | 'p-image'} type
 */

/**
 * @typedef Config
 * @type {object}
 * @property {'checkbox' | 'radio'} [type]
 * @property {string} [name]
 * @property {boolean} [switch]
 * @property {string} [shape]
 * @property {string} [variant]
 * @property {string} [name]
 * @property {string} [color]
 * @property {Icon} icon
 */

/**
 * @param {string} title
 * @returns {HTMLElement}
 */
function createSection(title) {
    var section = document.createElement('section');
    var heading = section.appendChild(document.createElement('h2'));
    heading.innerText = title;

    return section;
}

function toggleAll() {
    var inputs = document.querySelectorAll('input');

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = inputs[i].checked ? false : true;
    }
}

var createControl = (function () {
    'use strict';

    var parser = (function () {
        if (!window.DOMParser) {
            return false;
        }

        var parser = new DOMParser();

        try {
            parser.parseFromString('x', 'text/html');
        } catch (err) {
            return false;
        }

        return parser;
    })();

    /**
     * A IE-friendly function to parse text into HTML.
     * @param {string} html
     * @returns {HTMLElement}
     */
    function stringToHTML(html) {
        if (parser) {
            return parser.parseFromString(html, 'text/html').body.firstChild;
        }

        var span = document.createElement('span');
        span.innerHTML = html;

        return span.firstChild;
    }

    /**
     * @param {HTMLElement} element
     * @param {string} [config]
     */
    function appendSelector(element, config) {
        if (config) {
            element.className += ' ' + config;
        }
    }

    /**
     * @param {string} children
     * @param {Config} config
     */
    function createControl(children, config) {
        /** @type {Config} */
        var _config = config || {};
        var id = 'pc-' + nanoid(8);

        var pretty = document.createElement('div');
        var input = pretty.appendChild(document.createElement('input'));
        var state = pretty.appendChild(document.createElement('div'));
        var label = state.appendChild(document.createElement('label'));

        input.id = id;

        if (_config.name) {
            input.name = _config.name;
        }

        label.setAttribute('for', id);
        label.innerText = children;

        pretty.className = 'pretty';
        state.className = 'state';

        if (!_config.icon && !_config.switch) {
            pretty.className += ' p-default';
        }

        if (_config.icon && _config.icon.type && _config.icon.dom) {
            appendSelector(pretty, _config.icon.type);
            var icon = stringToHTML(_config.icon.dom);

            if (!/icon|svg|image/.test(icon.className)) {
                icon.className += ' ' + _config.icon.type.replace('p-', '');
            }

            state.insertBefore(icon, state.firstChild);
        }

        appendSelector(state, _config.color);
        appendSelector(pretty, _config.shape);
        appendSelector(pretty, _config.variant);

        input.setAttribute('type', _config.type || 'checkbox');

        return pretty;
    };

    return createControl;
})();
