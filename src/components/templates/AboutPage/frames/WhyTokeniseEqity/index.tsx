import NextImage from 'next/image';

import WrapperBgMobile from './cube-mobile.png';

import WrapperBgDesktop from './cube.png';

import classes from './WhyTokeniseEquity.module.css';

import Container from 'src/components/atoms/Container';

import Spacer from 'src/components/atoms/Spacer';

import Typography from 'src/components/atoms/Typography';

export default function WhyTokeniseEquityFrame() {
    return (
        <div className="relative">
            <Container>
                <div className="flex h-full w-full flex-row justify-center py-[78px] lg:justify-between lg:py-[120px]">
                    <div className="mr-[40px] hidden w-[317px] pt-[75px] lg:block lg:min-w-[460px]">
                        <NextImage
                            src={WrapperBgDesktop}
                            alt=""
                            width={317}
                            height={349}
                            className="h-[349px] w-[317px] object-cover"
                        />
                        <div className={classes.imageWrapper} />
                    </div>
                    <div className="z-10 flex flex-col justify-between lg:min-w-[465px]">
                        <div className="flex flex-col">
                            <Typography variant="h2" className="pb-[46px] text-center lg:!text-left">
                                <p>Why</p>
                                <p>tokenised</p>
                                <p>equity?</p>
                            </Typography>
                            <div className="mb-[24px] mr-[0px] flex w-full justify-center lg:!hidden">
                                <NextImage
                                    src={WrapperBgMobile}
                                    alt=""
                                    // width={237}
                                    // height={237}
                                    className="h-[237px] w-[343px] object-cover"
                                />
                                <div className={classes.imageWrapperSecond} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <Typography
                                variant="body1"
                                className="relative z-10 pb-[40px] text-center !text-white/80 lg:!text-left"
                            >
                                Investors have been made wary of web3 investments through token form as the value of the
                                freely floating digital assets are hard to control and turn into high-risk speculative
                                instruments quickly.
                            </Typography>
                            <Typography
                                variant="body1"
                                className="relative z-10 text-center !text-white/80 lg:!text-left"
                            >
                                By tokenizing equity, we are ensuring that the investment has intrinsic value that can
                                be well, defined by the project’s operational success while keeping the investment
                                liquid and freely tradeable between investors.
                            </Typography>
                        </div>
                    </div>
                </div>
            </Container>
            <Spacer variant="v3" />
        </div>
    );
}
