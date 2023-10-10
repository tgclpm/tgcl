import Container from 'src/components/atoms/Container';

import Typography from 'src/components/atoms/Typography';
import Accordion from 'src/components/organisms/Accordion';

const items = [
    {
        title: 'What is NISAI building?',
        description:
            'NISAI is building a asset tokenization platform for improved funding and investment structures in the heavy CAPEX medical asset industry. Asset operators will be able to run campaigns to fund their new asset acquisitions through retail investors, sharing the profits generated with a large distributed userbase. The platform will also host key data (operational and otherwise) of the deployed assets on the blockchain to ensure accountability and transparency between asset operators and investors. ',
    },
    {
        title: 'What is NISAI solving with blockchain?',
        description:
            'The project is solving major obstacles that the industry is facing in emerging economies: \n1. The lack of an easy channel for financing medical assets in emerging economies. \n2. The lack of easy access and opportunities for investors to enter the highly promising medical infrastructure space in emerging economies. \n3. The lack of a clearly defined structure for operators and investors to share information required to make investments less opaque.',
    },
    {
        title: 'What is NISAI’s value proposition?',
        description:
            'NISAI’s main value proposition is to offer experienced asset operators in the medical infrastructure industry the ability to expand their assets through distributed financing with retail investors. This allows operators in booming developing economies to bridge the gap between rising demand and insufficient supply while enabling the mass public to have ownership in the very medical assets that they will utilize. For investors, the platform offers them a channel for investing in assets that have both social infrastructural value and significant upside potential given the high IRR nature of such assets.',
    },
    {
        title: 'What do investors get and why should they invest?',
        description:
            'In the first round of placement, Investors are gaining the opportunity to invest into the equity of the platform itself, which is directly linked to the number of asset launches done through the NISAI ecosystem. The DAO investment tokens are also partially backed by the first set of new diagnostic labs deployed with the help of the ECMP team.',
    },
];

export default function FAQFrame() {
    return (
        <>
            <Container>
                <Typography variant="h2" className="mb-12 lg:mb-[60px] lg:text-start">
                    F.A.Q
                </Typography>

                <Accordion items={items} className="pb-[80px] lg:pb-[120px]" />
            </Container>
        </>
    );
}
