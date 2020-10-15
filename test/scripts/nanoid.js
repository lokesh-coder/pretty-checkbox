var nanoid = (function () {
    'use strict';

    // browser-safe version of nanoid@2
    var crypto = self.crypto || self.msCrypto;

    var url = '-_';
    var i = 36;

    while (i--) {
        url += i.toString(36);
    }

    i = 36;

    while (i-- - 10) {
        url += i.toString(36).toUpperCase();
    }

    return function nanoid(size) {
        var id = '';
        var bytes = crypto.getRandomValues(new Uint8Array(size || 21));
        i = size || 21;

        while (i--) {
            id += url[bytes[i] & 63];
        }

        return id;
    };
})();
