import Link from 'next/link';

import Container from 'src/components/atoms/Container';

import Typography from 'src/components/atoms/Typography';
import Accordion from 'src/components/organisms/Accordion';

const items = [
    {
        title: 'What is the MYSEVEN building?',
        description:
            'MySeven is building a white-label social media engagement platform that will bridge the gap between web2 digital content creators and web3 economies. The platform will enable fanbases and users to interact, collaborate, and get involved with their favorite influencers and celebrities while monetizing their time!',
    },
    {
        title: 'What is MySeven solving with blockchain?',
        description:
            'The project is solving few of many critical points that the industry is facing: \n1. The lack of an equitable social media platform with real interactions between users and creators. \n2. The lack of proper time/activity monetization structures for web3 participants. \n3. The lack of an easy channel for influencers to create decentralized and distributed content.',
    },
    {
        title: 'What makes the MySeven project unique?',
        description:
            'MySeven is a very unique platform, the first of its kind, with real and genuine social interactive media that the space deserves. The platform is set to be a pioneer and revolutionize the blockchain and the social media experience forever. There is nothing quite like MySeven.',
    },
    {
        title: 'What do investors get and why should they invest?',
        description:
            'Investors get the opportunity to invest into a pioneering project, with highly promising profitability forecasts. The investors gain access to early-stage investments without the cumbersome regulatory processes otherwise handled by big venture capital institutions. The investors will also participate in group governance and collective decision-making for their investments!',
    },
    {
        title: 'What does investing in tokenized equity imply?',
        description:
            'Investing in tokenized equity gives the investor the underlying capital gains on the equity instruments without taking actual ownership of the regulated asset. By tokenizing equity, investors are also able to have their early-stage investments liquid from very first day rather than waiting for an IPO or a subsequent buyout.',
    },
    {
        title: 'Is the DAO token linked to the MySeven platform token?',
        description:
            'The SDMS token operates independently from the MySeven platform token. \n1. The SDMS token is primarily used as an investment vehicle and for voting on communal investment decisions. \n2. The MySeven platform token is more of a utility and reward token that is generated through in-app interactions and is linked to ecosystem activity, unlike the SDMS token that has a stable supply and traditional intrinsic value.',
    },
    {
        title: 'Where can I see the destination of a campaign’s raised funds?',
        description: (
            <>
                Transaction is to taken directly to the SHIFT DAO multisig cold wallet for further distribution to the
                project and approved middle-parties. Its address is the only one{' '}
                <Link
                    href="https://bscscan.com/tokenholdings?a=0xaE4Ac62F90FC986CC574898Cfa7d1c0de81E198B"
                    target="_blank"
                    className="break-all text-white underline"
                >
                    (0xaE4Ac62F90FC986CC574898Cfa7d1c0de81E198B)
                </Link>{' '}
                and is hardcoded into a smart contract.
            </>
        ),
    },
    {
        title: 'How do I add the purchased SDMS token to my wallet?',
        description: (
            <>
                We have created a video explaining how to add your tokens to Metamask{' '}
                <Link href="/instructions" className="break-all text-white underline">
                    here
                </Link>
                .
            </>
        ),
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
