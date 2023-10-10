const presets = [
    [
        'next/babel',
        {
            'preset-react': {
                runtime: 'automatic',
            },
        },
    ],
];

const plugins = [
    [
        'import',
        {
            libraryName: 'antd',
            style: true,
        },
        'antd',
    ],
];

module.exports = {presets, plugins};
