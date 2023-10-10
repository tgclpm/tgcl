import HeroFrame from './frames/HeroFrame';
import HowToBuyBusdFrame from './frames/HowToBuyBusdFrame';
import WhatIsMetamaskFrame from './frames/WhatIsMetamaskFrame';

const AboutPage = () => {
    return (
        <div>
            <HeroFrame />
            <WhatIsMetamaskFrame />
            <HowToBuyBusdFrame />
        </div>
    );
};

export default AboutPage;
