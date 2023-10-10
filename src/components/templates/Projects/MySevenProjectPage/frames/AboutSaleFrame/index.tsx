import NextImage from 'next/image';

import {useRouter} from 'next/router';

import {useEffect} from 'react';

import {fCurrency} from '../../../../../../utils/formatNumber';
import useInitialContractData from '../../../../../hooks/useInitialContractData';
import {mysevenEndFull, mysevenStartFull} from '../../../ProjectsHomePage/config';

import classes from './AboutSale.module.css';

import MembershipCard from './MembershipCard';

import quotes from './quotes.svg';

import Container from 'src/components/atoms/Container';

import LargeButton from 'src/components/atoms/LargeButton/LargeButton';

import Typography from 'src/components/atoms/Typography';

import useScrollToElement from 'src/hooks/useScrollToElement';

const Line = () => <div className="hidden h-[1px] bg-light/20 lg:block" />;

export default function AboutSaleFrame() {
    const scroll = useScrollToElement('#buy-tokens');
    const {initialData} = useInitialContractData();

    const {
        query: {block},
    } = useRouter();

    useEffect(() => {
        if (block === 'buy' && initialData) {
            scroll();
        }
    }, [block, scroll, initialData]);

    if (!initialData) {
        return null;
    }

    // eslint-disable-next-line no-console
    console.log('initialData.allStartingTokens', initialData.allStartingTokens);
    // eslint-disable-next-line no-console
    console.log('initialData.allAvailableTokensCount', initialData.allAvailableTokensCount);

    const sold = Math.floor(initialData.allStartingTokens) - Math.floor(initialData.allAvailableTokensCount); // TODO: fetch from contract

    return (
        <div className="relative z-[1] pt-8 lg:pt-10">
            <div className={classes.radial_left} />
            <div className={classes.radial_right} />
            <Container>
                <Typography variant="h2" className="mb-[64px] lg:mb-[60px] lg:text-start">
                    About SALE
                </Typography>

                <div className="flex flex-col space-y-[16px] lg:space-y-0">
                    <div>
                        <div className="grid lg:grid-cols-2 lg:py-[12px]">
                            <Typography variant="body1" className="text-start">
                                On Sale:
                            </Typography>
                            <Typography variant="h4" className="text-start">
                                1’000’000’000
                                <Typography
                                    variant="body1"
                                    className="inline-block normal-case !text-white/60 lg:!text-white"
                                >
                                    &nbsp;SDMS tokens
                                </Typography>
                                <Typography variant="body1" className="text-start normal-case !text-white">
                                    (20% tokenised equity of business)
                                </Typography>
                            </Typography>
                        </div>
                        <Line />
                    </div>

                    {process.env.NODE_ENV === 'development' && (
                        <div>
                            <div className="grid lg:grid-cols-2 lg:py-[12px]">
                                <Typography variant="body1" className="text-start">
                                    Already Sold:
                                </Typography>
                                <Typography variant="h4" className="text-start">
                                    {fCurrency(sold)}
                                    <Typography
                                        variant="body1"
                                        className="inline-block normal-case !text-white/60  lg:!text-white"
                                    >
                                        &nbsp;tokens
                                    </Typography>
                                </Typography>
                            </div>
                            <Line />
                        </div>
                    )}

                    <div>
                        <div className="grid lg:grid-cols-2 lg:py-[12px]">
                            <Typography variant="body1" className="text-start">
                                Presale Start date:
                            </Typography>
                            <Typography variant="body1" className="text-start !text-white">
                                {mysevenStartFull}
                            </Typography>
                        </div>
                        <Line />
                    </div>

                    <div>
                        <div className="grid lg:grid-cols-2 lg:py-[12px]">
                            <Typography variant="body1" className="text-start">
                                Projected End date:
                            </Typography>
                            <Typography variant="body1" className="text-start !text-white">
                                {mysevenEndFull}
                            </Typography>
                        </div>
                        <Line />
                    </div>

                    <div>
                        <div className="grid lg:grid-cols-2 lg:py-[12px]">
                            <Typography variant="body1" className="text-start">
                                More:
                            </Typography>
                            <Typography variant="body1" className="text-start !text-white">
                                Up to 15% bonuses (41’250’000 tokens) <br />
                                Shift DAO VIP club membership
                            </Typography>
                        </div>
                    </div>
                </div>

                <div className="mt-[64px] lg:mt-[40px]">
                    <LargeButton className="!w-full" onClick={scroll}>
                        BUY SDMS TOKENS
                    </LargeButton>
                </div>

                <div className="my-[80px] h-[1px] bg-light/20 lg:my-[120px]" />

                <Typography variant="body1" className="mb-[64px] lg:mb-[60px] lg:text-start">
                    MY SEVEN vision and goal is to achieve an unseen mass adoption with focus on following regions:
                    Middle East, Latin and Central America, South East Asia, and Africa.
                </Typography>

                <div className="flex items-start space-x-[8px] lg:space-x-[28px]">
                    <Typography variant="h4" className="mb-8 text-start lg:mb-10">
                        WE AT SHIFT DAO SEE MYSEVEN AS A GAME-CHANGER FOR THE GLOBAL MEDIA AND DIGITAL MARKETS. WE HAVE
                        THUS DECIDED TO LAUNCH THE INVESTMENT CAMPAIGN ACROSS DIFFERENT TARGET REGIONS IN PHASES TO
                        ENSURE WIDESPREAD AVAILABILITY.
                        <br /> <br />
                        FOLLOWING THEIR GOAL OF BORDERLESS MASS ADOPTION, WE AIM TO WITNESS SUPPORT AND INTEREST IN THE
                        PROJECT BY THOUSANDS OF INVESTORS FROM VARIOUS REGIONS COMING TOGETHER FOR THEIR INVESTMENT AND
                        GROWTH JOURNEY.
                    </Typography>
                    <NextImage src={quotes} alt="" className="max-w-[25px] lg:max-w-none" width={53} height={37} />
                </div>

                <div className={classes.logo}>SHIFT DAO</div>

                <div className="my-[80px] h-[1px] bg-light/20 lg:my-[120px]" />

                <MembershipCard />

                <div className="my-[80px] h-[1px] bg-light/20 lg:my-[120px]" />
            </Container>
        </div>
    );
}
