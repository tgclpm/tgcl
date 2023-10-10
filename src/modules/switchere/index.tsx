import Script from 'next/script';

function Switchere() {
    // eslint-disable-next-line no-console
    console.debug('Switchere stage —', process.env.NEXT_PUBLIC_SWITCHERE_STAGE);

    return (
        <div className="container">
            {process.env.NEXT_PUBLIC_SWITCHERE_STAGE === 'development' ? (
                <>
                    <Script src="https://sandbox.switchere.com/js/sdk-builder.js" strategy="afterInteractive" />
                    <Script
                        id="sid"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.switchereSdk.debug = true;
                            `,
                        }}
                    />
                </>
            ) : (
                <Script src="https://switchere.com/js/sdk-builder.js" strategy="afterInteractive" />
            )}
        </div>
    );
}

export default Switchere;
