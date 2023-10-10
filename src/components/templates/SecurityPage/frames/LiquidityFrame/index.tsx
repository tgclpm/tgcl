import NextImage from 'next/image';

import WrapperBgDesktop from './1.png';

import classes from './Liquidity.module.css';

import Container from 'src/components/atoms/Container';

import Spacer from 'src/components/atoms/Spacer';

import Typography from 'src/components/atoms/Typography';

export default function LiquidityFrame() {
    return (
        <div className="relative">
            <Container>
                <div className="my-[57px] flex h-full w-full flex-col lg:my-[120px] lg:flex-row">
                    <div className="flex flex-col justify-center lg:mr-[160px] lg:w-[465px]">
                        <Typography variant="h1" className="mb-[40px] text-center lg:!text-left">
                            <p>Liquidity</p>
                        </Typography>
                        <div className="flex justify-center pb-[24px] lg:hidden">
                            <NextImage
                                src={WrapperBgDesktop}
                                alt=""
                                width={210}
                                height={237}
                                className="relative z-10 h-[237px] w-[210px] max-w-fit object-cover"
                            />
                            <div className={classes.imageWrapperMobile} />
                        </div>
                        <div>
                            <Typography
                                variant="body1"
                                className="relative z-10 !text-center !text-white/80 lg:!text-left"
                            >
                                Tokenized equity can provide investors with liquidity, as the tokens can be traded on
                                digital asset exchanges. This can make it easier for investors to sell their shares if
                                they need to, reducing the risk of being stuck in an illiquid investment.
                            </Typography>
                        </div>
                    </div>
                    <div className="relative z-10 hidden h-[339px] w-[368px] lg:block">
                        <NextImage
                            src={WrapperBgDesktop}
                            alt=""
                            width={339}
                            height={368}
                            className="max-w-fit object-cover"
                        />
                    </div>
                    <div className={classes.imageWrapper} />
                </div>
            </Container>
            <Spacer variant="v3" />
        </div>
    );
}
