---
id: radio
title: Radio
---

Radio controls are another all-important input control that is widespread in the wild. Be sure to checkout the [basic concepts guide](basic-concepts/intro) for more info!

## Basic Radio

Our basic checkbox can take on three different shapes: square, `p-curve`, `p-round` (although round makes the most sense):

```html {1,8,15}
<div class="pretty p-default p-round">
    <input type="radio" />
    <div class="state">
        <label>Regular Radio</label>
    </div>
</div>

<div class="pretty p-default">
    <input type="radio" />
    <div class="state">
        <label>Square Radio</label>
    </div>
</div>

<div className="pretty p-default p-curve">
    <input type="radio" />
    <div className="state">
        <label>Curved Radio</label>
    </div>
</div>
```

<div class="pretty p-default p-round">
    <input type="radio" name="a" />
    <div className="state">
        <label>Regular Radio</label>
    </div>
</div>

<div className="pretty p-default">
    <input type="radio" name="a" />
    <div className="state">
        <label>Square Radio</label>
    </div>
</div>

<div className="pretty p-default p-curve">
    <input type="radio" name="a" />
    <div className="state">
        <label>Curved Radio</label>
    </div>
</div>

## Colors, Icon, and Animations

Radio supports [colors](basic-concepts/colors), [icons](basic-concepts/icons), [animations](basic-concepts/animations).
There are five animations classes available that can be added to the root div: `p-smooth`, `p-pulse`, `p-tada`, `p-jelly`, and `p-rotate`.

```html {1,8,16,24,32}
<div class="pretty p-default p-round p-smooth">
    <input type="radio" />
    <div class="state p-primary">
        <label>Smooth</label>
    </div>
</div>

<div class="pretty p-icon p-round p-jelly">
    <input type="radio" />
    <div class="state p-primary">
        <i class="icon mdi mdi-check"></i>
        <label>Jelly</label>
    </div>
</div>

<div class="pretty p-icon p-round p-tada p-plain">
    <input type="radio" />
    <div class="state">
        <i class="icon mdi mdi-weather-night"></i>
        <label>Tada</label>
    </div>
</div>

<div class="pretty p-icon p-round p-rotate">
    <input type="radio" />
    <div class="state p-danger-o">
        <i class="icon mdi mdi-close"></i>
        <label>Rotate</label>
    </div>
</div>

<div class="pretty p-default p-round p-thick p-pulse">
    <input type="radio" />
    <div class="state p-warning-o">
        <label>Pulse</label>
    </div>
</div>
```

<div className="pretty p-default p-round p-smooth">
    <input type="radio" name="b" />
    <div className="state p-primary">
        <label>Smooth</label>
    </div>
</div>

<div className="pretty p-icon p-round p-jelly">
    <input type="radio" name="b" />
    <div className="state p-primary">
        <i className="icon mdi mdi-check"></i>
        <label>Jelly</label>
    </div>
</div>

<div className="pretty p-icon p-round p-tada p-plain">
    <input type="radio" name="b" />
    <div className="state">
        <i className="icon mdi mdi-weather-night"></i>
        <label>Tada</label>
    </div>
</div>

<div className="pretty p-icon p-round p-rotate">
    <input type="radio" name="b" />
    <div className="state p-danger-o">
        <i className="icon mdi mdi-close"></i>
        <label>Rotate</label>
    </div>
</div>

<div className="pretty p-default p-round p-thick p-pulse">
    <input type="radio" name="b" />
    <div className="state p-warning-o">
        <label>Pulse</label>
    </div>
</div>

## Radio Groups

For accessibility reasons, it's ideal if we wrap our radio controls in a `fieldset` or another wrapping container with the [correct ARIA roles](https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20160317/examples/radio/radio.html).

```html
<fieldset>
    <legend>Pizza Crust</legend>
    <div class="pretty p-default p-round">
        <input id="regular" type="radio" name="pizza" />
        <div class="state">
            <label for="regular">Regular crust</label>
        </div>
    </div>
    <div class="pretty p-default p-round">
        <input id="deep-dish" type="radio" name="pizza" />
        <div class="state">
            <label for="deep-dish">Deep dish</label>
        </div>
    </div>
    <div class="pretty p-default p-round">
        <input id="thin" type="radio" name="pizza" />
        <div class="state">
            <label for="thin">Thin crust</label>
        </div>
    </div>
</fieldset>
```

<fieldset>
    <legend>Pizza Crust</legend>
    <div className="pretty p-default p-round">
        <input id="regular" type="radio" name="pizza" value="regular" />
        <div className="state">
            <label htmlFor="regular">Regular crust</label>
        </div>
    </div>
    <div className="pretty p-default p-round">
        <input id="deep-dish" type="radio" name="pizza" value="deep-dish" />
        <div className="state">
            <label htmlFor="deep-dish">Deep dish</label>
        </div>
    </div>
    <div className="pretty p-default p-round">
        <input id="thin" type="radio" name="pizza" value="thin" />
        <div className="state">
            <label htmlFor="thin">Thin crust</label>
        </div>
    </div>
</fieldset>

## Accessibility

As mentioned before, PCR excels because it leverages built-in components instead of creating soft controls. Patterns such as roving focus/selection, space bar selection, etc. are all given to us _for free_ because we're using **real** checkbox components. Take our pizza crust selection example above:

-   You can select using the space bar
-   You can use your left/right arrow keys
-   You can use your up/down arrow keys
-   Selection cycles between elements when arrow keys are used
