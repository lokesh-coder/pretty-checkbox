# Pretty checkbox

No more boring old fashioned checkboxes. New scalable CSS3 pretty checkbox and radio buttons with custom font icon library. - **No Javascript**! 

Check it out the [Demo](https://lokesh-coder.github.io/pretty-checkbox/) for complete documentation.

### Get started

Install the library from bower

```sh
$ bower install pretty-checkbox
```
Add `pretty.min.css` in your html
```html
<link rel="stylesheet" src="../bower_components/pretty-checkbox/src/pretty.min.css"/>
```

or you can also import `pretty.scss` in your main scss file.
```scss
@import '../bower_components/pretty-checkbox/src/pretty.scss';
```
Checkbox markup,
```html
<div class="pretty">
  <input type="checkbox"/> 
  <label><i class="mdi mdi-check"></i> Buy vegetables</label>
</div>
```

### checkbox Features

##### Inline checkboxe
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
##### Custom icons library
```html
<div class="pretty inline circle">
  <input type="checkbox"/> 
  <label><i class="fa fa-check"></i> Fontawesome icon</label>
</div>
```
##### Solid Checkbox color
```html
<div class="pretty inline primary">
  <input type="checkbox"/> 
  <label><i class="mdi mdi-check"></i> Primary</label>
</div>
```
##### Outline Checkbox color
```html
<div class="pretty inline outline-primary">
  <input type="checkbox"/> 
  <label><i class="mdi mdi-check"></i> Outline primary</label>
</div>
```
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
  <label><i class="mdi mdi-gender-male"></i> Male</label>
</div>
<div class="pretty inline circle">
  <input type="radio" name="radio1"> 
  <label><i class="mdi mdi-gender-female"></i> Female</label>
</div>
```
##### Boxed radio
```html
<div class="pretty inline">
  <input type="radio" name="radio2"> 
  <label><i class="mdi mdi-check"></i> Check</label>
</div>

```
##### Solid Color radio
```html
<div class="pretty inline circle primary">
  <input type="radio" name="radio3"> 
  <label><i class="mdi mdi-check"></i> Primary</label>
</div>

```
##### Outline Color radio
```html
<div class="pretty inline circle outline-primary">
  <input type="radio" name="radio4"> 
  <label><i class="mdi mdi-check"></i> $10</label>
</div>
```
##### Radio button without border
```html
<div class="pretty inline circle plain outline-primary">
  <input type="radio" name="radio5"> 
  <label><i class="mdi mdi-human"></i> Single</label>
</div>
```
##### Animated radio button
```html
<div class="pretty inline circle smooth outline-primary">
  <input type="radio" name="radio44"> 
  <label><i class="mdi mdi-emoticon-cool"></i> Cool</label>
</div>
```
##### Disabled radio button
```html
<div class="pretty inline circle">
  <input type="radio" name="radio6" disabled> 
  <label><i class="mdi mdi-gender-male"></i> Today</label>
</div>
```
##### Toggle radio button
```html
<div class="pretty inline circle plain toggle">
  <input type="radio" name="radio8"> 
  <label><i class="mdi mdi-bluetooth-off"></i> Bluetooth</label>
  <label><i class="mdi mdi-bluetooth success"></i> Bluetooth</label>
</div>
<div class="pretty inline circle plain toggle">
  <input type="radio" name="radio8"> 
  <label><i class="mdi mdi-wifi-off"></i> Wifi</label>
  <label><i class="mdi mdi-wifi info"></i> Wifi</label>
</div>
```
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
##### Font awesome
```html
<div class="pretty inline success smooth">
  <input type="checkbox"> 
  <label><i class="fa fa-check"></i> fa-check</label>
</div>
```
##### Glyphicon
```html
<div class="pretty inline success smooth">
  <input type="checkbox"> 
  <label><i class="glyphicon glyphicon-ok"></i> glyphicon-ok</label>
</div>
```
##### Material Design icons (mdi)
```html
<div class="pretty inline success smooth">
  <input type="checkbox"> 
  <label><i class="mdi mdi-check"></i> mdi-check</label>
</div>
```
##### Material Design icons (zmdi)
```html
<div class="pretty inline success smooth">
  <input type="checkbox"> 
  <label><i class="zmdi zmdi-check"></i> zmdi-check</label>
</div>
```
##### Typicons
```html
<div class="pretty inline success smooth">
  <input type="checkbox"> 
  <label><i class="typcn typcn-tick"></i>typcn-tick</label>
</div>
```
##### Ionicons
```html
<div class="pretty inline success smooth">
  <input type="checkbox"> 
  <label><i class="ion-checkmark-round"></i> ion-checkmark-round</label>
</div>
```

Thats all, folks!

Inspired from Okendoken's [awesome-bootstrap-checkbox](https://github.com/flatlogic/awesome-bootstrap-checkbox) . contributions are welcome!
