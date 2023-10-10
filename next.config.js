const {withSentryConfig} = require('@sentry/nextjs');

const bundleAnalyzer = require('@next/bundle-analyzer');

const withBundleAnalyzer = bundleAnalyzer({
    // Запускается при выполнении команды "pnpm analyse:bundle" - См. https://www.npmjs.com/package/@next/bundle-analyzer
    enabled: process.env.ANALYZE_BUNDLE === 'true',
});

const packageJson = require('./package');

let basePath = process.env.NEXT_PUBLIC_BASE_PATH;
if (basePath === '/' || basePath === '') basePath = undefined;

const date = new Date();
const GIT_COMMIT_SHA_SHORT =
    typeof process.env.GIT_COMMIT_SHA === 'string' && process.env.GIT_COMMIT_SHA.substring(0, 8);

console.debug(
    '\n',
    `Building Next with NODE_ENV="${process.env.NODE_ENV}" NEXT_PUBLIC_APP_STAGE="${process.env.NEXT_PUBLIC_APP_STAGE}" using GIT_COMMIT_SHA=${process.env.GIT_COMMIT_SHA} and GIT_COMMIT_REF=${process.env.GIT_COMMIT_REF}`,
);

const GIT_COMMIT_TAGS = process.env.GIT_COMMIT_TAGS ? process.env.GIT_COMMIT_TAGS.trim() : '';

// Выполняем итерацию по всем тегам и извлекаем последний совпадающий с "v*"
const APP_RELEASE_TAG = GIT_COMMIT_TAGS ? GIT_COMMIT_TAGS.split(' ').slice(-1) : `unknown-${GIT_COMMIT_SHA_SHORT}`;
console.debug(
    '\n',
    `Release version resolved from tags: "${APP_RELEASE_TAG}" (matching last tag starting with "v")`,
    '\n',
);

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    basePath: basePath,
    env: {
        NEXT_PUBLIC_APP_BUILD_TIME: date.toString(),
        NEXT_PUBLIC_APP_BUILD_TIMESTAMP: +date,
        NEXT_PUBLIC_APP_NAME: packageJson.name,
        NEXT_PUBLIC_APP_VERSION_RELEASE: `${APP_RELEASE_TAG}`,
        NEXT_PUBLIC_APP_NAME_VERSION: `${packageJson.name}-${APP_RELEASE_TAG}`,
    },
    images: {
        domains: [
            'source.unsplash.com',
            'nft-platform.s3.eu-central-1-bug-moderate-2.amazonaws.com',
            'nft-platform.s3.eu-central-1.amazonaws.com',
            'nft-platform.s3.eu-central-2.amazonaws.com',
            'software-testing.ru',
            'zos.alipayobjects.com',
            'gw.alipayobjects.com',
            'cdn.builder.io',
            'via.placeholder.com',
            'placehold.co',
        ],
    },
    sentry: {
        hideSourceMaps: true,
    },
    async headers() {
        return [
            {
                source: '/fonts/:font*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
    async redirects() {
        return [
            {
                source: '/stats',
                destination: '/stats/nft',
                permanent: false,
            },
            {
                source: '/files/one_pager.pdf',
                destination: 'https://myseven.io',
                permanent: true,
            },
            {
                source: '/projects/my-seven',
                destination: 'https://myseven.io',
                permanent: true,
            },
        ];
    },
    webpack: (config, {buildId}) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
        };

        config.plugins.map((plugin, i) => {
            if (plugin.__proto__.constructor.name === 'DefinePlugin') {
                plugin.definitions['process.env.NEXT_PUBLIC_APP_BUILD_ID'] = JSON.stringify(buildId);
            }
        });

        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        svgoConfig: {
                            plugins: [
                                // {
                                //     name: 'removeViewBox',
                                // },
                                {
                                    name: 'removeAttrs',
                                    params: {
                                        attrs: '(fill|stroke)',
                                    },
                                },
                            ],
                        },
                    },
                },
                'url-loader',
            ],
        });

        return config;
    },
};

const analyzer = withBundleAnalyzer(nextConfig);

module.exports = withSentryConfig(analyzer, {
    silent: true,

    debug: process.env.NODE_ENV === 'development' && false,
    ignore: ['node_modules'],
    include: '.next',
    authToken: process.env.SENTRY_AUTH_TOKEN,
});
