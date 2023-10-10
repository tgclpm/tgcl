import {useMemo} from 'react';

import classes from './HeroFrame.module.css';

import Container from 'src/components/atoms/Container';
import Spacer from 'src/components/atoms/Spacer';

import Typography from 'src/components/atoms/Typography';

import useMobile from 'src/hooks/useMobile';

export default function HeroFrame() {
    const mobile = useMobile();
    const circleClass = useMemo(() => (mobile ? classes.circleMobile : classes.circle), [mobile]);
    const textClass = useMemo(() => (mobile ? classes.rightHeroTextMobile : classes.rightHeroText), [mobile]);

    return (
        <div className={classes.wrapper}>
            <div className="mt-[120px] flex h-full w-full flex-col items-center">
                <Container>
                    <div className="flex h-full flex-col">
                        <div className="flex flex-col items-center justify-between lg:flex-row">
                            <div className="items-left max-w-[460px]">
                                <Typography variant="h1" className="pb-[40px] text-center lg:!text-left">
                                    about us
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className="relative z-10 mt-[456px] text-center !text-white/80 lg:mt-0 lg:!text-left"
                                >
                                    <p className="mb-[40px]">We are Shift DAO.</p>

                                    <p>
                                        A team of passionate investors and builders united to identify revolutionary
                                        concepts and projects for early investments. We at Shift DAO are constantly
                                        identifying, promoting and incubating projects and companies with cutting-edge
                                        innovative technologies!
                                    </p>
                                </Typography>
                            </div>
                            <div className={circleClass}>
                                <div className={textClass}>
                                    <Typography
                                        variant="h1"
                                        className="text-center !text-[98.5479px] !leading-[88%] lg:!text-left"
                                    >
                                        <p>shift</p>
                                        <p>dao</p>
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className="my-[78px] flex flex-col justify-between lg:my-[120px] lg:flex-row">
                            <div className="items-left hidden lg:mr-[40px] lg:block lg:min-w-[460px]">
                                <Typography variant="h1" className="pb-[40px] !text-left !text-[55px]">
                                    <p>WHY & what</p>
                                    <p>do we shift?</p>
                                </Typography>
                            </div>
                            <div className="items-left relative lg:hidden">
                                <Typography variant="h1" className="pb-[40px] !text-center !text-[32px]">
                                    <p>Who we are</p>
                                    <p>& what do</p>
                                    <p>we shift?</p>
                                </Typography>
                            </div>
                            <div className="z-10">
                                <Typography variant="body1" className="z-10 text-center lg:!text-left">
                                    Our vision is to get public investors in at the ground floor for industry
                                    paradigm-shifting projects run by qualified and experienced teams. Together, we will
                                    play an integral role in helping shape the future!
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Container>
                <Spacer variant="v3" />
            </div>
        </div>
    );
}
