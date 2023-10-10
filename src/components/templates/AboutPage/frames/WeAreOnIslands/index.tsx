import NextImage from 'next/image';

import WrapperBgDesktop from './marshal.png';

import classes from './WeAreOnIslands.module.css';

import Container from 'src/components/atoms/Container';

import Spacer from 'src/components/atoms/Spacer';

import Typography from 'src/components/atoms/Typography';

export default function WeAreOnIslandsFrame() {
    return (
        <div className="relative">
            <Container>
                <div className="lg:items-initial flex h-full w-full flex-col items-stretch py-[78px] lg:flex-row lg:py-[120px]">
                    <div className="flex flex-row justify-center lg:mr-[160px] lg:w-[460px]">
                        <div>
                            <Typography
                                variant="h2"
                                className="relative z-10 pb-[40px] text-center !text-[32px] lg:!text-left lg:!text-[55px]"
                            >
                                <p>We are on</p>
                                <p>marshall</p>
                                <p>islands</p>
                            </Typography>
                            <div className="flex justify-center pb-[24px] lg:hidden">
                                <NextImage
                                    src={WrapperBgDesktop}
                                    alt=""
                                    width={255}
                                    height={279}
                                    className="object-cover"
                                />
                                <div className={classes.imageWrapperMobile} />
                            </div>
                            <Typography
                                variant="body1"
                                className="relative z-10 pb-[40px] text-center !text-white/80 lg:!text-left"
                            >
                                Marshall Islands is one of the most tokenization-friendly jurisdictions in the world,
                                having recognized DAOs as a formal structure for companies and having adopted a digital
                                asset as legal tender. We aim to be on the forefront of the nation’s vision to expand
                                DAO governance.
                            </Typography>
                        </div>
                    </div>
                    <div className="hidden h-full lg:block">
                        <NextImage src={WrapperBgDesktop} alt="" width={340} height={373} className="object-cover" />
                        <div className={classes.imageWrapper} />
                    </div>
                </div>
            </Container>
            <Spacer variant="v3" />
        </div>
    );
}
