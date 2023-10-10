import Script from 'next/script';

function Gtm() {
    return (
        <div className="container">
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-Y5X71XTG9Z" strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', 'G-Y5X71XTG9Z');
                `}
            </Script>
        </div>
    );
}

export default Gtm;
