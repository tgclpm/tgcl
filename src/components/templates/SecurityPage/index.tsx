import CustomizabilityFrame from './frames/CustomizabilityFrame';
import DecentralizationFrame from './frames/DecentralizationFrame';
import FractionalOwnershipFrame from './frames/FractionalOwnershipFrame';
import HeroFrame from './frames/HeroFrame';
import LiquidityFrame from './frames/LiquidityFrame';
import NoteFrame from './frames/NoteFrame';
import TransparencyFrame from './frames/TransparencyFrame';

const AboutPage = () => {
    return (
        <div>
            <HeroFrame />
            <DecentralizationFrame />
            <TransparencyFrame />
            <CustomizabilityFrame />
            <LiquidityFrame />
            <FractionalOwnershipFrame />
            <NoteFrame />
        </div>
    );
};

export default AboutPage;
