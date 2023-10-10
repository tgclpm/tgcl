import OurMainBenefitsFrame from './frames/OurMainBenefitsFrame';

import WelcomeFrame from './frames/WelcomeFrame';

import BuyTokensByCryptoFrame from '../../../components/organisms/BuyTokensFrame/organisms/BuyTokensByCryptoFrame';


const MainPage = () => {
    const onBackHandle = () => {
        console.log("Welcome");
    };
    return (
        <div
            style={{
                background: '#010608',
            }}
        >
            <WelcomeFrame />
            <BuyTokensByCryptoFrame onBack={onBackHandle} />
            <OurMainBenefitsFrame />
        </div>
    );
};

export default MainPage;
