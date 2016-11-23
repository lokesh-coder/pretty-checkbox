# Pretty checkbox

No more boring old fashioned checkboxes. New scalable CSS3 pretty checkbox and radio buttons with custom font icon library. **Only CSS**! 

Check it out the [Demo](https://lokesh-coder.github.io/pretty-checkbox/) for complete documentation.

### Get started

Install the library from `bower` or `npm` package manager

```sh
> bower install pretty-checkbox
```
```sh
> npm install pretty-checkbox
```
Add `pretty.min.css` in your html

From CDN, 
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pretty-checkbox/2.0.2/pretty.min.css"/>
```
or from the source,
```html
<link rel="stylesheet" href="../PATH/pretty-checkbox/src/pretty.min.css"/>
```

You can also import `pretty.scss` in your main scss file.
```scss
@import '../PATH/pretty-checkbox/src/pretty.scss';
```
`PATH` is where the library is downloaded.

Checkbox markup,
```html
<div class="pretty">
  <input type="checkbox"/> 
  <label><i class="mdi mdi-check"></i> Buy vegetables</label>
</div>
```

### checkbox Features

##### Inline checkbox
```html
<div class="pretty inline">
  <input type="checkbox"/> 
  <label><i class="mdi mdi-close"></i> Buy vegetable</label>
</div>
```
##### Rounded Checkbox
```html
<div class="pretty inline circle">
  <input type="checkbox"/> 
  <label><i class="mdi mdi-check"></i> Monday</label>
</div>
```

##### Solid Checkbox color
```html
<div class="pretty inline primary">
  <input type="checkbox"/> 
  <label><i class="mdi mdi-check"></i> Primary</label>
</div>
```
Color variants: `primary` , `success` , `warning` , `info` , `danger`
##### Outline Checkbox color
```html
<div class="pretty inline outline-primary">
  <input type="checkbox"/> 
  <label><i class="mdi mdi-check"></i> Outline primary</label>
</div>
```
Color variants: `outline-primary` , `outline-success` , `outline-warning` , `outline-info` , `outline-danger`
##### Without border - plain checkbox
```html
<div class="pretty inline outline-success plain">
  <input type="checkbox"/> 
  <label><i class="mdi mdi-check"></i> Oh, yes!</label>
</div>
```
##### Animated checkbox
```html
<div class="pretty inline outline-danger smooth">
  <input type="checkbox"> 
  <label><i class="mdi mdi-close"></i> Smooth animation</label>
</div>
```
##### Disabled checkbox
```html
<div class="pretty inline">
  <input type="checkbox" disabled> 
  <label><i class="mdi mdi-check"></i> Disabled</label>
</div>
```
##### Toggle checkbox
```html
<div class="pretty inline toggle">
  <input type="checkbox"/> 
  <label><i class="mdi mdi-microphone"></i> ON</label>
  <label><i class="mdi mdi-microphone-off"></i> OFF</label>
</div>
```
##### Toggle checkbox without border
```html
<div class="pretty inline plain toggle">
  <input type="checkbox"/> 
  <label><i class="mdi mdi-wifi"></i> WIFI ON</label>
  <label><i class="mdi mdi-wifi-off"></i> WIFI OFF</label>
</div>
```
##### Toggle checkbox with colors
```html
<div class="pretty inline plain toggle">
  <input type="checkbox"/> 
  <label><i class="mdi mdi-play"></i> Play</label>
  <label><i class="mdi mdi-pause success"></i> Pause</label>
</div>
```
##### Toggle checkbox with alternative colors
```html
<div class="pretty inline plain toggle">
  <input type="checkbox"/> 
  <label><i class="mdi mdi-thumb-up success"></i> Liked</label>
  <label><i class="mdi mdi-thumb-down danger"></i> Disliked</label>
</div>
```
### Radio button Features

##### Basic radio
```html
<div class="pretty inline circle">
  <input type="radio" name="radio1"> 
  <label><i class="default"></i> Default</label>
</div>
<div class="pretty inline circle">
  <input type="radio" name="radio1"> 
  <label><i class="mdi mdi-check"></i> With icon</label>
</div>
```
All the features in the checkbox is supported for radio buttons. It includes 
`Boxed radio button` , `Solid Color radio` , `Outline Color radio` , `Radio button without border` , `Animated radio button` , `Disabled radio button` , `Toggle radio button`.


##### Toggle radio button without labels
```html
<div class="pretty inline circle plain toggle">
  <input type="radio" name="radio9" checked> 
  <label><i class="mdi mdi-microphone-off"></i></label>
  <label><i class="mdi mdi-microphone danger"></i></label>
</div>
<div class="pretty inline circle plain toggle">
  <input type="radio" name="radio9"> 
  <label><i class="mdi mdi-microphone-off"></i></label>
  <label><i class="mdi mdi-microphone danger"></i></label>
</div>
```

### Custom font library

This library supports wide variety of font icon libraries. Currently tested with `FontAwesome` , `Bootstrap Glyphicon` , `Material Design icons (mdi)` , `Material Design icons (zmdi)` , `Typicons` `Ionicons`.

### What else

- Scalable. can be used in any font sizes
- Used in frameworks like bootstrap, foundation, sematic UI
- Supported in all mordern browsers, including mobile devices
- Customizable. see the demo for `sass` settings
- MIT Licence

Thats all, folks!

Inspired from Okendoken's [awesome-bootstrap-checkbox](https://github.com/flatlogic/awesome-bootstrap-checkbox) . contributions are welcome!
