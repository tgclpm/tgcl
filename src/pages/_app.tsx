// import '../modules/wdyr/wdyr';
import '../styles/globals.css';

import {ConfigProvider} from 'antd';

import {AppProps} from 'next/app';

import Head from 'next/head';
import Script from 'next/script';

import Gtm from '../modules/gtm';
import AntdThemeConfig from '../styles/antd-theme';

import useReferral from 'src/hooks/useReferral';
import Cookies from 'src/modules/cookies';
import WagmiDinamicly from 'src/modules/wagmi';

function MainApp({Component, pageProps}: AppProps) {
    useReferral();
    return (
        <ConfigProvider theme={AntdThemeConfig}>
            <Head>
                <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,shrink-to-fit=no,viewport-fit=cover"
                />
            </Head>

            {process.env.NODE_ENV !== 'development' && (
                <>
                    <Cookies />
                    <Gtm />
                    <Script src="https://accounts.google.com/gsi/client" />
                </>
            )}
            <WagmiDinamicly>
                <Component {...pageProps} />
            </WagmiDinamicly>
        </ConfigProvider>
    );
}

export default MainApp;
