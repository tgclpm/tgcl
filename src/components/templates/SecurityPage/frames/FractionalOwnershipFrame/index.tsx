import NextImage from 'next/image';

import WrapperBgDesktop from './cube.png';

import classes from './FractionalOwnership.module.css';

import Container from 'src/components/atoms/Container';

import Spacer from 'src/components/atoms/Spacer';

import Typography from 'src/components/atoms/Typography';

export default function FractionalOwnershipFrame() {
    return (
        <div className="relative">
            <Container>
                <div className="flex h-full w-full flex-col justify-between py-[57px] lg:flex-row lg:py-[120px]">
                    <div className="relative mr-[40px] hidden w-[317px] lg:block lg:min-w-[460px]">
                        <NextImage
                            src={WrapperBgDesktop}
                            alt=""
                            width={317}
                            height={349}
                            className="relative z-10 h-[349px] w-[317px] object-cover"
                        />
                        <div className={classes.imageWrapper} />
                    </div>
                    <div className="">
                        <Typography
                            variant="h1"
                            className="relative z-10 pb-[40px] !text-center !text-[32px] lg:!text-left lg:!text-[55px]"
                        >
                            <p>Fractional</p>
                            <p>ownership</p>
                        </Typography>
                        <div className="relative mx-auto mb-[24px] flex w-full justify-center lg:hidden">
                            <div className="z-[10] flex justify-center lg:hidden">
                                <NextImage
                                    src={WrapperBgDesktop}
                                    alt=""
                                    width={190}
                                    height={190}
                                    className="h-[242px] w-[220px] object-cover"
                                />
                            </div>
                            <div className={classes.imageWrapperMobile} />
                        </div>
                        <Typography
                            variant="body1"
                            className="relative z-10 text-center !text-white/80 lg:pb-[40px] lg:!text-left"
                        >
                            Tokenized equity can also enable fractional ownership, meaning that a single token can
                            represent a fraction of a share. This can allow for more inclusive and accessible investment
                            opportunities, as well as providing investors with the ability to diversify their holdings.
                        </Typography>
                    </div>
                </div>
            </Container>
            <Spacer variant="v3" />
        </div>
    );
}
