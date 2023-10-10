import NextImage from 'next/image';

import mySeven from './MySeven.svg';

import classes from './MySevenHero.module.css';

import Container from 'src/components/atoms/Container';

import LargeButton from 'src/components/atoms/LargeButton/LargeButton';

import Typography from 'src/components/atoms/Typography';
import useScrollToElement from 'src/hooks/useScrollToElement';

export default function MySevenHeroFrame() {
    const scroll = useScrollToElement('#buy-tokens');
    return (
        <div className={classes.wrapper}>
            <div className={classes.radial_purple} />
            <div className={classes.radial_blue} />
            <Container>
                <Typography variant="h1" className="lg:mb-[60px] lg:text-start">
                    MY SEVEN Project
                </Typography>

                <div className="grid lg:grid-cols-6 lg:gap-10">
                    <div className="flex items-center justify-center lg:col-span-2">
                        <NextImage src={mySeven} alt="my seven" className="" width={293} height={0} />
                    </div>

                    <div className="flex flex-col space-y-[24px] lg:col-span-4 lg:space-y-[20px]">
                        <Typography variant="h4" className="lg:text-start">
                            General Information
                        </Typography>
                        <Typography variant="body1" className="lg:text-start">
                            MY SEVEN project is poised to revolutionize how influencers and digital content creators
                            interact with their fanbases. With exciting monetization channels and interactive
                            collaborations between users, the platform will create a new value chain within a booming
                            industry!
                            <br /> <br />
                            The project is designed to scale over time giving early investors a massive upside potential
                            as more users and influencers are onboarded onto the ecosystem.
                        </Typography>
                    </div>
                </div>
                <Typography variant="body1" className="lg:text-start">
                    <br />
                    In an effort to promote decentralization and equitable participation, Shift DAO is offering indirect
                    investments into the project&apos;s equity at an early stage to make the development and growth
                    project inclusive for the masses.
                </Typography>

                <div className="mt-[64px] grid lg:mt-[40px] lg:grid-cols-2 lg:gap-10">
                    <LargeButton disabled color="gray">
                        VOTING
                    </LargeButton>
                    <LargeButton onClick={scroll} className="order-first mb-4 lg:order-last lg:mb-0">
                        BUY SDMS TOKENS
                    </LargeButton>
                </div>
            </Container>
        </div>
    );
}
