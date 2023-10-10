import Container from 'src/components/atoms/Container';

import Typography from 'src/components/atoms/Typography';
import Accordion from 'src/components/organisms/Accordion';

const items = [
    {
        title: 'What is Project Kepler building?',
        description:
            'The Kepler team is building an immersive alternative media platform, allowing communities to participate in true experiences for the first time, powered with metaverse technologies.',
    },
    {
        title: 'What is Project Kepler solving and bringing to the blockchain?',
        description:
            "Communities have no place to meet and enjoy their favorite content together. Traditional brand loyalty and engagement seen in physical settings are hence left unexplored in the booming web 3 world. We're hence building an Immersive Social Network App where communities can seamlessly take part in hyper-realistic experiences in their favorite creator-built venues.",
    },
    {
        title: 'How do you benefit existing communities?',
        description:
            "We're a platform where anyone can easily access 10,000 frequently updated digital venues with different communities from their phone, and enjoy real, interactive entertainment on private metaverse instances!",
    },
    {
        title: 'How does your platform benefit creators?',
        description:
            'We give creators the AI tools to build venues quickly and cheaply, and giving them access to multiple fair monetization streams to create functional micro-economies within the ecosystem.',
    },
    {
        title: 'How and why will this project stand out from all the others?',
        description:
            "We're prioritizing seamless access, platform with a very intuitive UI & UX and maximized value to creators and communities.",
    },
    {
        title: 'What do investors get and why should they invest?',
        description:
            'They get equity in a company with three stable and steadily growing revenue streams, that will expand in  profitability months after the Mobile App release. We are enabling early investors to buy into the equity of the company to participate and earn from the growth of the company right from the early days.',
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
