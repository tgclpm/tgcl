import NextImage from 'next/image';

import {nisaiDuration} from '../../../ProjectsHomePage/config';

import classes from './AboutSale.module.css';

import quotes from './quotes.svg';

import Container from 'src/components/atoms/Container';

import LargeButton from 'src/components/atoms/LargeButton/LargeButton';

import Typography from 'src/components/atoms/Typography';

const Line = () => <div className="hidden h-[1px] bg-light/20 lg:block" />;

export default function AboutSaleFrame() {
    return (
        <div className="relative z-[1] pt-8 lg:pt-10">
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
                                400’000
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
                                1’000’000
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
                                    (20% tokenised equity)
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
                                {nisaiDuration} days
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

                <Typography variant="body1" className="mb-[64px] lg:mb-[60px] lg:text-start">
                    NISAI aims to create genuine impact and play an integral part in shaping the medical infrastructure
                    in emerging economies with rising demands but severely obstructed supply.
                </Typography>

                <div className="flex items-start space-x-[8px] lg:space-x-[28px]">
                    <Typography variant="h4" className="mb-8 text-start lg:mb-10 lg:whitespace-pre-line">
                        WE AT SHIFT DAO SEE THE NISAI PROJECT AS AN IMPRESSIVE ENDEAVOR TO MAKE HEALTHCARE SERVICES MORE
                        ACCESSIBLE AND AVAILABLE ACROSS THE GLOBE.
                        <br /> <br />
                        SHIFT DAO AIMS TO HELP NISAI GAIN ACCESS TO distributed CAPITAL AND PROVIDE INVESTORS WITH A
                        SAFE ASSET-BACKED INVESTMENT OPPORTUNITY.
                    </Typography>
                    <NextImage src={quotes} alt="" className="max-w-[25px] lg:max-w-none" width={53} height={37} />
                </div>

                <div className={classes.logo}>SHIFT DAO</div>

                <div className="my-[80px] h-[1px] bg-light/20 lg:my-[120px]" />
            </Container>
        </div>
    );
}
