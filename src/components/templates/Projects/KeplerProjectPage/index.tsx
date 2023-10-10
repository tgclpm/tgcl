import AboutProject from './frames/AboutProject';
import AboutSaleFrame from './frames/AboutSaleFrame';
import FAQFrame from './frames/FAQFrame';
import KeplerHeroFrame from './frames/KeplerHeroFrame/indes';
import PartnersFrame from './frames/PartnersFrame';
import ROIFrame from './frames/ROIFrame';
import ScreenshotsFrame from './frames/ScreenshotsFrame';
import VideoFrame from './frames/VideoFrame';

const NisaiProjectPage = () => {
    return (
        <>
            <KeplerHeroFrame />
            <VideoFrame />
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
