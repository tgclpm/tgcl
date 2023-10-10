import NextImage from 'next/image';

import WrapperBgDesktop from './2.png';

import classes from './Customizability.module.css';

import Container from 'src/components/atoms/Container';

import Spacer from 'src/components/atoms/Spacer';

import Typography from 'src/components/atoms/Typography';

export default function CustomizabilityFrame() {
    return (
        <div style={{}}>
            <Container>
                <div className="flex h-full w-full flex-col justify-between py-[57px] lg:flex-row lg:py-[120px]">
                    <div className="relative mr-[183px] hidden w-full min-w-[285px] lg:block">
                        <NextImage
                            src={WrapperBgDesktop}
                            alt=""
                            width={285}
                            height={285}
                            className="relative z-10 object-cover"
                        />
                        <div className={classes.imageWrapper} />
                    </div>
                    <div className="lg:w-[460px]">
                        <Typography
                            variant="h1"
                            className="relative z-10 pb-[40px] !text-center !text-[32px] lg:!text-left lg:!text-[55px]"
                        >
                            Customizability
                        </Typography>
                        <div className="relative mx-auto mb-[24px] flex w-full justify-center lg:hidden">
                            <div className="z-[10] flex h-[190px] w-[190px] justify-center lg:hidden">
                                <NextImage
                                    src={WrapperBgDesktop}
                                    alt=""
                                    width={190}
                                    height={190}
                                    className="object-cover"
                                />
                            </div>
                            <div className={classes.imageWrapperMobile} />
                        </div>
                        <Typography
                            variant="body1"
                            className="relative z-10 text-center !text-white/80 lg:pb-[40px] lg:!text-left"
                        >
                            A DAO can be highly customizable, with the code that runs it written to reflect the specific
                            needs and goals of the organization. This can make it possible to design a DAO in a way that
                            aligns with the goals and preferences of the investors.
                        </Typography>
                    </div>
                </div>
            </Container>
            <Spacer variant="v3" />
        </div>
    );
}
