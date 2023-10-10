import NextImage from 'next/image';

import kepler from './kepler.svg';
import classes from './KeplerHero.module.css';

import Container from 'src/components/atoms/Container';

import LargeButton from 'src/components/atoms/LargeButton/LargeButton';
import Typography from 'src/components/atoms/Typography';

export default function KeplerHeroFrame() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.radial_purple} />
            <div className={classes.radial_blue} />
            <Container>
                <Typography variant="h1" className="mb-[64px] lg:mb-[60px] lg:text-start">
                    kepler project
                </Typography>

                <div className="mb-[64px] grid space-y-[64px] lg:mb-[40px] lg:grid-cols-6 lg:gap-10 lg:space-y-0">
                    <div className="flex items-start justify-center lg:col-span-2">
                        <NextImage src={kepler} alt="my seven" className="" width={293} height={0} />
                    </div>

                    <div className="flex flex-col space-y-[24px] lg:col-span-4 lg:space-y-[20px]">
                        <Typography variant="h4" className="lg:text-start">
                            General Information
                        </Typography>
                        <Typography variant="body1" className="lg:text-start">
                            Project Kepler is an Immersive Social Network where Web 2&3 creators host and create their
                            own hyper-realistic 3D venues (AI-built). Each venue can host up to 15k mobile / web users
                            simultaneously with spatial audio, and all creators gain access to Kepler&apos;s multiple
                            revenue stream structures to monetize their digital venues. The Kepler team is currently
                            building simplified SDKs for quick and easy set-up of such digital venues and aims to
                            provide companies, influencers, users and even projects the capability to set up their own
                            virtual audiences.
                        </Typography>
                    </div>
                </div>

                <LargeButton disabled className="!w-full">
                    SALE START IS TO BE ANNOUNCED
                </LargeButton>
            </Container>
        </div>
    );
}
