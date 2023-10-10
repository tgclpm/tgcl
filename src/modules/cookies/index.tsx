import Script from 'next/script';

function Cookies() {
    return (
        <div className="container">
            <Script
                id="cookieyes"
                src="https://cdn-cookieyes.com/client_data/2ed7e8f49e62f5e3d427aec1/script.js"
                type="text/javascript"
            />
        </div>
    );
}

export default Cookies;
