---
id: sass-customize
title: Sass Customize
---

Pretty Checkbox is built with [Sass](https://sass-lang.com/). While the particular of transpiling sass to css varies from project-to-project, the recommendation is to use the latest version of [dart-sass](https://www.npmjs.com/package/sass).

## Variables

Customize using these handy variables!

```scss
// not digging the name? Change it!
$pretty--class-name: pretty;

// customize the colors added to .state
$pretty--color-default: #bdc3c7;
$pretty--color-primary: #428bca;
$pretty--color-info: #5bc0de;
$pretty--color-success: #5cb85c;
$pretty--color-warning: #f0ad4e;
$pretty--color-danger: #d9534f;
$pretty--color-dark: #5a656b;

// uh, boring z-index stuff, who cares.
$pretty--z-index-back: 0;
$pretty--z-index-between: 1;
$pretty--z-index-front: 2;

// nobody will change this.
$pretty--debug: false;
$pretty--dev-err: 'Invalid input type!';
```

## Imports

```scss
// REQUIRED
@import '~@djthoms/pretty-checkbox/scss/variables';
@import '~@djthoms/pretty-checkbox/scss/core';

// OPTIONALS
// fill variants
@import '~@djthoms/pretty-checkbox/scss/elements/default/fill';
@import '~@djthoms/pretty-checkbox/scss/elements/default/outline';
@import '~@djthoms/pretty-checkbox/scss/elements/default/thick';

// p-icon imports
@import '~@djthoms/pretty-checkbox/scss/elements/font-icon/general';
@import '~@djthoms/pretty-checkbox/scss/elements/svg/general';
@import '~@djthoms/pretty-checkbox/scss/elements/image/general';

// p-switch imports
@import '~@djthoms/pretty-checkbox/scss/elements/switch/general';
@import '~@djthoms/pretty-checkbox/scss/elements/switch/fill';
@import '~@djthoms/pretty-checkbox/scss/elements/switch/slim';

// colors
@import '~@djthoms/pretty-checkbox/scss/extras/colors';

// animations
@import '~@djthoms/pretty-checkbox/scss/extras/animation';

// shapes and style variants
@import '~@djthoms/pretty-checkbox/scss/extras/plain';
@import '~@djthoms/pretty-checkbox/scss/extras/round';
@import '~@djthoms/pretty-checkbox/scss/extras/curve';

// disabled & locked
@import '~@djthoms/pretty-checkbox/scss/extras/disabled';
@import '~@djthoms/pretty-checkbox/scss/extras/locked';

// extras
@import '~@djthoms/pretty-checkbox/scss/extras/toggle';
@import '~@djthoms/pretty-checkbox/scss/extras/print';

// states
@import '~@djthoms/pretty-checkbox/scss/states/hover';
@import '~@djthoms/pretty-checkbox/scss/states/focus';

// indeterminate
@import '~@djthoms/pretty-checkbox/scss/states/indeterminate';
```

## Webpack, Parcel, &amp; Create React App

Good news for Parcel, CRA, and `react-scripts` users. Sass is transpiled for you without any extra config required :tada:.

For webpack it's recommended to use [`mini-css-extract-plugin`](https://webpack.js.org/plugins/mini-css-extract-plugin/#root) alongside `sass-loader` and `sass`. A config might look like this for webpack 4+

:::info
`~` module resolution is supported by default with `sass-loader` and webpack 4+. [Read more about sass-loader in the webpack docs](https://webpack.js.org/loaders/sass-loader/#webpackimporter)
:::

```sh title="setup"
npm i sass sass-loader mini-css-extract-plugin -D
```

```js title="webpack.config.js"
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            },
        ],
    },
};
```
