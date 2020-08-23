---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

## Installation

Download using `npm` or `yarn`:

```sh
npm install @djthoms/pretty-checkbox # or
yarn add @djthoms/pretty-checkbox
```

### Modern Bundler Usage

Pretty checkbox works well with modern bundlers such as parcel or webpack (via `css-loader`):

```js
import '@djthoms/pretty-checkbox';

// rest of your app
```

If you want to import the `scss` source you can do that, too:

```js
import '@djthoms/pretty-checkbox/src/pretty-checkbox.scss';
```

### Sass Usage

At the heart of Pretty Checkbox is Sass. If you're using `.sass` or `.scss` in your project you can import pretty checkbox there:

:::info
`~` might not resolve to the `node_modules` directory. If this is the case then you need to reference the relative path to the `pretty-checkbox` installation.
:::

```scss
@import '~@djthoms/pretty-checkbox/src/pretty-checkbox';
```

### Regular ol' HTML

And of course you can use a CDN and embed in your html file using the `link` tag :wink:

```html
<link rel="stylesheet" href="https://unpkg.com/@djthoms/pretty-checkbox" />
```

## Usage

Once pretty checkbox styles have been added, just add a little bit of markup and we're in business 👩‍💻

```jsx live
<>
    <div className="pretty p-default">
        <input type="checkbox" />
        <div className="state">
            <label>Checkbox</label>
        </div>
    </div>
    <div className="pretty p-default p-round">
        <input type="radio" />
        <div className="state">
            <label>Radio</label>
        </div>
    </div>
    <div className="pretty p-switch">
        <input type="checkbox" />
        <div className="state">
            <label>Switch</label>
        </div>
    </div>
</>
```
