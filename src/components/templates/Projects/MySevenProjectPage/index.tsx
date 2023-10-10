import AboutProject from './frames/AboutProject';
import AboutSaleFrame from './frames/AboutSaleFrame';
import FAQFrame from './frames/FAQFrame';

import GreetingsFrame from './frames/GreetingsFrame';
import MySevenHeroFrame from './frames/MySevenHeroFrame';

import PartnersFrame from './frames/PartnersFrame';
import ROIFrame from './frames/ROIFrame';
import ScreenshotsFrame from './frames/ScreenshotsFrame';
import StagesFrame from './frames/StagesFrame/indes';
import VideoFrame from './frames/VideoFrame';

import {ContractProvider} from 'src/components/context/ContractProvider';
import WinIphoneDialog from 'src/components/dialogs/WinIphoneDialog';
import BuyTokensFrame from 'src/components/organisms/BuyTokensFrame';

const MySevenProjectPage = () => {
    return (
        <>
            <MySevenHeroFrame />
            <VideoFrame />
            <ContractProvider>
                <AboutSaleFrame />
                <StagesFrame />
            </ContractProvider>
            <ROIFrame />
            <AboutProject />
            <ScreenshotsFrame />
            <PartnersFrame />
            <FAQFrame />
            <GreetingsFrame />
            <ContractProvider>
                <BuyTokensFrame />
            </ContractProvider>
            <WinIphoneDialog />
        </>
    );
};

export default MySevenProjectPage;
