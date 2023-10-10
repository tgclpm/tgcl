import AboutProject from './frames/AboutProject';
import AboutSaleFrame from './frames/AboutSaleFrame';
import FAQFrame from './frames/FAQFrame';
import NisaiHeroFrame from './frames/NisaiHeroFrame';
import PartnersFrame from './frames/PartnersFrame';
import ROIFrame from './frames/ROIFrame';
import ScreenshotsFrame from './frames/ScreenshotsFrame';

const NisaiProjectPage = () => {
    return (
        <>
            <NisaiHeroFrame />
            <AboutSaleFrame />
            <ROIFrame />
            <AboutProject />
            <ScreenshotsFrame />
            <PartnersFrame />
            <FAQFrame />
        </>
    );
};

export default NisaiProjectPage;
