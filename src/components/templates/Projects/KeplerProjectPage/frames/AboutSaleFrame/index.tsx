import NextImage from 'next/image';

import {keplerDuration} from '../../../ProjectsHomePage/config';

import classes from './AboutSale.module.css';

import quotes from './quotes.svg';

import Container from 'src/components/atoms/Container';

import LargeButton from 'src/components/atoms/LargeButton/LargeButton';

import Typography from 'src/components/atoms/Typography';

const Line = () => <div className="hidden h-[1px] bg-light/20 lg:block" />;

export default function AboutSaleFrame() {
    return (
        <div className="relative z-[5] pt-8 lg:pt-10">
            <Container>
                <Typography variant="h2" className="mb-[64px] lg:mb-[60px] lg:text-start">
                    About SALE
                </Typography>

                <div className="flex flex-col space-y-[16px] lg:space-y-0">
                    <div>
                        <div className="grid lg:grid-cols-2 lg:py-[12px]">
                            <Typography variant="body1" className="text-start">
                                Soft Cap:
                            </Typography>
                            <Typography variant="h4" className="text-start">
                                100’000
                                <Typography
                                    variant="body1"
                                    className="inline-block normal-case !text-white/60 lg:!font-bold lg:!text-white"
                                >
                                    &nbsp;BUSD
                                </Typography>
                            </Typography>
                        </div>
                        <Line />
                    </div>

                    <div>
                        <div className="grid lg:grid-cols-2 lg:py-[12px]">
                            <Typography variant="body1" className="text-start">
                                Hard Cap:
                            </Typography>
                            <Typography variant="h4" className="text-start">
                                500’000
                                <Typography
                                    variant="body1"
                                    className="inline-block normal-case !text-white/60 lg:!font-bold lg:!text-white"
                                >
                                    &nbsp;BUSD
                                </Typography>
                            </Typography>
                        </div>
                        <Line />
                    </div>

                    <div>
                        <div className="grid lg:grid-cols-2 lg:py-[12px]">
                            <Typography variant="body1" className="text-start">
                                On Sale:
                            </Typography>
                            <Typography variant="h4" className="text-start">
                                500’000
                                <Typography
                                    variant="body1"
                                    className="inline-block normal-case !text-white/60 lg:!font-bold lg:!text-white"
                                >
                                    &nbsp;DAO tokens
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className="text-start normal-case !text-white lg:!font-bold"
                                >
                                    (3.4% tokenised equity)
                                </Typography>
                            </Typography>
                        </div>
                        <Line />
                    </div>

                    <div>
                        <div className="grid lg:grid-cols-2 lg:py-[12px]">
                            <Typography variant="body1" className="text-start">
                                Sale start date:
                            </Typography>
                            <Typography variant="body1" className="text-start !font-[600] !text-white">
                                TBD
                            </Typography>
                        </div>
                        <Line />
                    </div>

                    <div>
                        <div className="grid lg:grid-cols-2 lg:py-[12px]">
                            <Typography variant="body1" className="text-start">
                                Duration:
                            </Typography>
                            <Typography variant="body1" className="text-start !font-[600] !text-white">
                                {keplerDuration} days
                            </Typography>
                        </div>
                        <Line />
                    </div>
                </div>

                <div className="mt-[64px] lg:mt-[40px]">
                    <LargeButton disabled className="!w-full">
                        SALE START IS TO BE ANNOUNCED
                    </LargeButton>
                </div>

                <div className="my-[80px] h-[1px] bg-light/20 lg:my-[120px]" />

                <div className="flex items-start space-x-[8px] lg:space-x-[28px]">
                    <Typography variant="h4" className="mb-8 text-start lg:mb-10 lg:whitespace-pre-line">
                        WITH STRONG LEAD INVESTORS AND A CLEARLY IDENTIFIED TARGET USER BASE, WE AT SHIFTDAO EXPECT THE
                        PROJECT TO EXPAND SMOOTHLY AND PROVIDE USERS WITH A VALID INNOVATIVE SOLUTION FOR DIGITAL
                        CONFERENCES AND INTERACTIONS.
                    </Typography>
                    <NextImage src={quotes} alt="" className="max-w-[25px] lg:max-w-none" width={53} height={37} />
                </div>

                <div className={classes.logo}>SHIFT DAO</div>

                <div className="my-[80px] h-[1px] bg-light/20 lg:my-[120px]" />
            </Container>
        </div>
    );
}
