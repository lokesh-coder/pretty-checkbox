<h1 align="center">
  <br>
  <a href="https://pretty-checkbox.netlify.app/"><img src="logo.png" alt="Pretty checkbox" width="100"></a>
  <br> <br> pretty-checkbox.css <br>
</h1>

<h4 align="center">A pure CSS library to beautify checkbox and radio buttons.</h4>

<p align="center">
 <a href="https://github.com/atomicpages/pretty-checkbox/releases">
    <img src="https://img.shields.io/github/release/atomicpages/pretty-checkbox.svg?style=flat-square&colorA=8033b0&colorB=75b7dd" alt="Github Release">
  </a>
   <a href="LICENSE">
    <img src="https://img.shields.io/npm/l/@djthoms/pretty-checkbox.svg?style=flat-square&colorA=8033b0&colorB=75b7dd" alt="Licence">
  </a>
   <a href="#">
    <img src="https://img.shields.io/npm/dm/@djthoms/pretty-checkbox.svg?style=flat-square&colorA=8033b0&colorB=75b7dd" alt="Downloads">
  </a>
</p>
<br>

<div class="highlight highlight-source-shell">
<pre>
<div align="center"><strong >Demo and documentation</strong></div>
<div align="center"><a align="center" href="https://pretty-checkbox.netlify.app/">https://pretty-checkbox.netlify.app/</a></div>
</pre>
</div>

<div align="center">
<img src="preview.gif" alt="Pretty checkbox preview"/>
</div>

## Features

-   Basic
    -   **Shapes** - _Square_, _Curve_, _Round_
    -   **Variants** - _Default_, _Fill_, _Thick_
    -   **Colors** - _Primary_, _Success_, _Info_, _Warning_, _Danger_
    -   **Color types** - _Solid_, _Outline_
    -   **Animations** - _Smooth_, _Tada_, _Jelly_, _Pulse_, _Rotate_
-   Switch - iOS style - _Outline_, _Fill_, _Slim_
-   Responsive
-   No JavaScript
-   Custom Font Icons
-   SVG Icons
-   Image support
-   Toggle between icons / SVG's / images
-   Lock
-   State - _Focus_, _Hover_, _Indeterminate_
-   Supports frameworks - _Bootstrap_, _Foundation_, _Sematic UI_, _Bulma_, ...
-   SCSS customization
-   Supports all modern browsers, including mobile devices
-   Print friendly
-   and more... ( _I am kidding, that's all!_ )

## Installation

### From CLI

Install using `npm` or `yarn`:

```sh
npm install @djthoms/pretty-checkbox # or
yarn add @djthoms/pretty-checkbox
```

Add `pretty-checkbox.min.css` in your html:

### From CDN

```html
<link
    rel="stylesheet"
    href="https://unpkg.com/@djthoms/pretty-checkbox/dist/pretty-checkbox.min.css"
/>
```

### Manual download

Download the source from [`Github`](https://github.com/atomicpages/pretty-checkbox/archive/master.zip).

```html
<link rel="stylesheet" href="<PATH>/pretty-checkbox/dist/pretty-checkbox.min.css" />
```

`<PATH>` is where the library is downloaded.

### SCSS

You can also import `pretty-checkbox.scss` in your main scss file.

```scss
@import '~@djthoms/pretty-checkbox/src/pretty-checkbox.scss';
```

Please refer the document for SCSS settings.

## Usage

Pretty checkbox comes with many styles,

| Class name  | Description              |
| :---------- | :----------------------- |
| `p-default` | Basic style              |
| `p-switch`  | iOS like toggle style    |
| `p-icon`    | Custom font icons        |
| `p-svg`     | Custom SVG files, markup |
| `p-image`   | Tiny images              |

And three shapes `p-round` `p-curve` `p-square` (default)

### Basic checkbox

```html
<div class="pretty p-default">
    <input type="checkbox" />
    <div class="state">
        <label>Check me</label>
    </div>
</div>
```

Basic checkbox has three variants `p-fill` `p-thick` `p-outline` (default)

You can combine them.

```html
<div class="pretty p-default p-curve p-fill">
    <input type="checkbox" />
    <div class="state">
        <label>Fill</label>
    </div>
</div>
```

### Switch checkbox

Switch has three variants `p-outline` `p-fill` `p-slim`

```html
<div class="pretty p-switch p-fill">
    <input type="checkbox" />
    <div class="state">
        <label>On</label>
    </div>
</div>
```

### Custom Font icons

```html
<div class="pretty p-icon">
    <input type="checkbox" />
    <div class="state">
        <i class="icon fa fa-check"></i>
        <label>Check me</label>
    </div>
</div>
```

<blockquote>
    <sub>
    	<strong>Note</strong>: class `icon` should be added along with icon class names
    </sub>
</blockquote>

<blockquote>
    <sub>
    	<strong>Note</strong>: For icons to work, you need to add appropriate font icons library. In above example , we used font awesome icon. So, FontAwesome should be included separately.
    </sub>
</blockquote>

<div align="right">
 <i><sub><a href="https://pretty-checkbox.netlify.app/docs/basic-concepts/icons">
 more details</a></sub></i>
</div>

### SVG

Supports SVG file in <img/> tag, markup (`<svg> ... </svg>`) and sprites

```html
<div class="pretty p-svg">
    <input type="checkbox" />
    <div class="state">
        <img class="svg" src="file.svg" />
        <label>Check me</label>
    </div>
</div>
```

<blockquote>
    <sub>
    	<strong>Note</strong>: class `svg` to be added in img tag or svg tag.
    </sub>
</blockquote>

<div align="right">
 <i><sub><a href="https://pretty-checkbox.netlify.app/docs/basic-concepts/icons#svg">more details</a></sub></i>
</div>

### Image

Supports any type of valid image format.

```html
<div class="pretty p-image">
    <input type="checkbox" />
    <div class="state">
        <img class="image" src="/check.png" />
        <label>Block</label>
    </div>
</div>
```

<blockquote>
    <sub>
    	<strong>Note</strong>: class `image` to be added in img tag.
    </sub>
</blockquote>

<div align="right">
 <i><sub><a href="https://pretty-checkbox.netlify.app/docs/basic-concepts/icons#images">more details</a></sub></i>
</div>

### Colors

There are five solid colors `p-primary` `p-success` `p-warning` `p-info` `p-danger`

And five outline colors `p-primary-o` `p-success-o` `p-warning-o` `p-info-o` `p-danger-o`

```html
<div class="pretty p-default p-curve p-thick">
    <input type="checkbox" />
    <div class="state p-warning">
        <label>Warning</label>
    </div>
</div>
```

<blockquote>
    <sub>
    	<strong>Note</strong>: Color class must be added in state class. Solid colors and Ouline colors have distinct role in font icons and toggle feature.
    </sub>
</blockquote>

<div align="right">
 <i><sub><a href="https://pretty-checkbox.netlify.app/docs/basic-concepts/colors">more details</a></sub></i>
</div>

## RTL Support

Include `rtl.css` in your source file :smile:

## More

There are more features like **_Radio buttons_** , **_Toggle_** , **_States_** , **_Animations_** , **_Border less_** , **_Lock_** , **_Scale_**, **_SCSS Settings_**.

Please refer the [documentation](https://pretty-checkbox.netlify.app/docs/) to know about them.

## Browser support

Works in all modern browsers.

`Chrome >= 26` `Firefox >= 16` `Safari >= 6.1` `Opera >= 15` `IE >= 9`

## Font Icon libraries

-   [Font awesome](http://fontawesome.io/icons/)
-   [Bootstrap Glyphicons](https://getbootstrap.com/docs/3.3/components/#glyphicons)
-   [Material icon ( MDI )](https://materialdesignicons.com/)
-   [Material icon ( ZMDI )](http://zavoloklom.github.io/material-design-iconic-font/icons.html)
-   [Ion icons](http://ionicons.com/)
-   [Typicons](http://www.typicons.com/)
-   [Material icon ( Google )](https://material.io/icons)
-   Others not tested, but will work ( 99% ).

## SVG

-   [UIKit](https://getuikit.com/docs/icon)
-   [Feathers](https://feathericons.com/)
-   Others

## Libraries

-   VueJs - [pretty-checkbox-vue](https://github.com/hamed-ehtesham/pretty-checkbox-vue)
-   Angular - [ngx-pretty-checkbox](https://github.com/miladfm/ngx-pretty-checkbox)
-   React - [pretty-checkbox-react](https://github.com/atomicpages/pretty-checkbox-react)

## Inspiration

-   [Awesome Bootstrap Checkbox](https://github.com/flatlogic/awesome-bootstrap-checkbox) - Idea
-   [Animista](http://animista.net) - Animations

## Contributions

Thanks to all those good people who spend their valuable time and helped to improve this library. Any Contributions are welcome!

## License

This project is licensed under the MIT License

<div align="center"><sub>❤</sub></div>
