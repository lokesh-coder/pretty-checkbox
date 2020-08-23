module.exports = {
    title: 'Pretty Checkbox',
    tagline: 'A pure css library to beautify checkbox and radio buttons.',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'atomicpages', // Usually your GitHub org/user name.
    projectName: 'pretty-checkbox', // Usually your repo name.
    stylesheets: [
        'https://unpkg.com/@djthoms/pretty-checkbox@3.0.4/dist/pretty-checkbox.min.css',
        'https://cdn.materialdesignicons.com/5.5.55/css/materialdesignicons.min.css',
    ],
    themes: ['@docusaurus/theme-live-codeblock'],
    plugins: ['docusaurus-plugin-sass'],
    themeConfig: {
        // switchConfig: {
        //     darkIcon: '🌙',
        //     darkIconStyle: {
        //         marginLeft: '2px',
        //     },
        //     lightIcon: '\u2600',
        //     lightIconStyle: {
        //         marginLeft: '1px',
        //     },
        // },
        prism: {
            theme: require('prism-react-renderer/themes/github'),
            darkTheme: require('prism-react-renderer/themes/palenight'),
        },
        navbar: {
            title: 'Pretty Checkbox',
            logo: {
                alt: 'Pretty Checkbox Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                {
                    href: 'https://github.com/atomicpages/pretty-checkbox',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Getting Started',
                            to: 'docs/',
                        },
                        {
                            label: 'Basic Concepts',
                            to: 'docs/basic-concepts/intro/',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/atomicpages/pretty-checkbox',
                        },
                        {
                            label: 'Inspired by the original pretty checkbox',
                            href: 'https://lokesh-coder.github.io/pretty-checkbox/',
                        },
                    ],
                },
            ],
            copyright: `Made with \u2665 by Dennis Thompson \uFF5C &copy; ${new Date().getFullYear()} \uFF5C Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    homePageId: 'getting-started',
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/atomicpages/pretty-checkbox/edit/master/docs/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.scss'),
                },
            },
        ],
    ],
};
