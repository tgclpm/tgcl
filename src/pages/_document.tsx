import {Head, Html, Main, NextScript} from 'next/document';

export default function Document() {
    return (
        <Html dir="ltr">
            <Head>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/favicon-32x32.png`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/favicon-16x16.png`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="64x64"
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/favicon-64x64.png`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="128x128"
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/favicon-128x128.png`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="152x152"
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/favicon-152x152.png`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="167x167"
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/favicon-167x167.png`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="180x180"
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/favicon-180x180.png`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/favicon-192x192.png`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="196x196"
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/favicon-196x196.png`}
                />
                <link rel="manifest" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/site.webmanifest`} />
                <link
                    rel="mask-icon"
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/safari-pinned-tab.svg`}
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#000000" />
                <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/favicon.ico`} sizes="any" />
                <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/icon.svg`} type="image/svg+xml" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/apple-touch-icon.png`}
                />
                <link rel="manifest" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/manifest.webmanifest`} />

                <link
                    rel="stylesheet"
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/fonts/fonts.css?v=${process.env.NEXT_PUBLIC_APP_BUILD_ID}`}
                    crossOrigin="anonymous"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
