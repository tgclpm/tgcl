const plugin = require('tailwindcss/plugin');

module.exports = {
    mode: 'jit',
    content: ['./public/**/*.{html,htm}', './src/**/*.{ts,tsx}'],
    important: false, // С этим флагом ломается сборка!!!
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                md: '2rem',
            },
            screens: {
                md: '1024px',
            },
        },
        fontFamily: {
            primary: ['var(--font-primary)'],
            secondary: ['var(--font-secondary)'],
        },
        aspectRatio: {
            1: '1',
            2: '2',
            3: '3',
            9: '9',
            16: '16',
            205: '205',
            334: '334',
        },
        colors: {
            transparent: 'transparent',
            black: '#E9ECF0',
            white: '#FFFFFF',
            bgblack: '#010608',
            light: '#B4CDFF',
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
        plugin(({addUtilities}) => {
            addUtilities({
                '.bg-radial': {
                    background:
                        'radial-gradient(44.37% 44.37% at 50% 50%, rgba(7, 4, 3, 0.3) 0%, rgba(7, 4, 3, 0) 100%);',
                },
                '.bg-purple': {
                    background: 'linear-gradient(0deg, #150420 0.04%, #2D0042 100.04%);',
                },
                '.scroll-hidden': {
                    'scrollbar-width': 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                        width: 0,
                        background: 'transparent',
                    },
                },
                '.z-negative': {
                    zIndex: -1,
                },
                '.fill-transparent': {
                    '& svg': {
                        fill: 'transparent !important',
                        stroke: 'currentColor !important',
                    },
                },
                '.stroke-transparent': {
                    '& svg': {
                        fill: 'currentColor !important',
                        stroke: 'transparent !important',
                    },
                },
                '.color-inherit': {
                    color: 'inherit',
                },
                '.corner-notch': {
                    clipPath: 'url(#cornerNotch)',
                },
                '.corner-notch-right': {
                    clipPath: 'url(#cornerNotchRight)',
                },
                '.full-height': {
                    minHeight: '100vh',
                    '@media (min-width: 1024px)': {
                        minHeight: 'calc(100vh - var(--header-height))',
                    },
                },
                '.container-free': {
                    width: 0,
                    '@media (min-width: 640px)': {
                        width: 'calc((100vw - 640px) / 2)',
                    },
                    '@media (min-width: 768px)': {
                        width: 'calc((100vw - 964px) / 2)',
                    },
                    '@media (min-width: 1272px)': {
                        width: 'calc((100vw - 1272px) / 2)',
                    },
                    '@media (min-width: 1536px)': {
                        width: 'calc((100vw - 1272px) / 2)',
                    },
                },
            });
        }),
    ],
    corePlugins: {
        aspectRatio: false,
    },
};
