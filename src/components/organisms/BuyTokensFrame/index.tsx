import {useState} from 'react';

import BuyTokensByCardFrame from './organisms/BuyTokensByCardFrame';

import BuyTokensByCryptoFrame from './organisms/BuyTokensByCryptoFrame';
import BuyTokensChoosePayMethodFrame from './organisms/BuyTokensChoosePayMethodFrame';

const BuyTokensFrame = () => {
    const [payMethod, setPayMethod] = useState<'card' | 'crypto' | false>(false);

    const choosePayMethodHandle = (method: 'card' | 'crypto') => {
        setPayMethod(method);
    };

    const onBackHandle = () => {
        setPayMethod(false);
    };

    return (
        <>
            {!payMethod && <BuyTokensChoosePayMethodFrame onChoose={choosePayMethodHandle} />}
            {payMethod === 'crypto' && <BuyTokensByCryptoFrame onBack={onBackHandle} />}
            {payMethod === 'card' && <BuyTokensByCardFrame onBack={onBackHandle} />}
        </>
    );
};

export default BuyTokensFrame;
