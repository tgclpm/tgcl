import NextImage from 'next/image';
import Link from 'next/link';

import WrapperBgDesktop from './1.png';

import classes from './HowToBuyBusd.module.css';

import Container from 'src/components/atoms/Container';
import Spacer from 'src/components/atoms/Spacer';

import Typography from 'src/components/atoms/Typography';
import useMobile from 'src/hooks/useMobile';

export default function HowToBuyBusdFrame() {
    const mobile = useMobile();
    return (
        <div className="relative">
            <Container>
                <div className="flex h-full w-full flex-row justify-center py-[80px] lg:justify-between lg:py-[120px]">
                    <div className="z-10 -mt-[70px] mr-[24px] hidden w-[460px] lg:block">
                        <NextImage
                            src={WrapperBgDesktop}
                            alt=""
                            width={391}
                            height={568}
                            className="z-11 absolute left-[15%] h-[568px] w-[500px] object-cover"
                        />
                        <div className={classes.imageWrapper} />
                    </div>
                    <div className="flex flex-row justify-center lg:justify-between">
                        <div>
                            <Typography variant="h2" className="pb-[40px] !text-center lg:!text-left">
                                <p>HOW TO BUY </p>
                                <p>WITH</p>
                                <p>METAMASK</p>
                                <p>WALLET?</p>
                            </Typography>
                            <div className="relative z-10 mb-[26px] w-full lg:hidden lg:min-w-[285px]">
                                <NextImage
                                    src={WrapperBgDesktop}
                                    alt=""
                                    width={400}
                                    height={500}
                                    className="relative z-10 object-cover"
                                />
                                <div className={classes.imageWrapperSecond} />
                            </div>
                            <div
                                className="flex flex-col justify-between gap-[10px] [&>a]:decoration-[#0FD3E1] [&>a]:decoration-1"
                                style={{
                                    alignItems: mobile ? 'center' : 'left',
                                }}
                            >
                                <Link href="https://metamask.io/download/" target="_blank" className={classes.linkText}>
                                    Download Metamask
                                </Link>
                                <Link
                                    href="https://metamask.io/buy-crypto/"
                                    target="_blank"
                                    className={classes.linkText}
                                >
                                    Buy crypto through Metamask
                                </Link>
                                <Link
                                    href="https://metamask.zendesk.com/hc/en-us/articles/360058239311-Directly-buying-tokens-with-on-ramps-in-MetaMask"
                                    target="_blank"
                                    className={classes.linkText}
                                >
                                    Guide on Metamask purchases
                                </Link>
                                <Link href="https://youtu.be/4epDe7yzH38" target="_blank" className={classes.linkText}>
                                    How to buy BUSD (video)
                                </Link>
                                <Link href="https://youtu.be/Q8uSy7sTaLo" target="_blank" className={classes.linkText}>
                                    How to change BNB to BUSD (video)
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Spacer variant="v3" />
        </div>
    );
}
