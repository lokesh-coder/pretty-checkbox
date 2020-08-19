---
id: states
title: States
---

Pretty Checkbox offers various states including `disabled`, something called "locked" state, and much more :smile:

## Disabled

Nothing fancy here, just add `disabled` to the `input` and pretty checkbox will take care of the rest :rocket:

```jsx live
<div className="pretty p-default p-curve">
    <input type="checkbox" disabled />
    <div className="state">
        <label>Disabled</label>
    </div>
</div>
```

## Locked

"Locked" state is a unique. Adding `p-locked` on the root div will _style_ the control as though it's not disabled, but will block user interaction.

:::caution
Using `p-locked` might seem exciting, but there are accessibility concerns with using this. Seeing as this is a maintained fork of pretty checkbox it might be removed in the future.
:::

```jsx live
<div className="pretty p-default p-round p-locked">
    <input type="radio" checked />
    <div className="state">
        <label>Locked</label>
    </div>
</div>
```

## Focus

Among the many states, we can add a bit of class when our control has focus. We can enable a pleasant `box-shadow` around the control by adding `p-has-focus` to the root div:

```jsx live
<div className="pretty p-default p-has-focus">
    <input type="checkbox" />
    <div className="state">
        <label>Fancy Focus</label>
    </div>
</div>
```

## Hover

Upon hover we can swap content using `p-has-hover` on the root div. Using this requires an extra `div` below `state`. The awesome part here is we can mix and match different styles between hovered and regular states 😎

```jsx live
<div className="pretty p-default p-curve p-has-hover">
    <input type="checkbox" />
    <div className="state p-success-o">
        <label>Remember me</label>
    </div>
    <div className="state p-is-hover">
        <label>Remembered for 15 days</label>
    </div>
</div>
```

## Toggle

Pretty Checkbox allows you to show/hide different labels using nothing but CSS using `p-on` and `p-off` on the state div. By default `p-off` will be visible and upon checking `p-on` will become visible.

```html {1,3,6}
<div class="pretty p-default p-curve p-toggle">
    <input type="checkbox" />
    <div class="state p-success p-on">
        <label>Subscribed</label>
    </div>
    <div class="state p-danger p-off">
        <label>Subscribe</label>
    </div>
</div>
```

<div className="pretty p-default p-curve p-toggle">
    <input type="checkbox" />
    <div className="state p-success p-on">
        <label>Subscribed</label>
    </div>
    <div className="state p-danger p-off">
        <label>Subscribe </label>
    </div>
</div>

### Toggle with Icons

Mix n' match icons with toggle, just be sure you review the [icons](icons) guide before proceeding!

```html {1,3,7}
<div class="pretty p-icon p-toggle">
    <input type="checkbox" />
    <div class="state p-on">
        <i class="icon mdi mdi-microphone"></i>
        <label>ON</label>
    </div>
    <div class="state p-off">
        <i class="icon mdi mdi-microphone-off"></i>
        <label>OFF</label>
    </div>
</div>
```

<div className="pretty p-icon p-toggle">
    <input type="checkbox" />
    <div className="state p-on">
        <i className="icon mdi mdi-microphone"></i>
        <label>ON</label>
    </div>
    <div class="state p-off">
        <i className="icon mdi mdi-microphone-off"></i>
        <label>OFF</label>
    </div>
</div>
