<h1 align="center">
  <br>
  <a href="https://lokesh-coder.github.io/pretty-checkbox/"><img src="logo.png" alt="Pretty checkbox" width="100"></a>
  <br> <br> pretty-checkbox.css <br>
</h1>

<h4 align="center">A pure css library to beautify checkbox and radio buttons.</h4>

<p align="center">
  <a href="https://badge.fury.io/js/electron-markdownify">
    <img src="https://badge.fury.io/js/electron-markdownify.svg"
         alt="Gitter">
  </a>
  <a href="https://gitter.im/amitmerchant1990/electron-markdownify"><img src="https://badges.gitter.im/amitmerchant1990/electron-markdownify.svg"></a>
  <a href="https://saythanks.io/to/amitmerchant1990">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg">
  </a>
  <a href="https://www.paypal.me/AmitMerchant">
    <img src="https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&amp;style=flat">
  </a>
</p>
<br>


### Features
* Basic
  - Four styles ( Default, round, Curve, Switch )
  - Three Different variants ( Default, Fill, Thick )
  - Five colors ( Primary, Success, Info, Warning, Danger )
  - Two color types ( Solid and Outline )
  - Four types of animation (Smooth, Tada, Jelly, Rotate )
 * Responsive
 * No Javascript
 * Custom Font Icons
 * Svg Icons
 * Image 
 * Toggle
 * Lock
 * State ( Focus, Hover, Inderterminate )
 * Supports frameworks like bootstrap, Foundation, Sematic UI, Bulma
 * Customize nearly everything with SCSS
 * Print friendly
 * and more...

### Demo and documentation

:globe_with_meridians: https://lokesh-coder.github.io/pretty-checkbox/

### Installation
**From CLI**

Install the library from `npm` or `yarn` package manager

```sh
> npm install pretty-checkbox // or
> yarn add pretty-checkbox
```
Add `pretty-checkbox.min.css` in your html

**From CDN**
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pretty-checkbox/2.2.1/pretty-checkbox.min.css"/>
```

**Manual download**

Download the source from github
```html
<link rel="stylesheet" href="../<PATH>/pretty-checkbox/dist/pretty-checkbox.min.css"/>
```
`<PATH>` is where the library is downloaded.

**SCSS**

You can also import `pretty-checkbox.scss` in your main scss file.
```scss
@import '~pretty-checkbox/src/pretty.scss';
```

### Usage


Pretty checkbox comes with many styles,

| Style class | Description             |
| :---------- | :---------------------- |
| `--default` | Basic checkbox          |
| `--switch`  | iOs like toggle switch  |
| `--icon`    | using custom font icons |
| `--svg`     | using custom SVG        |
| `--image`   | using small images      |

And three shapes `--round` `--curve` `--square` (default)


#### Basic checkbox,

```html
<div class="pretty --default">
	<input type="checkbox">
	<div class="state">
		<label>Check me</label>
	</div>
</div>
```

Basic checkbox has three variants `--fill` `--thick` `--outline` (default)

You can combine them.

```html
  <div class="pretty --default --curve --fill">
      <input type="checkbox" />
      <div class="state">
          <label>Fill</label>
      </div>
  </div>
```


#### Switch checkbox,


Switch has three variants `--outline` `--fill` `--slim`

```html
<div class="pretty --switch --fill">
    <input type="checkbox" />
    <div class="state">
        <label>On</label>
    </div>
</div>
```

#### Custom Font icons,

checkbox with fonticon,

```html
<div class="pretty --icon">
	<input type="checkbox">
	<div class="state">
    	<i class="icon fa fa-check"></i>
		<label>Check me</label>
	</div>
</div>
```
> **Note**: class `icon` should be added along with icon class names

> **Note**: For icons to work, you need to add appropriate font icons library. In above example , we used font awesome icon. So, FontAwesome should be included separately. 

Checkout the documentation for tested font icon libraries.

#### SVG

checkbox with svg,

```html
<div class="pretty --svg">
	<input type="checkbox">
	<div class="state">
    	<img class="svg" src="file.svg">
		<label>Check me</label>
	</div>
</div>
```

Support, SVG file in img tag, svg markup (`<svg> ... </svg>`)

> Note: class `svg` to be added in img tag or svg tag.

Checkout the documentation for different formats and tested svg libraries.

#### Image

checkbox with image,

```html
  <div class="pretty --image">
      <input type="checkbox" />
      <div class="state">
          <img class="image" src="/check.png">
          <label>Block</label>
      </div>
  </div>
```

Support, SVG file in img tag, svg markup (`<svg> ... </svg>`)

> Note: class `svg` to be added in img tag or svg tag.

Checkout the documentation for different formats and tested svg libraries.

#### Colors

There are five solid colors `--primary` `--success` `--warning` `--info` `--danger`

And five outline colors  `--primary-o` `--success-o` `--warning-o` `--info-o` `--danger-o`

```html
  <div class="pretty --default --curve --thick">
      <input type="checkbox" />
      <div class="state --warning">
          <label>Warning</label>
      </div>
  </div>
```
> Note: Color class must be added in state class. Solid colors and Ouline colors have distinct role in font icons and toggle feature.

Checkout the documentation for complete demo of color combinations with above styles.

### More

There are more features like  ***Radio buttons*** , ***Toggle*** , ***States*** , ***Animations*** , ***Border less*** , ***Lock*** , ***Scale***, ***SCSS Settings***. 

Please refer the documentation to learn about them.


### Browser support
`IE >= 10`   `Firefox >= 3.6`   `Chrome >= 14`   `Safari >= 6`   `Opera >= 11.6`

### Font Icon libraries
* Font awesome
* Bootstrap Glyphicons
* Material icon ( MDI )
* Material icon ( ZMDI )
* Ion icons
* Typeicons
* Material icon ( Google )
* Others not tested, But will work.


### SVG
* UIKit
* Feathers
* Others

### Inspiration
- Inspired from Okendoken's [awesome-bootstrap-checkbox](https://github.com/flatlogic/awesome-bootstrap-checkbox). 
- Animations are heavily inspired ( copied 😊 ) from [Animista](http://animista.net)

### Contributions
Thanks for all those good people who spend their valuable time and helped to improve this library. Any Contributions are welcome!

### Licence
This project is licensed under the MIT License - see the LICENSE.md file for details
