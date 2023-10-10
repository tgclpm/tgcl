import WrapperBgDesktop from './bg.png';

import classes from './WhatIsMetaMask.module.css';

import Container from 'src/components/atoms/Container';
import Spacer from 'src/components/atoms/Spacer';

import Typography from 'src/components/atoms/Typography';

export default function WhatIsMetaMask() {
    return (
        <div style={{}}>
            <Container>
                <div className="flex h-full w-full flex-col py-[80px] lg:flex-row lg:py-[120px]">
                    <div className="flex flex-col lg:mr-[40px] lg:w-[460px]">
                        <Typography variant="h2" className="relative z-10 pb-[40px] !text-center lg:!text-left">
                            <p>What is</p>
                            <p>METAMASK</p>
                            <p>WALLET?</p>
                        </Typography>
                        <div className="">
                            <div className="relative flex justify-center lg:hidden">
                                <div
                                    className="relative z-10 h-[215px] w-[343px] bg-[-18px_50%] bg-no-repeat"
                                    style={{
                                        backgroundImage: `url(${WrapperBgDesktop.src})`,
                                        backgroundSize: '100%',
                                    }}
                                />
                                <div className={classes.imageWrapperSecond} />
                            </div>
                            <Typography variant="body1" className="!text-center !text-white/80 lg:!text-left">
                                Metamask is a leading software that creates and manages cryptocurrency wallets for its
                                users without storing any personal or access data information. The wallet connects
                                directly to the blockchain, with no third-party interactions in between making it a safe
                                custodial wallet with users having complete custodial ownership. The wallet supports
                                most major EVM (Ethereum Virtual Machine) based chains.
                            </Typography>
                        </div>
                    </div>
                    <div className="relative hidden h-full lg:block">
                        <div
                            className="relative z-10 h-[431px] w-[460px] bg-[0rem_0rem] bg-no-repeat"
                            style={{
                                backgroundImage: `url(${WrapperBgDesktop.src})`,
                                backgroundSize: '100%',
                            }}
                        />
                        <div className={classes.imageWrapper} />
                    </div>
                </div>
            </Container>
            <Spacer variant="v3" />
        </div>
    );
}
