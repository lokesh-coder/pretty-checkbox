const c = {};

c.install_cli =
`             
    > yarn add pretty-checkbox  //or
    > npm install pretty-checkbox
`;

c.install_cdn =
`
    https://cdn.jsdelivr.net/npm/pretty-checkbox@3/dist/pretty-checkbox.min.css
`;

c.install_import =
`
    @import '~pretty-checkbox/src/pretty-checkbox.scss';
`;

c.install_basic =
`
    <div class="pretty p-default">
        <input type="checkbox" />
        <div class="state">
            <label>Check</label>
        </div>
    </div>
`;

c.checkbox_basic_square =
`
    <!-- add class p-default -->
    <div class="pretty p-default">
        <input type="checkbox" />
        <div class="state">
            <label>Default</label>
        </div>
    </div>

    <!-- add class p-fill -->
    <div class="pretty p-default p-fill">
        <input type="checkbox" />
        <div class="state">
            <label>Fill</label>
        </div>
    </div>

    <!-- add class p-thick -->
    <div class="pretty p-default p-thick">
        <input type="checkbox" />
        <div class="state">
            <label>Thick</label>
        </div>
    </div>
`;

c.checkbox_basic_round =
`
    <!-- add class p-round -->
    <div class="pretty p-default p-round">
        <input type="checkbox" />
        <div class="state">
            <label>Default</label>
        </div>
    </div>

    <div class="pretty p-default p-round p-fill">
        <input type="checkbox" />
        <div class="state">
            <label>Fill</label>
        </div>
    </div>

    <div class="pretty p-default p-round p-thick">
        <input type="checkbox" />
        <div class="state">
            <label>Thick</label>
        </div>
    </div>
`;

c.checkbox_basic_curve =
 `
    <!-- add class p-curve -->
    <div class="pretty p-default p-curve">
        <input type="checkbox" />
        <div class="state">
            <label>Default</label>
        </div>
    </div>

    <div class="pretty p-default p-curve p-fill">
        <input type="checkbox" />
        <div class="state">
            <label>Fill</label>
        </div>
    </div>

    <div class="pretty p-default p-curve p-thick">
        <input type="checkbox" />
        <div class="state">
            <label>Thick</label>
        </div>
    </div>
`;

c.checkbox_switch =
`
    <!-- add class p-switch -->
    <div class="pretty p-switch">
        <input type="checkbox" />
        <div class="state">
            <label>Outline</label>
        </div>
    </div>

    <!-- add class p-switch -->
    <div class="pretty p-switch p-fill">
        <input type="checkbox" />
        <div class="state">
            <label>Fill</label>
        </div>
    </div>

    <!-- add class p-switch -->
    <div class="pretty p-switch p-slim">
        <input type="checkbox" />
        <div class="state">
            <label>Slim</label>
        </div>
    </div>
`;

/* COLORS */


c.checkbox_colors_solid =
`
    <!-- primary -->
    <div class="pretty p-default">
        <input type="checkbox" />
        <div class="state p-primary">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty p-default">
        <input type="checkbox" />
        <div class="state p-success">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty p-default">
        <input type="checkbox" />
        <div class="state p-info">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty p-default">
        <input type="checkbox" />
        <div class="state p-warning">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty p-default">
        <input type="checkbox" />
        <div class="state p-danger">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_default_outline =
`
    <!-- primary -->
    <div class="pretty p-default">
        <input type="checkbox" />
        <div class="state p-primary-o">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty p-default">
        <input type="checkbox" />
        <div class="state p-success-o">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty p-default">
        <input type="checkbox" />
        <div class="state p-info-o">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty p-default">
        <input type="checkbox" />
        <div class="state p-warning-o">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty p-default">
        <input type="checkbox" />
        <div class="state p-danger-o">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_default_fill =
`
    <!-- primary -->
    <div class="pretty p-default p-fill">
        <input type="checkbox" />
        <div class="state p-primary">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty p-default p-fill">
        <input type="checkbox" />
        <div class="state p-success">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty p-default p-fill">
        <input type="checkbox" />
        <div class="state p-info">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty p-default p-fill">
        <input type="checkbox" />
        <div class="state p-warning">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty p-default p-fill">
        <input type="checkbox" />
        <div class="state p-danger">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_default_thick =
`
    <!-- primary -->
    <div class="pretty p-default p-thick">
        <input type="checkbox" />
        <div class="state p-primary">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty p-default p-thick">
        <input type="checkbox" />
        <div class="state p-success">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty p-default p-thick">
        <input type="checkbox" />
        <div class="state p-info">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty p-default p-thick">
        <input type="checkbox" />
        <div class="state p-warning">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty p-default p-thick">
        <input type="checkbox" />
        <div class="state p-danger">
            <label>Danger</label>
        </div>
    </div>
`;


c.checkbox_colors_default_fill_outline =
`
    <!-- primary -->
    <div class="pretty p-default p-fill">
        <input type="checkbox" />
        <div class="state p-primary-o">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty p-default p-fill">
        <input type="checkbox" />
        <div class="state p-success-o">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty p-default p-fill">
        <input type="checkbox" />
        <div class="state p-info-o">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty p-default p-fill">
        <input type="checkbox" />
        <div class="state p-warning-o">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty p-default p-fill">
        <input type="checkbox" />
        <div class="state p-danger-o">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_default_thick_outline =
`
    <!-- primary -->
    <div class="pretty p-default p-thick">
        <input type="checkbox" />
        <div class="state p-primary-o">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty p-default p-thick">
        <input type="checkbox" />
        <div class="state p-success-o">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty p-default p-thick">
        <input type="checkbox" />
        <div class="state p-info-o">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty p-default p-thick">
        <input type="checkbox" />
        <div class="state p-warning-o">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty p-default p-thick">
        <input type="checkbox" />
        <div class="state p-danger-o">
            <label>Danger</label>
        </div>
    </div>
`;


c.checkbox_colors_curve =
`
    <!-- primary -->
    <div class="pretty p-default p-curve">
        <input type="checkbox" />
        <div class="state p-primary">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty p-default p-curve">
        <input type="checkbox" />
        <div class="state p-success">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty p-default p-curve">
        <input type="checkbox" />
        <div class="state p-info">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty p-default p-curve">
        <input type="checkbox" />
        <div class="state p-warning">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty p-default p-curve">
        <input type="checkbox" />
        <div class="state p-danger">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_curve_fill =
`
    <!-- primary -->
    <div class="pretty p-default p-curve p-fill">
        <input type="checkbox" />
        <div class="state p-primary">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty p-default p-curve p-fill">
        <input type="checkbox" />
        <div class="state p-success">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty p-default p-curve p-fill">
        <input type="checkbox" />
        <div class="state p-info">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty p-default p-curve p-fill">
        <input type="checkbox" />
        <div class="state p-warning">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty p-default p-curve p-fill">
        <input type="checkbox" />
        <div class="state p-danger">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_curve_thick =
`
    <!-- primary -->
    <div class="pretty p-default p-curve p-thick">
        <input type="checkbox" />
        <div class="state p-primary">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty p-default p-curve p-thick">
        <input type="checkbox" />
        <div class="state p-success">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty p-default p-curve p-thick">
        <input type="checkbox" />
        <div class="state p-info">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty p-default p-curve p-thick">
        <input type="checkbox" />
        <div class="state p-warning">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty p-default p-curve p-thick">
        <input type="checkbox" />
        <div class="state p-danger">
            <label>Danger</label>
        </div>
    </div>
`;



c.checkbox_colors_curve_outline =
`
    <!-- primary -->
    <div class="pretty p-default p-curve">
        <input type="checkbox" />
        <div class="state p-primary-o">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty p-default p-curve">
        <input type="checkbox" />
        <div class="state p-success-o">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty p-default p-curve">
        <input type="checkbox" />
        <div class="state p-info-o">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty p-default p-curve">
        <input type="checkbox" />
        <div class="state p-warning-o">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty p-default p-curve">
        <input type="checkbox" />
        <div class="state p-danger-o">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_curve_fill_outline =
`
    <!-- primary -->
    <div class="pretty p-default p-curve p-fill">
        <input type="checkbox" />
        <div class="state p-primary-o">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty p-default p-curve p-fill">
        <input type="checkbox" />
        <div class="state p-success-o">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty p-default p-curve p-fill">
        <input type="checkbox" />
        <div class="state p-info-o">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty p-default p-curve p-fill">
        <input type="checkbox" />
        <div class="state p-warning-o">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty p-default p-curve p-fill">
        <input type="checkbox" />
        <div class="state p-danger-o">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_curve_thick_outline =
`
    <!-- primary -->
    <div class="pretty p-default p-curve p-thick">
        <input type="checkbox" />
        <div class="state p-primary-o">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty p-default p-curve p-thick">
        <input type="checkbox" />
        <div class="state p-success-o">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty p-default p-curve p-thick">
        <input type="checkbox" />
        <div class="state p-info-o">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty p-default p-curve p-thick">
        <input type="checkbox" />
        <div class="state p-warning-o">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty p-default p-curve p-thick">
        <input type="checkbox" />
        <div class="state p-danger-o">
            <label>Danger</label>
        </div>
    </div>
`;




c.checkbox_colors_round =
`
    <!-- primary -->
    <div class="pretty p-default p-round">
        <input type="checkbox" />
        <div class="state p-primary">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty p-default p-round">
        <input type="checkbox" />
        <div class="state p-success">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty p-default p-round">
        <input type="checkbox" />
        <div class="state p-info">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty p-default p-round">
        <input type="checkbox" />
        <div class="state p-warning">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty p-default p-round">
        <input type="checkbox" />
        <div class="state p-danger">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_round_fill =
`
    <!-- primary -->
    <div class="pretty p-default p-round p-fill">
        <input type="checkbox" />
        <div class="state p-primary">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty p-default p-round p-fill">
        <input type="checkbox" />
        <div class="state p-success">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty p-default p-round p-fill">
        <input type="checkbox" />
        <div class="state p-info">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty p-default p-round p-fill">
        <input type="checkbox" />
        <div class="state p-warning">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty p-default p-round p-fill">
        <input type="checkbox" />
        <div class="state p-danger">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_round_thick =
`
    <!-- primary -->
    <div class="pretty p-default p-round p-thick">
        <input type="checkbox" />
        <div class="state p-primary">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty p-default p-round p-thick">
        <input type="checkbox" />
        <div class="state p-success">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty p-default p-round p-thick">
        <input type="checkbox" />
        <div class="state p-info">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty p-default p-round p-thick">
        <input type="checkbox" />
        <div class="state p-warning">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty p-default p-round p-thick">
        <input type="checkbox" />
        <div class="state p-danger">
            <label>Danger</label>
        </div>
    </div>
`;



c.checkbox_colors_round_outline =
`
    <!-- primary -->
    <div class="pretty p-default p-round">
        <input type="checkbox" />
        <div class="state p-primary-o">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty p-default p-round">
        <input type="checkbox" />
        <div class="state p-success-o">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty p-default p-round">
        <input type="checkbox" />
        <div class="state p-info-o">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty p-default p-round">
        <input type="checkbox" />
        <div class="state p-warning-o">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty p-default p-round">
        <input type="checkbox" />
        <div class="state p-danger-o">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_round_fill_outline =
`
    <!-- primary -->
    <div class="pretty p-default p-round p-fill">
        <input type="checkbox" />
        <div class="state p-primary-o">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty p-default p-round p-fill">
        <input type="checkbox" />
        <div class="state p-success-o">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty p-default p-round p-fill">
        <input type="checkbox" />
        <div class="state p-info-o">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty p-default p-round p-fill">
        <input type="checkbox" />
        <div class="state p-warning-o">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty p-default p-round p-fill">
        <input type="checkbox" />
        <div class="state p-danger-o">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_round_thick_outline =
`
    <!-- primary -->
    <div class="pretty p-default p-round p-thick">
        <input type="checkbox" />
        <div class="state p-primary-o">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty p-default p-round p-thick">
        <input type="checkbox" />
        <div class="state p-success-o">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty p-default p-round p-thick">
        <input type="checkbox" />
        <div class="state p-info-o">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty p-default p-round p-thick">
        <input type="checkbox" />
        <div class="state p-warning-o">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty p-default p-round p-thick">
        <input type="checkbox" />
        <div class="state p-danger-o">
            <label>Danger</label>
        </div>
    </div>
`;


c.checkbox_colors_switch =
`
    <!--
        Outline colors wont work for switches
    -->

    <div class="pretty p-switch">
        <input type="checkbox" />
        <div class="state p-primary">
            <label>Primary</label>
        </div>
    </div>

    <div class="pretty p-switch p-fill">
        <input type="checkbox" />
        <div class="state p-success">
            <label>Success</label>
        </div>
    </div>

    <div class="pretty p-switch p-slim">
        <input type="checkbox" />
        <div class="state p-info">
            <label>Info</label>
        </div>
    </div>

    <div class="pretty p-switch p-slim">
        <input type="checkbox" />
        <div class="state p-warning">
            <label>Warning</label>
        </div>
    </div>

    <div class="pretty p-switch">
        <input type="checkbox" />
        <div class="state p-danger">
            <label>Danger</label>
        </div>
    </div>
`;


c.checkbox_colors_mixed =
`
    <!-- primary -->
    <div class="pretty p-default p-round p-thick">
        <input type="checkbox" />
        <div class="state p-primary-o">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty p-default p-round">
        <input type="checkbox" />
        <div class="state p-success-o">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty p-default p-fill">
        <input type="checkbox" />
        <div class="state p-info">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty p-default p-curve p-thick">
        <input type="checkbox" />
        <div class="state p-warning">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty p-default p-curve p-thick">
        <input type="checkbox" />
        <div class="state p-danger-o">
            <label>Danger</label>
        </div>
    </div>
`;

/* ANIMATIONS */

c.checkbox_animations_smooth =
`
    <div class="pretty p-default p-round p-smooth">
        <input type="checkbox" />
        <div class="state p-primary">
            <label>Monday</label>
        </div>
    </div>

    <div class="pretty p-icon p-round p-smooth">
        <input type="checkbox" />
        <div class="state p-success">
            <i class="icon mdi mdi-check"></i>
            <label>Tuesday</label>
        </div>
    </div>

    <div class="pretty p-icon p-smooth">
        <input type="checkbox" />
        <div class="state p-danger-o">
            <i class="icon mdi mdi-close"></i>
            <label>Wednesday</label>
        </div>
    </div>

    <div class="pretty p-default p-curve p-thick p-smooth">
        <input type="checkbox" />
        <div class="state p-warning">
            <label>Thursday</label>
        </div>
    </div>

    <div class="pretty p-default p-curve p-thick p-smooth">
        <input type="checkbox" />
        <div class="state p-danger-o">
            <label>Friday</label>
        </div>
    </div>
`;
c.checkbox_animations_jelly =
`
    <!--
        jelly animation is not applicable to
        p-default style
    -->

    <div class="pretty p-icon p-round p-jelly">
        <input type="checkbox" />
        <div class="state p-primary">
            <i class="icon mdi mdi-check"></i>
            <label>Interested</label>
        </div>
    </div>

    <div class="pretty p-icon p-jelly">
        <input type="checkbox" />
        <div class="state p-info-o">
            <i class="icon mdi mdi-check-all"></i>
            <label>All</label>
        </div>
    </div>

    <div class="pretty p-icon p-curve p-jelly">
        <input type="checkbox" />
        <div class="state p-danger">
            <i class="icon mdi mdi-bug"></i>
            <label>Bug</label>
        </div>
    </div>
`;
c.checkbox_animations_tada =
`
    <!--
        tada animation is not applicable to
        p-default style
    -->

    <div class="pretty p-icon p-round p-tada">
        <input type="checkbox" />
        <div class="state p-primary-o">
            <i class="icon mdi mdi-heart"></i>
            <label>Good</label>
        </div>
    </div>

    <div class="pretty p-icon p-curve p-tada p-plain">
        <input type="checkbox" />
        <div class="state">
            <i class="icon mdi mdi-weather-night"></i>
            <label>Night</label>
        </div>
    </div>

    <div class="pretty p-icon p-fill p-tada">
        <input type="checkbox" />
        <div class="state p-danger">
            <i class="icon mdi mdi-skull"></i>
            <label>Sweetheart</label>
        </div>
    </div>
`;
c.checkbox_animations_rotate =
`
    <!--
        rotate animation is not applicable to
        p-default and p-switch style
    -->

    <div class="pretty p-icon p-rotate">
        <input type="checkbox" />
        <div class="state p-success">
            <i class="icon mdi mdi-check"></i>
            <label>Friends</label>
        </div>
    </div>

    <div class="pretty p-icon p-rotate">
        <input type="checkbox" />
        <div class="state p-danger-o">
            <i class="icon mdi mdi-close"></i>
            <label>Family</label>
        </div>
    </div>
`;
c.checkbox_animations_pulse =
`
    <!--
        pulse animation is not applicable to
        p-default and p-switch style
    -->

    <div class="pretty p-icon p-round p-pulse">
        <input type="checkbox" />
        <div class="state p-success">
            <i class="icon mdi mdi-check"></i>
            <label>Allow</label>
        </div>
    </div>

    <div class="pretty p-default p-thick p-pulse">
        <input type="checkbox" />
        <div class="state p-warning-o">
            <label>Occasionally</label>
        </div>
    </div>
`;

/* FONT ICONS */

c.checkbox_font_icons =
`
    <div class="pretty p-icon p-round">
        <input type="checkbox" />
        <div class="state">
            <i class="icon mdi mdi-check"></i>
            <label> Pay Bills</label>
        </div>
    </div>

    <div class="pretty p-icon p-curve">
        <input type="checkbox" />
        <div class="state">
            <i class="icon mdi mdi-close"></i>
            <label> Fuel refill</label>
        </div>
    </div>

    <div class="pretty p-icon">
        <input type="checkbox" />
        <div class="state">
            <i class="icon mdi mdi-close-outline"></i>
            <label> Buy groceries</label>
        </div>
    </div>
`;

/* SVG */

c.checkbox_svg =
`
    <div class="pretty p-svg p-curve">
        <input type="checkbox" />
        <div class="state p-success">
            <!-- svg path -->
            <svg class="svg svg-icon" viewBox="0 0 20 20">
                <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white;fill:white;"></path>
            </svg>
            <label>Recurring</label>
        </div>
    </div>

    <!-- file source -->
    <div class="pretty p-svg p-plain">
        <input type="checkbox" />
        <div class="state">
            <img class="svg" src="/svg/open-iconic/task.svg">
            <label>Done</label>
        </div>
    </div>

    <!-- xlink -->
    <div class="pretty p-svg p-plain">
        <input type="checkbox" />
        <div class="state">
            <svg class="svg" viewBox="0 0 8 8" style="fill: #65bbd2;"><use xlink:href="sprite/open-iconic.svg#lock-locked"></use></svg>
            <label>Lock</label>
        </div>
    </div>

    <!--
    Credit
    http://svgicons.sparkk.fr/
    -->
`;

/* IMAGE */

c.checkbox_image =
`
    <!--
        Here we have used p-plain class to remove border for better looking.
        Please refer below PLAIN section to know more.
     -->

    <div class="pretty p-image p-plain">
        <input type="checkbox" />
        <div class="state">
            <img class="image" src="/img/checked/001.png">
            <label>Agree</label>
        </div>
    </div>

    <div class="pretty p-image p-plain">
        <input type="checkbox" />
        <div class="state">
            <img class="image" src="/img/checked/002.png">
            <label>Subscribe</label>
        </div>
    </div>

    <div class="pretty p-image p-plain">
        <input type="checkbox" />
        <div class="state">
            <img class="image" src="/img/checked/003.png">
            <label>Cancel</label>
        </div>
    </div>

    <div class="pretty p-image p-plain">
        <input type="checkbox" />
        <div class="state">
            <img class="image" src="/img/checked/004.png">
            <label>Yes</label>
        </div>
    </div>

`;

/* PLAIN */
c.checkbox_plain =
`
    <!--
        For expected result, use outline color.
        like p-warning-o ( outline ) instead of p-warning ( solid )
    -->

    <div class="pretty p-icon p-round p-smooth p-plain">
        <input type="checkbox" />
        <div class="state p-warning-o">
            <i class="icon mdi mdi-star"></i>
            <label> Favorite</label>
        </div>
    </div>

    <div class="pretty p-default p-round p-smooth p-plain">
        <input type="checkbox" />
        <div class="state p-success-o">
            <label> Add</label>
        </div>
    </div>
`;
/* TOGGLE */
c.checkbox_toggle_basic =
`
    <div class="pretty p-default p-curve p-toggle">
        <input type="checkbox" />
        <div class="state p-success p-on">
            <label>Subscribed</label>
        </div>
        <div class="state p-danger p-off">
            <label>Subscribe </label>
        </div>
    </div>
`;

c.checkbox_toggle_icon =
`
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
`;
c.checkbox_toggle_icon_color =
`
    <div class="pretty p-icon p-toggle p-plain">
        <input type="checkbox" />
        <div class="state p-success-o p-on">
            <i class="icon mdi mdi-eye"></i>
            <label>Show preview</label>
        </div>
        <div class="state p-off">
            <i class="icon mdi mdi-eye-off"></i>
            <label>Hide preview</label>
        </div>
    </div>

    <div class="pretty p-icon p-toggle p-plain">
        <input type="checkbox" />
        <div class="state p-warning-o p-off">
            <i class="icon mdi mdi-play"></i>
            <label>Playing...</label>
        </div>
        <div class="state p-on">
            <i class="icon mdi mdi-pause"></i>
            <label>Paused</label>
        </div>
    </div>

    <div class="pretty p-icon p-toggle p-plain">
        <input type="checkbox" />
        <div class="state p-success-o p-off">
            <i class="icon mdi mdi-thumb-up"></i>
            <label>Good</label>
        </div>
        <div class="state p-danger-o p-on">
            <i class="icon mdi mdi-thumb-down"></i>
            <label>Bad</label>
        </div>
    </div>
`;
c.checkbox_toggle_plain =
`
    <div class="pretty p-icon p-toggle p-plain">
        <input type="checkbox" />
        <div class="state p-on">
            <i class="icon mdi mdi-wifi"></i>
            <label>Wifi on</label>
        </div>
        <div class="state p-off">
            <i class="icon mdi mdi-wifi-off"></i>
            <label>Wifi off</label>
        </div>
    </div>
`;
c.checkbox_toggle_icon_only =
`
    <!-- Should not remove <label> tage -->
    <div class="pretty p-icon p-toggle">
        <input type="checkbox" />
        <div class="state p-success-o p-on">
            <i class="icon mdi mdi-reply"></i>
            <label></label>
        </div>
        <div class="state p-info-o p-off">
            <i class="icon mdi mdi-share"></i>
            <label></label>
        </div>
    </div>
`;

/* DISABLED */
c.disabled =
`
    <!-- Checked -->
    <div class="pretty p-icon p-round">
        <input type="checkbox" checked disabled/>
        <div class="state p-success">
            <i class="icon mdi mdi-check"></i>
            <label>Checked</label>
        </div>
    </div>

    <!-- Not Checked -->
    <div class="pretty p-default p-round">
        <input type="checkbox" disabled/>
        <div class="state">
            <label>Not checked</label>
        </div>
    </div>
`;

/* LOCKED */
c.locked =
`
    <!-- Checked -->
    <div class="pretty p-icon p-round p-locked">
        <input type="checkbox" checked/>
        <div class="state p-success">
            <i class="icon mdi mdi-check"></i>
            <label>Checked</label>
        </div>
    </div>

    <!-- Not Checked -->
    <div class="pretty p-default p-round p-locked">
        <input type="checkbox"/>
        <div class="state">
            <label>Not checked</label>
        </div>
    </div>
`;

/* STATES */
c.checkbox_state_hover =
`
    <div class="pretty p-default p-curve p-has-hover">
        <input type="checkbox" />
        <div class="state p-success-o">
            <label>Remember me</label>
        </div>
        <div class="state p-is-hover">
            <label>Remembered for 15 days</label>
        </div>
    </div>
`;

c.checkbox_state_focus =
`
    <div class="pretty p-default p-has-focus">
        <input type="checkbox" />
        <div class="state">
            <label>Remember me</label>
        </div>
    </div>
`;
c.checkbox_state_indeterminate =
`
    <div class="pretty p-icon p-curve p-has-indeterminate">
        <input type="checkbox" />
        <div class="state">
            <i class="icon mdi mdi-check"></i>
            <label>Normal</label>
        </div>
        <div class="state p-is-indeterminate">
            <i class="icon mdi mdi-minus"></i>
            <label>Indeterminate</label>
        </div>
    </div>
`;


/* FONT ICON LIBRARIES */

c.checkbox_fonticon_fontawesome =
`
    <div class="pretty p-icon p-smooth">
        <input type="checkbox" />
        <div class="state p-success">
            <i class="icon fa fa-check"></i>
            <label>fa-check</label>
        </div>
    </div>

    <div class="pretty p-icon p-smooth">
        <input type="checkbox" />
        <div class="state p-danger-o">
            <i class="icon fa fa-close"></i>
            <label>fa-close</label>
        </div>
    </div>

    <div class="pretty p-icon p-toggle p-plain">
        <input type="checkbox" />
        <div class="state p-off">
            <i class="icon fa fa-heart-o "></i>
            <label>fa-heart-o</label>
        </div>
        <div class="state p-on p-info-o">
            <i class="icon fa fa-heart"></i>
            <label>fa-heart</label>
        </div>
    </div>

`;

c.checkbox_fonticon_glyphicon =
`
    <div class="pretty p-icon p-smooth">
        <input type="checkbox" />
        <div class="state p-success">
            <i class="icon glyphicon glyphicon-ok"></i>
            <label>glyphicon-ok</label>
        </div>
    </div>

    <div class="pretty p-icon p-smooth">
        <input type="checkbox" />
        <div class="state p-danger-o">
            <i class="icon glyphicon glyphicon-remove"></i>
            <label>glyphicon-remove</label>
        </div>
    </div>

    <div class="pretty p-icon p-toggle p-plain">
        <input type="checkbox" />
        <div class="state p-off">
            <i class="icon glyphicon glyphicon-heart-empty"></i>
            <label>glyphicon-heart-empty</label>
        </div>
        <div class="state p-on p-info-o">
            <i class="icon glyphicon glyphicon-heart info"></i>
            <label>glyphicon-heart info</label>
        </div>
    </div>
`;

c.checkbox_fonticon_mdi =
`
    <div class="pretty p-icon p-smooth">
        <input type="checkbox" />
        <div class="state p-success">
            <i class="icon mdi mdi-check"></i>
            <label>mdi-check</label>
        </div>
    </div>

    <div class="pretty p-icon p-smooth">
        <input type="checkbox" />
        <div class="state p-danger-o">
            <i class="icon mdi mdi-close"></i>
            <label>mdi-close</label>
        </div>
    </div>

    <div class="pretty p-icon p-toggle p-plain">
        <input type="checkbox" />
        <div class="state p-on p-info-o">
            <i class="icon mdi mdi-heart"></i>
            <label>mdi-heart</label>
        </div>
        <div class="state p-off">
            <i class="icon mdi mdi-heart-outline"></i>
            <label>mdi-heart-o</label>
        </div>
    </div>
`;

c.checkbox_fonticon_zmdi =
`
    <div class="pretty p-icon p-smooth">
        <input type="checkbox" />
        <div class="state p-success">
            <i class="icon zmdi zmdi-check"></i>
            <label>zmdi-check</label>
        </div>
    </div>

    <div class="pretty p-icon p-smooth">
        <input type="checkbox" />
        <div class="state p-danger-o">
            <i class="icon zmdi zmdi-close"></i>
            <label>zmdi-close</label>
        </div>
    </div>

    <div class="pretty p-icon p-toggle p-plain">
        <input type="checkbox" />
        <div class="state p-on p-info-o">
            <i class="icon zmdi zmdi-favorite"></i>
            <label>zmdi-favorite</label>
        </div>
        <div class="state p-off">
            <i class="icon zmdi zmdi-favorite-outline"></i>
            <label>zmdi-favorite-outline</label>
        </div>
    </div>
`;

c.checkbox_fonticon_typcn =
`
    <div class="pretty p-icon p-smooth">
        <input type="checkbox" />
        <div class="state p-success">
            <i class="icon typcn typcn-tick"></i>
            <label>typcn-tick</label>
        </div>
    </div>

    <div class="pretty p-icon p-smooth">
        <input type="checkbox" />
        <div class="state p-danger-o">
            <i class="icon typcn typcn-times"></i>
            <label>typcn-times</label>
        </div>
    </div>

    <div class="pretty p-icon p-toggle p-plain">
        <input type="checkbox" />
        <div class="state p-on p-info-o">
            <i class="icon typcn typcn-heart"></i>
            <label>typcn-heart</label>
        </div>
        <div class="state p-off">
            <i class="icon typcn typcn-heart-outline"></i>
            <label>typcn-heart-outline</label>
        </div>
    </div>
`;

c.checkbox_fonticon_ion =
`
    <div class="pretty p-icon p-smooth">
        <input type="checkbox" />
        <div class="state p-success">
            <i class="icon ion-checkmark-round"></i>
            <label>ion-checkmark-round</label>
        </div>
    </div>

    <div class="pretty p-icon p-smooth">
        <input type="checkbox" />
        <div class="state p-danger-o">
            <i class="icon ion-close-round"></i>
            <label>ion-close-round</label>
        </div>
    </div>

    <div class="pretty p-icon p-toggle p-plain">
        <input type="checkbox" />
        <div class="state p-on p-info-o">
            <i class="icon ion-ios-heart"></i>
            <label>ion-ios-heart</label>
        </div>
        <div class="state p-off">
            <i class="icon ion-ios-heart-outline"></i>
            <label>ion-ios-heart-outline</label>
        </div>
    </div>
`;

c.checkbox_fonticon_gmdi =
`
    <div class="pretty p-icon p-smooth">
        <input type="checkbox" />
        <div class="state p-success">
            <i class="icon material-icons">done</i>
            <label>done</label>
        </div>
    </div>

    <div class="pretty p-icon p-smooth">
        <input type="checkbox" />
        <div class="state p-danger-o">
            <i class="icon material-icons">clear</i>
            <label>clear</label>
        </div>
    </div>

    <div class="pretty p-icon p-toggle p-plain">
        <input type="checkbox" />
        <div class="state p-off">
            <i class="icon material-icons">favorite_border</i>
            <label>favorite_border</label>
        </div>
        <div class="state p-on p-info-o">
            <i class="icon material-icons">favorite</i>
            <label>favorite</label>
        </div>
    </div>
`;

/* SVG LIBRARIES */
c.checkbox_svg_uikit =
`
    <div class="pretty p-svg">
        <input type="checkbox" />
        <div class="state">
            <span class="svg" uk-icon="icon: check"></span>
            <label>check</label>
        </div>
    </div>

    <div class="pretty p-svg p-round p-plain p-jelly">
        <input type="checkbox" />
        <div class="state p-success">
            <span class="svg" uk-icon="icon: check"></span>
            <label>check</label>
        </div>
    </div>
`;
c.checkbox_svg_feathers =
    `
    <!-- using direct svg file -->
    <div class="pretty p-svg p-plain p-bigger p-smooth">
        <input type="checkbox" />
        <div class="state">
            <img class="svg" src="/svg/feathers/check-circle.svg"/>
            <label>circle</label>
        </div>
    </div>

    <!-- using data attribute -->
    <div class="pretty p-svg p-plain p-bigger p-jelly">
        <input type="checkbox" />
        <div class="state">
            <span class="svg">
                <i data-feather="check-square"></i>
            </span>
            <label>square</label>
        </div>
    </div>
`;

/* SASS SETTINGS */
c.sass_settings =
`
    // If you felt the name is not-so-pretty,
    // you can always change!

    $pretty--class-name: pretty;

    // are you sure, you wanna change my handpicked
    // awesome super duper colors?

    $pretty--color-default:#bdc3c7;
    $pretty--color-primary:#428bca;
    $pretty--color-info:#5bc0de;
    $pretty--color-success:#5cb85c;
    $pretty--color-warning:#f0ad4e;
    $pretty--color-danger:#d9534f;
    $pretty--color-dark:#5a656b;

    // uh, boring z-index stuff, who cares.

    $pretty--z-index-back:0;
    $pretty--z-index-between:1;
    $pretty--z-index-front:2;

    // nobody will change this.

    $pretty--debug:false;
    $pretty--dev-err:'Invalid input type!';
`;
c.sass_import =
`
    /* REQUIRED */
    @import '~pretty-checkbox/scss/variables';
    @import '~pretty-checkbox/scss/core';

    /* OPTIONALS */
    @import '~pretty-checkbox/scss/elements/default/fill';
    @import '~pretty-checkbox/scss/elements/default/outline';
    @import '~pretty-checkbox/scss/elements/default/thick';

    @import '~pretty-checkbox/scss/elements/font-icon/general';

    @import '~pretty-checkbox/scss/elements/svg/general';

    @import '~pretty-checkbox/scss/elements/image/general';

    @import '~pretty-checkbox/scss/elements/switch/general';
    @import '~pretty-checkbox/scss/elements/switch/fill';
    @import '~pretty-checkbox/scss/elements/switch/slim';

    @import '~pretty-checkbox/scss/extras/toggle';
    @import '~pretty-checkbox/scss/extras/plain';
    @import '~pretty-checkbox/scss/extras/round';
    @import '~pretty-checkbox/scss/extras/curve';
    @import '~pretty-checkbox/scss/extras/animation';
    @import '~pretty-checkbox/scss/extras/disabled';
    @import '~pretty-checkbox/scss/extras/locked';
    @import '~pretty-checkbox/scss/extras/colors';
    @import '~pretty-checkbox/scss/extras/print';

    @import '~pretty-checkbox/scss/states/hover';
    @import '~pretty-checkbox/scss/states/focus';
    @import '~pretty-checkbox/scss/states/indeterminate';
`;

/* RADIO */

c.radio_basic =
`
    <div class="pretty p-default p-round">
        <input type="radio" name="radio1">
        <div class="state">
            <label>Male</label>
        </div>
    </div>

    <div class="pretty p-default p-round">
        <input type="radio" name="radio1">
        <div class="state">
            <label>Female</label>
        </div>
    </div>

    <div class="pretty p-default p-round">
        <input type="radio" name="radio1">
        <div class="state">
            <label>Special</label>
        </div>
    </div>
`;

c.radio_colors =
`
    <div class="pretty p-default p-curve">
        <input type="radio" name="color" />
        <div class="state p-primary-o">
            <label>Primary</label>
        </div>
    </div>

    <div class="pretty p-default p-curve">
        <input type="radio" name="color" />
        <div class="state p-success-o">
            <label>Success</label>
        </div>
    </div>

    <div class="pretty p-default p-curve">
        <input type="radio" name="color" />
        <div class="state p-info-o">
            <label>Info</label>
        </div>
    </div>

    <div class="pretty p-default p-curve">
        <input type="radio" name="color" />
        <div class="state p-warning-o">
            <label>Warning</label>
        </div>
    </div>

    <div class="pretty p-default p-curve">
        <input type="radio" name="color" />
        <div class="state p-danger-o">
            <label>Danger</label>
        </div>
    </div>
`;

c.radio_icons =
`
    <div class="pretty p-icon p-round">
        <input type="radio" name="icon" />
        <div class="state p-primary-o">
            <i class="icon mdi mdi-check"></i>
            <label>Dollar</label>
        </div>
    </div>

    <div class="pretty p-icon p-round">
        <input type="radio" name="icon" />
        <div class="state p-success-o">
            <i class="icon mdi mdi-check"></i>
            <label>Euro</label>
        </div>
    </div>

    <div class="pretty p-icon p-round">
        <input type="radio" name="icon" />
        <div class="state p-info-o">
            <i class="icon mdi mdi-check"></i>
            <label>Dinar</label>
        </div>
    </div>

    <div class="pretty p-icon p-round">
        <input type="radio" name="icon" />
        <div class="state p-warning-o">
            <i class="icon mdi mdi-check"></i>
            <label>Pound</label>
        </div>
    </div>

    <div class="pretty p-icon p-round">
        <input type="radio" name="icon" />
        <div class="state p-danger-o">
            <i class="icon mdi mdi-check"></i>
            <label>Rupee</label>
        </div>
    </div>
`;

c.radio_icons_solid =
`
    <div class="pretty p-icon p-round">
        <input type="radio" name="icon_solid" />
        <div class="state p-primary">
            <i class="icon mdi mdi-check"></i>
            <label>New York</label>
        </div>
    </div>

    <div class="pretty p-icon p-round">
        <input type="radio" name="icon_solid" />
        <div class="state p-success">
            <i class="icon mdi mdi-check"></i>
            <label>Paris</label>
        </div>
    </div>

    <div class="pretty p-icon p-round">
        <input type="radio" name="icon_solid" />
        <div class="state p-info">
            <i class="icon mdi mdi-check"></i>
            <label>Dubai</label>
        </div>
    </div>

    <div class="pretty p-icon p-round">
        <input type="radio" name="icon_solid" />
        <div class="state p-warning">
            <i class="icon mdi mdi-check"></i>
            <label>Tokyo</label>
        </div>
    </div>

    <div class="pretty p-icon p-round">
        <input type="radio" name="icon_solid" />
        <div class="state p-danger">
            <i class="icon mdi mdi-check"></i>
            <label>Istanbul</label>
        </div>
    </div>
`;

c.radio_plain =
`
    <div class="pretty p-icon p-round p-plain p-smooth">
        <input type="radio" name="plain">
        <div class="state p-primary-o">
            <i class="icon mdi mdi-human"></i>
            <label>Single</label>
        </div>
    </div>

    <div class="pretty p-icon p-round p-plain p-smooth">
        <input type="radio" name="plain">
        <div class="state p-info-o">
            <i class="icon mdi mdi-human-male-female"></i>
            <label>Married</label>
        </div>
    </div>

    <div class="pretty p-icon p-round p-plain p-smooth">
        <input type="radio" name="plain">
        <div class="state p-success-o">
            <i class="icon mdi mdi-heart"></i>
            <label>In relationship</label>
        </div>
    </div>
`;
c.radio_animations =
`
    <div class="pretty p-icon p-curve p-tada">
        <input type="radio" name="radio66">
        <div class="state p-primary-o">
            <i class="icon mdi mdi-check"></i>
            <label>HTML</label>
        </div>
    </div>

    <div class="pretty p-icon p-curve p-rotate">
        <input type="radio" name="radio66">
        <div class="state p-success-o">
            <i class="icon mdi mdi-check"></i>
            <label> Javascript</label>
        </div>
    </div>

    <div class="pretty p-icon p-curve p-pulse">
        <input type="radio" name="radio66">
        <div class="state p-info-o">
            <i class="icon mdi mdi-check"></i>
            <label> Python</label>
        </div>
    </div>

    <div class="pretty p-icon p-curve p-jelly">
        <input type="radio" name="radio66">
        <div class="state p-warning">
            <i class="icon mdi mdi-check"></i>
            <label> PHP</label>
        </div>
    </div>

    <div class="pretty p-icon p-curve p-smooth">
        <input type="radio" name="radio66">
        <div class="state">
            <i class="icon mdi mdi-check"></i>
            <label>Swift</label>
        </div>
    </div>
`;

c.radio_switch =
`
    <div class="pretty p-switch">
        <input type="radio" name="switch1" />
        <div class="state p-success">
            <label>Summer</label>
        </div>
    </div>

    <div class="pretty p-switch p-fill">
        <input type="radio" name="switch1" />
        <div class="state p-success">
            <label>Winter</label>
        </div>
    </div>

    <div class="pretty p-switch p-slim">
        <input type="radio" name="switch1" />
        <div class="state p-success">
            <label>Fall</label>
        </div>
    </div>
`;

/* SCALABILITY */
c.scalability =
`
    <div id="pretty-scale-test">
        <div class="pretty p-default" id="pretty-scale-test">
            <input type="checkbox" />
            <div class="state">
                <label></label>
            </div>
        </div>

        <div class="pretty p-icon p-curve">
            <input type="checkbox" />
            <div class="state p-danger">
                <i class="icon mdi mdi-close"></i>
                <label></label>
            </div>
        </div>

        <div class="pretty p-round p-fill p-icon">
            <input type="checkbox" />
            <div class="state p-info">
                <i class="icon mdi mdi-check"></i>
                <label></label>
            </div>
        </div>
    </div>
`;

/* BIGGER */
c.bigger =
`
    <div class="pretty p-icon p-jelly p-round p-bigger">
        <input type="checkbox" />
        <div class="state p-info">
            <i class="icon material-icons">done</i>
            <label>done</label>
        </div>
    </div>

    <div class="pretty p-default p-smooth p-bigger">
        <input type="checkbox" />
        <div class="state p-danger">
            <label>clear</label>
        </div>
    </div>
`;
module.exports = c;
