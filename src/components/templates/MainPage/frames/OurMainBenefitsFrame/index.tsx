import NextImage from 'next/image';

import useMobile from '../../../../../hooks/useMobile';
import Container from '../../../../atoms/Container';
import LargeButton from '../../../../atoms/LargeButton/LargeButton';
import Typography from '../../../../atoms/Typography';

import ImageBg from './img.png';
import classes from './OurBenefitsFrame.module.css';

export default function OurMainBenefitsFrame() {
    const mobile = useMobile();
    return (
        <>
            <div className="relative z-[1]">
                <Container>
                    <div className="py-[57px] lg:py-[120px]">
                        <div className="flex flex-col gap-[57px] lg:grid lg:grid-cols-6 lg:gap-[40px]">
                            <div className="lg:col-span-2">
                                {mobile ? (
                                    <Typography variant="h2" className="text-center">
                                        FAQs
                                        <br />
                                        For dummies
                                    </Typography>
                                ) : (
                                    <Typography variant="h2" className="text-start">
                                        FAQs
                                        <br />
                                        For Dummies
                                    </Typography>
                                )}
                            </div>
                            <div className="flex flex-col gap-[57px] lg:col-start-4 lg:col-end-7 lg:gap-[60px]">
                                <div>
                                    <Typography variant="h4" className={mobile ? 'text-center' : `text-start`}>
                                        Do I need to understand anything about tech or crypto to play?
                                    </Typography>
                                    <div
                                        style={{background: 'linear-gradient(90deg, #1282E4 0%, #0FD3E1 100%)'}}
                                        className="my-[24px] h-[1px] lg:my-[30px]"
                                    />
                                    <Typography variant="body1" className="lg:text-start">
                                            Not in the slightest. This lottery is designed for dummies like you. All you need to do is connect your wallet and press a button. We'll take care of the rest. We'll even give you a button to check if you won. You're welcome.
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="h4" className={mobile ? 'text-center' : `text-start`}>
                                        Can you steal our money?
                                    </Typography>
                                    <div
                                        style={{background: 'linear-gradient(90deg, #1282E4 0%, #0FD3E1 100%)'}}
                                        className="my-[24px] h-[1px] lg:my-[30px]"
                                    />
                                    <Typography variant="body1" className={mobile ? 'text-center' : `text-start`}>
                                        No we can't. Because we already took 10% of your ticket value. We're not greedy. There is literally no function in the smart contract that would let us take any money out of the contract. That juicy juicy pot is all yours.
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="h4" className={mobile ? 'text-center' : `text-start`}>
                                        Can you hack our wallet if we conenct?
                                    </Typography>
                                    <div
                                        style={{background: 'linear-gradient(90deg, #1282E4 0%, #0FD3E1 100%)'}}
                                        className="my-[24px] h-[1px] lg:my-[30px]"
                                    />
                                    <Typography variant="body1" className={mobile ? 'text-center' : `text-start`}>
                                        Dude. That's not how technology works. We use the standard <span style={{color: 'orange'}}>wagmi connect</span> wallet library that thousands of dApps are using around the world.
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="h4" className={mobile ? 'text-center' : `text-start`}>
                                        What happens when I press buy tickets?
                                    </Typography>
                                    <div
                                        style={{background: 'linear-gradient(90deg, #1282E4 0%, #0FD3E1 100%)'}}
                                        className="my-[24px] h-[1px] lg:my-[30px]"
                                    />
                                    <Typography variant="body1" className={mobile ? 'text-center' : `text-start`}>
                                        We go to your connected wallet and say "Hey can you send EXACTLY enough ethereum to buy the tickets you want?". If you say yes, we send the transaction to use the <span style={{color: 'orange'}}>buyTickets</span> function in the contract and you get your ticket numbers. ONLY YOU can make this happen. Its literally impossible for us to manipulate this transaction."
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="h4" className={mobile ? 'text-center' : `text-start`}>
                                        Okay but like, what if you just don't give us the prizes?
                                    </Typography>
                                    <div
                                        style={{background: 'linear-gradient(90deg, #1282E4 0%, #0FD3E1 100%)'}}
                                        className="my-[24px] h-[1px] lg:my-[30px]"
                                    />
                                    <Typography variant="body1" className="lg:text-start">
                                        How though? The contract has a function called <span style={{color: 'orange'}}>receiveWinnings</span> that anyone can call. When you call it, the contract checks if you have won, and if you have, it sends you the prize money. We can't stop you from calling this function. We can't stop you from getting rich af
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="h4" className={mobile ? 'text-center' : `text-start`}>
                                        Fine. Fiiiineeee. When do we get the prizes?
                                    </Typography>
                                    <div
                                        style={{background: 'linear-gradient(90deg, #1282E4 0%, #0FD3E1 100%)'}}
                                        className="my-[24px] h-[1px] lg:my-[30px]"
                                    />
                                    <Typography variant="body1" className="lg:text-start">
                                        At the stroke of midnight, hehe <i>stroke</i>, the <span style={{color: 'orange'}}>setWinners</span> function will be triggered by the chain. This chooses 6 random ticket numbers as the winners. You can check if you won using the <span style={{color: 'orange'}}>checkIfIWon</span> function. And don't worry we'll include a button on the website to do this because we know you're a dummy
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{border: ' 1px solid rgba(180, 205, 255, 0.2)'}} />
                </Container>
                {!mobile ? (
                    <NextImage
                        src={ImageBg}
                        alt=""
                        width={726}
                        height={726}
                        className="absolute left-0 top-[200px] z-[-1]"
                    />
                ) : null}
                <div className={classes.bg} />
            </div>
        </>
    );
}
