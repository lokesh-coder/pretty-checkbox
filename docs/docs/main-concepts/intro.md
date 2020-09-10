---
id: intro
title: Introduction
---

At the core of pretty checkbox are three input controls:

1. Checkbox
2. Radio
3. Switch

## Concepts

Each input control uses CSS to mask, or hide, the actual `input` element. This means there are no real accessibility concerns when using using pretty checkbox to beautify 💅 our input controls.

### Base `div`

Each control is wrapped by a `div` that contains a class attribute with `pretty`:

```html
<div class="pretty p-default"></div>
```

To astute reader might notice `p-default`. This influences many things such as animations, colors, and possible styles that can be applied. We'll learn more about this later :smile:

### Adding the `input`

Remember that pretty checkbox _styles_ our `input` control, but we're still on the hook for adding it as a child of our base `div`:

```html
<div class="pretty p-default">
    <input type="checkbox" />
</div>
```

`input` is complete hidden to the user via CSS. Inspecting the element we'll see the following styles applied:

```css
.pretty {
    position: relative;
    /* truncated... */
}
.pretty input {
    position: absolute;
    left: 0;
    top: 0;
    /* truncated... */
    opacity: 0;
    cursor: pointer;
}
```

New to CSS? No worries. This effectively hides the `input` from the users by setting the `opacity` to `0`. What's nice here is we're not blocking functionality; our input still behaves like a checkbox.

### Tieing it All Together

The last stretch is adding an inner `div` with a class name of `state`. This contains the `label` used to render alongside the input control:

:::warning Danger, Will Robinson!
Omitting the `label` prevents our pretty input from rendering completely. If you don't need a label add it to the DOM anyway without any content.

```html
<div class="state">
    <label></label>
</div>
```

:::

```html
<div class="pretty p-default">
    <input type="checkbox" />
    <div class="state">
        <label>Hello there</label>
    </div>
</div>
```

Our `label` element is important. There's a lot of CSS work happening behind the scenes with this little element. By using a combination of `:before` to create the box before the label and `:after` to create the interior of the box, we create our pretty checkbox 😲

### Accessibility

For the most part, pretty checkbox is accessible; however, it's always recommended to add `for` and `id` attributes:

```html {2,4}
<div class="pretty p-default">
    <input id="my-checkbox" type="checkbox" />
    <div class="state">
        <label for="my-checkbox">Hello there</label>
    </div>
</div>
```

## Basic Usage

### Checkbox

A basic example of checkbox uses the `input` element with `type="checkbox"`:

```jsx live
// note this is react code, do not use
// className or htmlFor attributes in regular HTML
<div className="pretty p-default">
    <input id="my-checkbox" type="checkbox" />
    <div className="state">
        <label htmlFor="my-checkbox">Check</label>
    </div>
</div>
```

### Radio

A basic example of radio uses the `input` element with `type="radio"` and to make our control round we can use the `p-round` selector:

```jsx live
// note this is react code, do not use
// className or htmlFor attributes in regular HTML
<div className="pretty p-default p-round">
    <input id="my-radio" type="radio" />
    <div className="state">
        <label htmlFor="my-radio">Radio</label>
    </div>
</div>
```

### Switch

Switch can be used as either a radio or a checkbox &ndash; you can decide by changing the `type` attribute value from `checkbox` to `radio` (or vice versa). In the root `div` we need to replace `p-default` with `p-switch` to active switch styles:

```jsx live
// note this is react code, do not use
// className or htmlFor attributes in regular HTML
<div className="pretty p-switch">
    <input id="my-switch" type="checkbox" />
    <div className="state">
        <label htmlFor="my-switch">Switch</label>
    </div>
</div>
```
