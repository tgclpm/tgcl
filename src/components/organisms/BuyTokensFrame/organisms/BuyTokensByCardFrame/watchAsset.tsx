import {Address} from 'wagmi';

export const watchAsset = async () => {
    const tokenAddress = process.env.NEXT_PUBLIC_AX_DAO as Address; //DAO Token contract address
    const tokenSymbol = 'SDMS';
    const tokenDecimals = 18;
    const tokenImage = 'https://shiftdao.io/favicon/favicon-180x180.png'; //Any url that has SDMS logo

    try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await window.ethereum?.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20', // Initially only supports ERC20, but eventually more!
                options: {
                    address: tokenAddress, // The address that the token is at.
                    symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                    decimals: tokenDecimals, // The number of decimals in the token
                    image: tokenImage, // A string url of the token logo
                },
            },
        });

        if (wasAdded) {
            // eslint-disable-next-line no-console
            console.info('Thanks for your interest!');
        } else {
            // eslint-disable-next-line no-console
            console.info('You did not add the token. Reload to try again');
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
};
