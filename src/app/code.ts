const c: any = {};

c.install_cli =
`
    > yarn add pretty-checkbox  //or
    > npm install pretty-checkbox
`;

c.install_cdn =
`
    https://cdn.jsdelivr.net/npm/pretty-checkbox/dist/pretty.min.css
`;

c.install_import =
`
    @import '~pretty-checkbox/src/pretty-checkbox.scss';
`;

c.install_basic =
`
    <div class="pretty --default">
        <input type="checkbox" />
        <div class="state">
            <label>Check</label>
        </div>
    </div>
`;

c.checkbox_basic_square =
    `
    <!-- add class --default -->
    <div class="pretty --default">
        <input type="checkbox" />
        <div class="state">
            <label>Default</label>
        </div>
    </div>

    <!-- add class --fill -->
    <div class="pretty --default --fill">
        <input type="checkbox" />
        <div class="state">
            <label>Fill</label>
        </div>
    </div>

    <!-- add class --thick -->
    <div class="pretty --default --thick">
        <input type="checkbox" />
        <div class="state">
            <label>Thick</label>
        </div>
    </div>
`;

c.checkbox_basic_round =
    `
    <!-- add class --round -->
    <div class="pretty --default --round">
        <input type="checkbox" />
        <div class="state">
            <label>Default</label>
        </div>
    </div>

    <div class="pretty --default --round --fill">
        <input type="checkbox" />
        <div class="state">
            <label>Fill</label>
        </div>
    </div>

    <div class="pretty --default --round --thick">
        <input type="checkbox" />
        <div class="state">
            <label>Thick</label>
        </div>
    </div>
`;

c.checkbox_basic_curve =
    `
    <!-- add class --curve -->
    <div class="pretty --default --curve">
        <input type="checkbox" />
        <div class="state">
            <label>Default</label>
        </div>
    </div>

    <div class="pretty --default --curve --fill">
        <input type="checkbox" />
        <div class="state">
            <label>Fill</label>
        </div>
    </div>

    <div class="pretty --default --curve --thick">
        <input type="checkbox" />
        <div class="state">
            <label>Thick</label>
        </div>
    </div>
`;

c.checkbox_switch =
    `
    <!-- add class --switch -->
    <div class="pretty --switch">
        <input type="checkbox" />
        <div class="state">
            <label>Outline</label>
        </div>
    </div>

    <!-- add class --switch -->
    <div class="pretty --switch --fill">
        <input type="checkbox" />
        <div class="state">
            <label>Fill</label>
        </div>
    </div>

    <!-- add class --switch -->
    <div class="pretty --switch --slim">
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
    <div class="pretty --default">
        <input type="checkbox" />
        <div class="state --primary">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty --default">
        <input type="checkbox" />
        <div class="state --success">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty --default">
        <input type="checkbox" />
        <div class="state --info">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty --default">
        <input type="checkbox" />
        <div class="state --warning">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty --default">
        <input type="checkbox" />
        <div class="state --danger">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_default_outline =
    `
    <!-- primary -->
    <div class="pretty --default">
        <input type="checkbox" />
        <div class="state --primary-o">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty --default">
        <input type="checkbox" />
        <div class="state --success-o">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty --default">
        <input type="checkbox" />
        <div class="state --info-o">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty --default">
        <input type="checkbox" />
        <div class="state --warning-o">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty --default">
        <input type="checkbox" />
        <div class="state --danger-o">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_default_fill =
    `
    <!-- primary -->
    <div class="pretty --default --fill">
        <input type="checkbox" />
        <div class="state --primary">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty --default --fill">
        <input type="checkbox" />
        <div class="state --success">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty --default --fill">
        <input type="checkbox" />
        <div class="state --info">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty --default --fill">
        <input type="checkbox" />
        <div class="state --warning">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty --default --fill">
        <input type="checkbox" />
        <div class="state --danger">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_default_thick =
    `
    <!-- primary -->
    <div class="pretty --default --thick">
        <input type="checkbox" />
        <div class="state --primary">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty --default --thick">
        <input type="checkbox" />
        <div class="state --success">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty --default --thick">
        <input type="checkbox" />
        <div class="state --info">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty --default --thick">
        <input type="checkbox" />
        <div class="state --warning">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty --default --thick">
        <input type="checkbox" />
        <div class="state --danger">
            <label>Danger</label>
        </div>
    </div>
`;


c.checkbox_colors_default_fill_outline =
    `
    <!-- primary -->
    <div class="pretty --default --fill">
        <input type="checkbox" />
        <div class="state --primary-o">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty --default --fill">
        <input type="checkbox" />
        <div class="state --success-o">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty --default --fill">
        <input type="checkbox" />
        <div class="state --info-o">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty --default --fill">
        <input type="checkbox" />
        <div class="state --warning-o">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty --default --fill">
        <input type="checkbox" />
        <div class="state --danger-o">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_default_thick_outline =
    `
    <!-- primary -->
    <div class="pretty --default --thick">
        <input type="checkbox" />
        <div class="state --primary-o">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty --default --thick">
        <input type="checkbox" />
        <div class="state --success-o">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty --default --thick">
        <input type="checkbox" />
        <div class="state --info-o">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty --default --thick">
        <input type="checkbox" />
        <div class="state --warning-o">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty --default --thick">
        <input type="checkbox" />
        <div class="state --danger-o">
            <label>Danger</label>
        </div>
    </div>
`;


c.checkbox_colors_curve =
    `
    <!-- primary -->
    <div class="pretty --default --curve">
        <input type="checkbox" />
        <div class="state --primary">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty --default --curve">
        <input type="checkbox" />
        <div class="state --success">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty --default --curve">
        <input type="checkbox" />
        <div class="state --info">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty --default --curve">
        <input type="checkbox" />
        <div class="state --warning">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty --default --curve">
        <input type="checkbox" />
        <div class="state --danger">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_curve_fill =
    `
    <!-- primary -->
    <div class="pretty --default --curve --fill">
        <input type="checkbox" />
        <div class="state --primary">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty --default --curve --fill">
        <input type="checkbox" />
        <div class="state --success">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty --default --curve --fill">
        <input type="checkbox" />
        <div class="state --info">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty --default --curve --fill">
        <input type="checkbox" />
        <div class="state --warning">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty --default --curve --fill">
        <input type="checkbox" />
        <div class="state --danger">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_curve_thick =
    `
    <!-- primary -->
    <div class="pretty --default --curve --thick">
        <input type="checkbox" />
        <div class="state --primary">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty --default --curve --thick">
        <input type="checkbox" />
        <div class="state --success">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty --default --curve --thick">
        <input type="checkbox" />
        <div class="state --info">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty --default --curve --thick">
        <input type="checkbox" />
        <div class="state --warning">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty --default --curve --thick">
        <input type="checkbox" />
        <div class="state --danger">
            <label>Danger</label>
        </div>
    </div>
`;



c.checkbox_colors_curve_outline =
    `
    <!-- primary -->
    <div class="pretty --default --curve">
        <input type="checkbox" />
        <div class="state --primary-o">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty --default --curve">
        <input type="checkbox" />
        <div class="state --success-o">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty --default --curve">
        <input type="checkbox" />
        <div class="state --info-o">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty --default --curve">
        <input type="checkbox" />
        <div class="state --warning-o">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty --default --curve">
        <input type="checkbox" />
        <div class="state --danger-o">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_curve_fill_outline =
    `
    <!-- primary -->
    <div class="pretty --default --curve --fill">
        <input type="checkbox" />
        <div class="state --primary-o">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty --default --curve --fill">
        <input type="checkbox" />
        <div class="state --success-o">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty --default --curve --fill">
        <input type="checkbox" />
        <div class="state --info-o">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty --default --curve --fill">
        <input type="checkbox" />
        <div class="state --warning-o">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty --default --curve --fill">
        <input type="checkbox" />
        <div class="state --danger-o">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_curve_thick_outline =
    `
    <!-- primary -->
    <div class="pretty --default --curve --thick">
        <input type="checkbox" />
        <div class="state --primary-o">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty --default --curve --thick">
        <input type="checkbox" />
        <div class="state --success-o">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty --default --curve --thick">
        <input type="checkbox" />
        <div class="state --info-o">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty --default --curve --thick">
        <input type="checkbox" />
        <div class="state --warning-o">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty --default --curve --thick">
        <input type="checkbox" />
        <div class="state --danger-o">
            <label>Danger</label>
        </div>
    </div>
`;




c.checkbox_colors_round =
    `
    <!-- primary -->
    <div class="pretty --default --round">
        <input type="checkbox" />
        <div class="state --primary">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty --default --round">
        <input type="checkbox" />
        <div class="state --success">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty --default --round">
        <input type="checkbox" />
        <div class="state --info">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty --default --round">
        <input type="checkbox" />
        <div class="state --warning">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty --default --round">
        <input type="checkbox" />
        <div class="state --danger">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_round_fill =
    `
    <!-- primary -->
    <div class="pretty --default --round --fill">
        <input type="checkbox" />
        <div class="state --primary">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty --default --round --fill">
        <input type="checkbox" />
        <div class="state --success">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty --default --round --fill">
        <input type="checkbox" />
        <div class="state --info">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty --default --round --fill">
        <input type="checkbox" />
        <div class="state --warning">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty --default --round --fill">
        <input type="checkbox" />
        <div class="state --danger">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_round_thick =
    `
    <!-- primary -->
    <div class="pretty --default --round --thick">
        <input type="checkbox" />
        <div class="state --primary">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty --default --round --thick">
        <input type="checkbox" />
        <div class="state --success">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty --default --round --thick">
        <input type="checkbox" />
        <div class="state --info">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty --default --round --thick">
        <input type="checkbox" />
        <div class="state --warning">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty --default --round --thick">
        <input type="checkbox" />
        <div class="state --danger">
            <label>Danger</label>
        </div>
    </div>
`;



c.checkbox_colors_round_outline =
    `
    <!-- primary -->
    <div class="pretty --default --round">
        <input type="checkbox" />
        <div class="state --primary-o">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty --default --round">
        <input type="checkbox" />
        <div class="state --success-o">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty --default --round">
        <input type="checkbox" />
        <div class="state --info-o">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty --default --round">
        <input type="checkbox" />
        <div class="state --warning-o">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty --default --round">
        <input type="checkbox" />
        <div class="state --danger-o">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_round_fill_outline =
    `
    <!-- primary -->
    <div class="pretty --default --round --fill">
        <input type="checkbox" />
        <div class="state --primary-o">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty --default --round --fill">
        <input type="checkbox" />
        <div class="state --success-o">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty --default --round --fill">
        <input type="checkbox" />
        <div class="state --info-o">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty --default --round --fill">
        <input type="checkbox" />
        <div class="state --warning-o">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty --default --round --fill">
        <input type="checkbox" />
        <div class="state --danger-o">
            <label>Danger</label>
        </div>
    </div>
`;

c.checkbox_colors_round_thick_outline =
    `
    <!-- primary -->
    <div class="pretty --default --round --thick">
        <input type="checkbox" />
        <div class="state --primary-o">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty --default --round --thick">
        <input type="checkbox" />
        <div class="state --success-o">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty --default --round --thick">
        <input type="checkbox" />
        <div class="state --info-o">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty --default --round --thick">
        <input type="checkbox" />
        <div class="state --warning-o">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty --default --round --thick">
        <input type="checkbox" />
        <div class="state --danger-o">
            <label>Danger</label>
        </div>
    </div>
`;


c.checkbox_colors_switch =
    `
    <!-- primary -->
    <div class="pretty --switch">
        <input type="checkbox" />
        <div class="state --primary-o">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty --switch">
        <input type="checkbox" />
        <div class="state --success">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty --switch --slim">
        <input type="checkbox" />
        <div class="state --info">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty --switch --slim">
        <input type="checkbox" />
        <div class="state --warning-o">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty --switch">
        <input type="checkbox" />
        <div class="state --danger">
            <label>Danger</label>
        </div>
    </div>
`;


c.checkbox_colors_mixed =
    `
    <!-- primary -->
    <div class="pretty --default --round --thick">
        <input type="checkbox" />
        <div class="state --primary-o">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty --default --round">
        <input type="checkbox" />
        <div class="state --success-o">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty --default --fill">
        <input type="checkbox" />
        <div class="state --info">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty --default --curve --thick">
        <input type="checkbox" />
        <div class="state --warning">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty --default --curve --thick">
        <input type="checkbox" />
        <div class="state --danger-o">
            <label>Danger</label>
        </div>
    </div>
`;

/* ANIMATIONS */

c.checkbox_animations_smooth =
    `
    <div class="pretty --default --round --smooth">
        <input type="checkbox" />
        <div class="state --primary">
            <label>Monday</label>
        </div>
    </div>

    <div class="pretty --icon --round --smooth"> 
        <input type="checkbox" />
        <div class="state --success">
            <i class="icon mdi mdi-check"></i>
            <label>Tuesday</label>
        </div>
    </div>

    <div class="pretty --icon --smooth">
        <input type="checkbox" />
        <div class="state --danger-o"> 
            <i class="icon mdi mdi-close"></i>
            <label>Wednesday</label>
        </div>
    </div>

    <div class="pretty --default --curve --thick --smooth">
        <input type="checkbox" />
        <div class="state --warning">
            <label>Thursday</label>
        </div>
    </div>

    <div class="pretty --default --curve --thick --smooth">
        <input type="checkbox" />
        <div class="state --danger-o">
            <label>Friday</label>
        </div>
    </div>
`;
c.checkbox_animations_jelly =
    `
    <!-- 
        jelly animation is not applicable to 
        --default style 
    -->

    <div class="pretty --icon --round --jelly">
        <input type="checkbox" />
        <div class="state --primary">
            <i class="icon mdi mdi-check"></i>
            <label>Interested</label>
        </div>
    </div>

    <div class="pretty --icon --jelly">
        <input type="checkbox" />
        <div class="state --info-o">
            <i class="icon mdi mdi-check-all"></i>
            <label>All</label>
        </div>
    </div>

    <div class="pretty --icon --curve --jelly">
        <input type="checkbox" />
        <div class="state --danger">
            <i class="icon mdi mdi-bug"></i>
            <label>Bug</label>
        </div>
    </div>
`;
c.checkbox_animations_tada =
    `
    <!-- 
        jelly animation is not applicable to 
        --default style 
    -->

    <div class="pretty --icon --round --tada">
        <input type="checkbox" />
        <div class="state --primary-o">
            <i class="icon mdi mdi-heart"></i>
            <label>Good</label>
        </div>
    </div>

    <div class="pretty --icon --curve --tada --plain">
        <input type="checkbox" />
        <div class="state">
            <i class="icon mdi mdi-weather-night"></i>
            <label>Night</label>
        </div>
    </div>

    <div class="pretty --icon --fill --tada">
        <input type="checkbox" />
        <div class="state --danger">
            <i class="icon mdi mdi-skull"></i>
            <label>Sweetheart</label>
        </div>
    </div>
`;
c.checkbox_animations_rotate =
    `
    <!-- 
        jelly animation is not applicable to 
        --default and --switch style 
    -->

    <div class="pretty --icon --rotate">
        <input type="checkbox" />
        <div class="state --success">
            <i class="icon mdi mdi-check"></i>
            <label>Friends</label>
        </div>
    </div>

    <div class="pretty --icon --rotate">
        <input type="checkbox" />
        <div class="state --danger-o">
            <i class="icon mdi mdi-close"></i>
            <label>Family</label>
        </div>
    </div>
`;
c.checkbox_animations_pulse =
    `
    <!-- 
        jelly animation is not applicable to 
        --default and --switch style 
    -->

    <div class="pretty --icon --round --pulse">
        <input type="checkbox" />
        <div class="state --success">
            <i class="icon mdi mdi-check"></i>
            <label>Allow</label>
        </div>
    </div>

    <div class="pretty --default --thick --pulse">
        <input type="checkbox" />
        <div class="state --warning-o">
            <label>Occasionally</label>
        </div>
    </div>
`;

/* FONT ICONS */

c.checkbox_font_icons =
    `
    <div class="pretty --icon --round">
        <input type="checkbox" />
        <div class="state">
            <i class="icon mdi mdi-check"></i>
            <label> Pay Bills</label>
        </div>
    </div>

    <div class="pretty --icon --curve">
        <input type="checkbox" />
        <div class="state">
            <i class="icon mdi mdi-close"></i>
            <label> Fuel refill</label>
        </div>
    </div>

    <div class="pretty --icon">
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
    <div class="pretty --svg --curve">
        <input type="checkbox" />
        <div class="state --success">
            <!-- svg path -->
            <svg class="svg svg-icon" viewBox="0 0 20 20">
                <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white;fill:white;"></path>
            </svg>
            <label>Recurring</label>
        </div>
    </div>

    <!-- file source -->
    <div class="pretty --svg --plain">
        <input type="checkbox" />
        <div class="state">
            <img class="svg" src="/assets/svg/open-iconic/task.svg">
            <label>Done</label>
        </div>
    </div>

    <!-- xlink -->
    <div class="pretty --svg --plain">
        <input type="checkbox" />
        <div class="state">
            <svg class="svg" viewBox="0 0 8 8" style="fill: #65bbd2;"><use xlink:href="assets/sprite/open-iconic.svg#lock-locked"></use></svg>
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
        Here we have used --plain class to remove border for better looking.
        Please refer below PLAIN section to know more.
     -->
    
    <div class="pretty --image --plain">
        <input type="checkbox" />
        <div class="state">
            <img class="image" src="/assets/img/checked/001.png">
            <label>Agree</label>
        </div>
    </div>

    <div class="pretty --image --plain">
        <input type="checkbox" />
        <div class="state">
            <img class="image" src="/assets/img/checked/002.png">
            <label>Subscribe</label>
        </div>
    </div>

    <div class="pretty --image --plain">
        <input type="checkbox" />
        <div class="state">
            <img class="image" src="/assets/img/checked/003.png">
            <label>Cancel</label>
        </div>
    </div>

    <div class="pretty --image --plain">
        <input type="checkbox" />
        <div class="state">
            <img class="image" src="/assets/img/checked/004.png">
            <label>Yes</label>
        </div>
    </div>

`;

/* PLAIN */
c.checkbox_plain =
    `
    <!-- 
        For expected result, use outline color.
        like --warning-o ( outline ) instead of --warning ( solid )
    -->

    <div class="pretty --icon --round --smooth --plain">
        <input type="checkbox" />
        <div class="state --warning-o">
            <i class="icon mdi mdi-star"></i>
            <label> Favorite</label>
        </div>
    </div>

    <div class="pretty --default --round --smooth --plain">
        <input type="checkbox" />
        <div class="state --success-o">
            <label> Add</label>
        </div>
    </div>
`;
/* TOGGLE */
c.checkbox_toggle_basic =
    `
    <div class="pretty --default --curve --toggle">
        <input type="checkbox" />
        <div class="state --danger --on">
            <label>check</label>
        </div>
        <div class="state --success --off">
            <label>close</label>
        </div>
    </div>
`;

c.checkbox_toggle_icon =
`
    <div class="pretty --icon --toggle">
        <input type="checkbox" />
        <div class="state --on">
            <i class="icon mdi mdi-microphone"></i>
            <label>ON</label>
        </div>
        <div class="state --off">
            <i class="icon mdi mdi-microphone-off"></i>
            <label>OFF</label>
        </div>
    </div>
`;
c.checkbox_toggle_icon_color =
`
    <div class="pretty --icon --toggle">
        <input type="checkbox" />
        <div class="state --danger --on">
            <i class="icon mdi mdi-microphone"></i>
            <label>ON</label>
        </div>
        <div class="state --success --off">
            <i class="icon mdi mdi-microphone-off"></i>
            <label>OFF</label>
        </div>
    </div>
`;
c.checkbox_toggle_plain =
`
    <div class="pretty --icon --toggle --plain">
        <input type="checkbox" />
        <div class="state --on">
            <i class="icon mdi mdi-microphone"></i>
            <label>ON</label>
        </div>
        <div class="state --off">
            <i class="icon mdi mdi-microphone-off"></i>
            <label>OFF</label>
        </div>
    </div>
`;
c.checkbox_toggle_icon_only =
`
    <div class="pretty --icon --toggle">
        <input type="checkbox" />
        <div class="state --success-o --on">
            <i class="icon mdi mdi-microphone"></i>
            <label></label>
        </div>
        <div class="state --danger-o --off">
            <i class="icon mdi mdi-microphone-off"></i>
            <label></label>
        </div>
    </div>
`;

/* DISABLED */
c.disabled =
    `
    <!-- Checked -->
    <div class="pretty --icon --round">
        <input type="checkbox" checked disabled/>
        <div class="state --success">
            <i class="icon mdi mdi-check"></i>
            <label>Checked</label>
        </div>
    </div>

    <!-- Not Checked -->
    <div class="pretty --default --round">
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
    <div class="pretty --icon --round --locked">
        <input type="checkbox" checked/>
        <div class="state --success">
            <i class="icon mdi mdi-check"></i>
            <label>Checked</label>
        </div>
    </div>

    <!-- Not Checked -->
    <div class="pretty --default --round --locked">
        <input type="checkbox"/>
        <div class="state">
            <label>Not checked</label>
        </div>
    </div>
`;

/* STATES */
c.checkbox_state_hover =
    `
    <div class="pretty --default --curve --has-hover">
        <input type="checkbox" />
        <div class="state --success-o">
            <label>Remember me</label>
        </div>
        <div class="state --is-hover">
            <label>Remembered for 15 days</label>
        </div>
    </div>
`;

c.checkbox_state_focus =
    `
    <div class="pretty --default --has-focus">
        <input type="checkbox" />
        <div class="state">
            <label>Remember me</label>
        </div>
    </div>
`;
c.checkbox_state_indeterminate =
    `
    <div class="pretty --icon --curve --has-indeterminate">
        <input type="checkbox" />
        <div class="state">
            <i class="icon mdi mdi-check"></i>
            <label>Normal</label>
        </div>
        <div class="state --is-indeterminate">
            <i class="icon mdi mdi-minus"></i>
            <label>Indeterminate</label>
        </div>
    </div>
`;


/* FONT ICON LIBRARIES */

c.checkbox_fonticon_fontawesome =
    `
    <div class="pretty --icon --smooth">
        <input type="checkbox" />
        <div class="state --success">
            <i class="icon fa fa-check"></i>
            <label>fa-check</label>
        </div>
    </div>
    <div class="pretty --icon --smooth">
        <input type="checkbox" />
        <div class="state --danger-o">
            <i class="icon fa fa-close"></i>
            <label>fa-close</label>
        </div>
    </div>
    <div class="pretty --icon --toggle --plain">
        <input type="checkbox" />
        <div class="state --off">
            <i class="icon fa fa-heart-o "></i>
            <label>fa-heart-o</label>
        </div>
        <div class="state --on --info-o">
            <i class="icon fa fa-heart"></i>
            <label>fa-heart</label>
        </div>
    </div>

`;

c.checkbox_fonticon_glyphicon =
    `
    <div class="pretty --icon --smooth">
        <input type="checkbox" />
        <div class="state --success">
            <i class="icon glyphicon glyphicon-ok"></i>
            <label>glyphicon-ok</label>
        </div>
    </div>
    <div class="pretty --icon --smooth">
        <input type="checkbox" />
        <div class="state --danger-o">
            <i class="icon glyphicon glyphicon-remove"></i>
            <label>glyphicon-remove</label>
        </div>
    </div>
    <div class="pretty --icon --toggle --plain">
        <input type="checkbox" />
        <div class="state --off">
            <i class="icon glyphicon glyphicon-heart-empty"></i>
            <label>glyphicon-heart-empty</label>
        </div>
        <div class="state --on --info-o">
            <i class="icon glyphicon glyphicon-heart info"></i>
            <label>glyphicon-heart info</label>
        </div>
    </div>
`;

c.checkbox_fonticon_mdi =
    `
    <div class="pretty --icon --smooth">
        <input type="checkbox" />
        <div class="state --success">
            <i class="icon mdi mdi-check"></i>
            <label>mdi-check</label>
        </div>
    </div>
    <div class="pretty --icon --smooth">
        <input type="checkbox" />
        <div class="state --danger-o">
            <i class="icon mdi mdi-close"></i>
            <label>mdi-close</label>
        </div>
    </div>
    <div class="pretty --icon --toggle --plain">
        <input type="checkbox" />
        <div class="state --on --info-o">
            <i class="icon mdi mdi-heart"></i>
            <label>mdi-heart</label>
        </div>
        <div class="state --off">
            <i class="icon mdi mdi-heart-outline"></i>
            <label>mdi-heart-o</label>
        </div>
    </div>
`;

c.checkbox_fonticon_zmdi =
    `
    <div class="pretty --icon --smooth">
        <input type="checkbox" />
        <div class="state --success">
            <i class="icon zmdi zmdi-check"></i>
            <label>zmdi-check</label>
        </div>
    </div>
    <div class="pretty --icon --smooth">
        <input type="checkbox" />
        <div class="state --danger-o">
            <i class="icon zmdi zmdi-close"></i>
            <label>zmdi-close</label>
        </div>
    </div>
    <div class="pretty --icon --toggle --plain">
        <input type="checkbox" />
        <div class="state --on --info-o">
            <i class="icon zmdi zmdi-favorite"></i>
            <label>zmdi-favorite</label>
        </div>
        <div class="state --off">
            <i class="icon zmdi zmdi-favorite-outline"></i>
            <label>zmdi-favorite-outline</label>
        </div>
    </div>
`;

c.checkbox_fonticon_typcn =
    `
    <div class="pretty --icon --smooth">
        <input type="checkbox" />
        <div class="state --success">
            <i class="icon typcn typcn-tick"></i>
            <label>typcn-tick</label>
        </div>
    </div>
    <div class="pretty --icon --smooth">
        <input type="checkbox" />
        <div class="state --danger-o">
            <i class="icon typcn typcn-times"></i>
            <label>typcn-times</label>
        </div>
    </div>
    <div class="pretty --icon --toggle --plain">
        <input type="checkbox" />
        <div class="state --on --info-o">
            <i class="icon typcn typcn-heart"></i>
            <label>typcn-heart</label>
        </div>
        <div class="state --off">
            <i class="icon typcn typcn-heart-outline"></i>
            <label>typcn-heart-outline</label>
        </div>
    </div>
`;

c.checkbox_fonticon_ion =
    `
    <div class="pretty --icon --smooth">
        <input type="checkbox" />
        <div class="state --success">
            <i class="icon ion-checkmark-round"></i>
            <label>ion-checkmark-round</label>
        </div>
    </div>
    <div class="pretty --icon --smooth">
        <input type="checkbox" />
        <div class="state --danger-o">
            <i class="icon ion-close-round"></i>
            <label>ion-close-round</label>
        </div>
    </div>
    <div class="pretty --icon --toggle --plain">
        <input type="checkbox" />
        <div class="state --on --info-o">
            <i class="icon ion-ios-heart"></i>
            <label>ion-ios-heart</label>
        </div>
        <div class="state --off">
            <i class="icon ion-ios-heart-outline"></i>
            <label>ion-ios-heart-outline</label>
        </div>
    </div>
`;

c.checkbox_fonticon_gmdi =
    `
    <div class="pretty --icon --smooth">
        <input type="checkbox" />
        <div class="state --success">
            <i class="icon material-icons">done</i>
            <label>done</label>
        </div>
    </div>
    <div class="pretty --icon --smooth">
        <input type="checkbox" />
        <div class="state --danger-o">
            <i class="icon material-icons">clear</i>
            <label>clear</label>
        </div>
    </div>
    <div class="pretty --icon --toggle --plain">
        <input type="checkbox" />
        <div class="state --off">
            <i class="icon material-icons">favorite_border</i>
            <label>favorite_border</label>
        </div>
        <div class="state --on --info-o">
            <i class="icon material-icons">favorite</i>
            <label>favorite</label>
        </div>
    </div>
`;

/* SVG LIBRARIES */
c.checkbox_svg_uikit =
    `
    <div class="pretty --svg">
        <input type="checkbox" />
        <div class="state">
            <span class="svg" uk-icon="icon: check"></span>
            <label>check</label>
        </div>
    </div>

    <div class="pretty --svg --round --plain --jelly">
        <input type="checkbox" />
        <div class="state --success">
            <span class="svg" uk-icon="icon: check"></span>
            <label>check</label>
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

c.radio_basic =
`
    <div class="pretty --default --round">
        <input type="radio" name="radio1">
        <div class="state">
            <label>Male</label>
        </div>
    </div>
    <div class="pretty --default --round">
        <input type="radio" name="radio1">
        <div class="state">
            <label>Female</label>
        </div>
    </div>
    <div class="pretty --default --round">
        <input type="radio" name="radio1">
        <div class="state">
            <label>Special</label>
        </div>
    </div>
`;

c.radio_colors =
`
    <!-- primary -->
    <div class="pretty --default --curve">
        <input type="radio" name="color" />
        <div class="state --primary-o">
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty --default --curve">
        <input type="radio" name="color" />
        <div class="state --success-o">
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty --default --curve">
        <input type="radio" name="color" />
        <div class="state --info-o">
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty --default --curve">
        <input type="radio" name="color" />
        <div class="state --warning-o">
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty --default --curve">
        <input type="radio" name="color" />
        <div class="state --danger-o">
            <label>Danger</label>
        </div>
    </div>
`;

c.radio_icons =
`
    <!-- primary -->
    <div class="pretty --icon --round">
        <input type="radio" name="icon" />
        <div class="state --primary-o">
            <i class="icon mdi mdi-check"></i>
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty --icon --round">
        <input type="radio" name="icon" />
        <div class="state --success-o">
            <i class="icon mdi mdi-check"></i>
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty --icon --round">
        <input type="radio" name="icon" />
        <div class="state --info-o">
            <i class="icon mdi mdi-check"></i>
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty --icon --round">
        <input type="radio" name="icon" />
        <div class="state --warning-o">
            <i class="icon mdi mdi-check"></i>
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty --icon --round">
        <input type="radio" name="icon" />
        <div class="state --danger-o">
            <i class="icon mdi mdi-check"></i>
            <label>Danger</label>
        </div>
    </div>
`;

c.radio_icons_solid =
`
    <!-- primary -->
    <div class="pretty --icon --round">
        <input type="radio" name="icon_solid" />
        <div class="state --primary">
            <i class="icon mdi mdi-check"></i>
            <label>Primary</label>
        </div>
    </div>

    <!-- success -->
    <div class="pretty --icon --round">
        <input type="radio" name="icon_solid" />
        <div class="state --success">
            <i class="icon mdi mdi-check"></i>
            <label>Success</label>
        </div>
    </div>

    <!-- info -->
    <div class="pretty --icon --round">
        <input type="radio" name="icon_solid" />
        <div class="state --info">
            <i class="icon mdi mdi-check"></i>
            <label>Info</label>
        </div>
    </div>

    <!-- warning -->
    <div class="pretty --icon --round">
        <input type="radio" name="icon_solid" />
        <div class="state --warning">
            <i class="icon mdi mdi-check"></i>
            <label>Warning</label>
        </div>
    </div>

    <!-- danger -->
    <div class="pretty --icon --round">
        <input type="radio" name="icon_solid" />
        <div class="state --danger">
            <i class="icon mdi mdi-check"></i>
            <label>Danger</label>
        </div>
    </div>
`;

c.radio_plain =
`
    <div class="pretty --icon --round --plain">
        <input type="radio" name="plain">
        <div class="state --primary-o">
            <i class="icon mdi mdi-human"></i>
            <label>Single</label>
        </div>
    </div>
    <div class="pretty --icon --round --plain">
        <input type="radio" name="plain">
        <div class="state --info-o">
            <i class="icon mdi mdi-human-male-female"></i>
            <label>Married</label>
        </div>
    </div>
    <div class="pretty --icon --round --plain">
        <input type="radio" name="plain">
        <div class="state --success-o">
            <i class="icon mdi mdi-heart"></i>
            <label>In relationship</label>
        </div>
    </div>
`;
c.radio_animations =
`
    <div class="pretty --icon --plain --round --tada smooth">
        <input type="radio" name="radio66">
        <div class="state --primary-o">
            <i class="icon mdi mdi-weather-lightning"></i>
            <label>Lightning</label>
        </div>
    </div>
    <div class="pretty --icon --plain --round --rotate">
        <input type="radio" name="radio66">
        <div class="state --success-o">
            <i class="icon mdi mdi-weather-partlycloudy"></i>
            <label> Cloudy</label>
        </div>
    </div>
    <div class="pretty --icon --plain --round --smooth">
        <input type="radio" name="radio66">
        <div class="state --info-o">
            <i class="icon mdi mdi-weather-pouring"></i>
            <label> Raining</label>
        </div>
    </div>
    <div class="pretty --icon --plain --round --jelly">
        <input type="radio" name="radio66">
        <div class="state --warning-o">
            <i class="icon mdi mdi-weather-snowy"></i>
            <label> Snowy</label>
        </div>
    </div>
`;

/* SCALABILITY */
c.scalability =
`
    <div id="pretty-scale-test">
        <div class="pretty --default" id="pretty-scale-test">
            <input type="checkbox" />
            <div class="state">
                <label></label>
            </div>
        </div>

        <div class="pretty --icon --curve">
            <input type="checkbox" />
            <div class="state --danger">
                <i class="icon mdi mdi-close"></i>
                <label></label>
            </div>
        </div>

        <div class="pretty --round --fill --icon">
            <input type="checkbox" />
            <div class="state --info">
                <i class="icon mdi mdi-check"></i>
                <label></label>
            </div>
        </div>
    </div>
`;

/* BIGGER */
c.bigger =
`
    <div class="pretty --icon --jelly --round --bigger">
        <input type="checkbox" />
        <div class="state --info">
            <i class="icon material-icons">done</i>
            <label>done</label>
        </div>
    </div>
    <div class="pretty --default --smooth --bigger">
        <input type="checkbox" />
        <div class="state --danger">
            <label>clear</label>
        </div>
    </div>
`;
export default c;
