---
id: switch
title: Switch
---

Switch was briefly at various points in the doc; however, it certainly deserves a its own page so you know how to give your app that mobile-like vibe 📱.

## Basic Switch

:::caution
Switch is not compatible with `p-default` or `p-icon`
:::

Similar to Checkbox and Radio, switch contains a similar DOM structure, but we use `p-switch` instead of the default style with `p-default`:

```html {1}
<div class="pretty p-switch">
    <input type="checkbox" />
    <div class="state">
        <label>Switch</label>
    </div>
</div>
```

<div className="pretty p-switch">
    <input type="checkbox" />
    <div className="state">
        <label>Switch</label>
    </div>
</div>

## Shapes &amp; Colors

:::caution
Switch is not compatible with [outline colors](basic-concepts/colors)
:::

Switch has three unique shapes that can be used: `p-outline`, `p-fill`, and `p-slim`.

```html {1,8,15}
<div class="pretty p-switch">
    <input type="checkbox" />
    <div class="state">
        <label>Basic Switch</label>
    </div>
</div>

<div class="pretty p-switch p-fill">
    <input type="checkbox" />
    <div class="state p-success">
        <label>Fill Switch</label>
    </div>
</div>

<div class="pretty p-switch p-slim">
    <input type="checkbox" />
    <div class="state">
        <label>Slim Switch</label>
    </div>
</div>
```

<div className="pretty p-switch">
    <input type="checkbox" />
    <div className="state p-info">
        <label>Basic Switch</label>
    </div>
</div>
<div className="pretty p-switch p-fill">
    <input type="checkbox" />
    <div className="state p-success">
        <label>Fill Switch</label>
    </div>
</div>
<div className="pretty p-switch p-slim">
    <input type="checkbox" />
    <div className="state p-warning">
        <label>Slim Switch</label>
    </div>
</div>

## Usage as Radio

Switch can be used as a checkbox or as a radio &ndash; just change the input `type` value to `radio`:

```html {2}
<div class="pretty p-switch p-slim">
    <input type="radio" />
    <div class="state">
        <label>Switch</label>
    </div>
</div>
```

<div className="pretty p-switch p-slim">
    <input type="radio" name="pizza" />
    <div className="state">
        <label>Regular Crust</label>
    </div>
</div>
<div className="pretty p-switch p-slim">
    <input type="radio" name="pizza" />
    <div className="state">
        <label>Thin Crust</label>
    </div>
</div>
