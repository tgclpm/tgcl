import NextImage from 'next/image';

import WrapperBgDesktopSecond from './2.png';

import classes from './HeroFrame.module.css';

import Container from 'src/components/atoms/Container';

import Spacer from 'src/components/atoms/Spacer';

import Typography from 'src/components/atoms/Typography';

export default function HeroFrame() {
    return (
        <div className={classes.wrapper}>
            <div className="flex h-full w-full flex-col items-center">
                <Container>
                    <div className="my-[80px] flex h-full w-full flex-col lg:flex-row">
                        <div className="z-10 flex flex-col justify-center lg:mr-[160px]">
                            <div>
                                <Typography variant="h1" className="mb-[40px] text-center lg:!text-left">
                                    <p>Instructions</p>
                                    <p>to buy BUSD</p>
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className="pb-[40px] text-center !text-white/80 lg:!text-left"
                                >
                                    You can easily buy tokens directly within your MetaMask wallet by clicking “Buy”.
                                    Different networks and payment methods are available depending on your region.
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.imageWrapper} />
                    </div>
                    <div className="z-10 flex h-full w-full justify-between lg:flex-row lg:py-[120px]">
                        <div className="relative mr-[133px] hidden w-full lg:block">
                            <div className={classes.imageWrapperFirst} />
                            <div
                                className="relative z-10 h-[409px] w-[368px] bg-[0rem_0rem] bg-no-repeat"
                                style={{
                                    backgroundImage: `url(${WrapperBgDesktopSecond.src})`,
                                    backgroundSize: '100%',
                                }}
                            />
                        </div>
                        <div className="relative flex w-full flex-col justify-between lg:flex-row">
                            <div>
                                <Typography variant="h2" className="relative z-10 pb-[40px] !text-center lg:!text-left">
                                    What is BUSD?
                                </Typography>
                                <div className="flex w-full justify-center pb-[24px] lg:hidden">
                                    <div className={classes.imageWrapperSecond} />
                                    <NextImage
                                        src={WrapperBgDesktopSecond}
                                        alt=""
                                        width={400}
                                        height={500}
                                        className="z-11 relative h-[350px] w-[368px] object-cover"
                                    />
                                </div>
                                <Typography
                                    variant="body1"
                                    className="relative z-10 pb-[40px] !text-center !text-white/80 lg:!text-left"
                                >
                                    Binance USD (BUSD) is a dollar-backed stablecoin that is issued by the Binance Smart
                                    Chain team in partnership with Paxos Trust Company. The token is fully
                                    collateralized by USD and it can be redeemed for dollars at a 1:1 ratio. The BUSD
                                    stablecoin is designed to be used as a medium of exchange on the Binance trading
                                    platform and it is also the most liquid trading pair across DeFi protocols on
                                    Binance Chain. To alleviate concerns on the backing of the stablecoin, monthly
                                    transparency reports by an independent audit firm, WithumSmith+Brown.
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
