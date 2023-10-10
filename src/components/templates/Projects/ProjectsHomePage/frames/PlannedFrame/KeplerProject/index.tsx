import NextImage from 'next/image';

import useMobile from '../../../../../../../hooks/useMobile';
import LargeButton from '../../../../../../atoms/LargeButton/LargeButton';
import Typography from '../../../../../../atoms/Typography';
import {keplerDuration, keplerStartFull} from '../../../config';

import classes from '../Planned.module.css';

import Kepler from './kepler.png';

export default function KeplerProject() {
    const mobile = useMobile();
    return (
        <div className={classes.projects}>
            <div className="flex w-full flex-col gap-8 lg:grid lg:grid-cols-4 lg:gap-10">
                <div className="col-start-1 col-end-3 flex w-full flex-col items-start gap-[40px]">
                    <div className="flex items-center gap-[23px]">
                        <NextImage src={Kepler} alt="" width={96} height={96} />
                        <Typography variant="h4" className="text-start">
                            Project <br />
                            kepler
                        </Typography>
                    </div>
                    <Typography variant="body1" className="whitespace-pre-line text-start">
                        White-label custom hyper-realistic metaverse instances powered by Artificial Intelligence for
                        business and communal usage.
                    </Typography>
                </div>
                {mobile && <div className=" h-[1px] w-full bg-light/20" />}

                <div className="col-start-3 col-end-5 flex flex-col lg:justify-between">
                    <div className="mb-8 flex flex-col space-y-[16px] lg:mb-0">
                        <div className="flex grid-cols-3 flex-col gap-x-[16px] lg:grid lg:grid-cols-4 lg:gap-[20px]">
                            <Typography variant="body1" className="col-span-1 text-start lg:text-end">
                                Hard&nbsp;Cap:
                            </Typography>
                            <Typography variant="h4" className="col-span-2 text-start lg:col-span-3">
                                500’000
                                <Typography
                                    variant="body1"
                                    className="inline-block normal-case !text-white/60 lg:!font-bold lg:!text-white"
                                >
                                    &nbsp;BUSD
                                </Typography>
                            </Typography>
                        </div>

                        <div className="grid-cols-3 gap-x-[16px] gap-y-[20px] lg:grid lg:grid-cols-4 lg:gap-[20px]">
                            <Typography variant="body1" className="col-span-1 text-start lg:text-end">
                                On Sale:
                            </Typography>
                            <Typography variant="h4" className="col-span-2 text-start lg:col-span-3">
                                500’000&nbsp;
                                <Typography
                                    variant="body1"
                                    className="inline-block normal-case !text-white/60 lg:!font-bold lg:!text-white"
                                >
                                    tokens <br />
                                </Typography>
                                <Typography variant="body1" className="text-start normal-case !text-white">
                                    (3.4% tokenised equity)
                                </Typography>
                            </Typography>
                        </div>

                        <div className="grid-cols-3 gap-x-[16px] gap-y-[20px] lg:grid lg:grid-cols-4 lg:gap-[20px]">
                            <Typography variant="body1" className="col-span-1 text-start lg:text-end">
                                Start&nbsp;date:
                            </Typography>
                            <Typography
                                variant="body1"
                                className="col-span-2 text-start !font-[600] !text-white lg:col-span-3"
                            >
                                {keplerStartFull}
                            </Typography>
                        </div>

                        <div className="grid-cols-3 gap-x-[16px] gap-y-[20px] lg:grid lg:grid-cols-4 lg:gap-[20px]">
                            <Typography variant="body1" className="col-span-1 text-start lg:text-end">
                                Duration:
                            </Typography>
                            <Typography
                                variant="body1"
                                className="col-span-2 text-start !font-[600] !text-white lg:col-span-3"
                            >
                                {keplerDuration} days
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            <LargeButton style={{width: '100%'}} to="/projects/kepler">
                Learn more
            </LargeButton>
        </div>
    );
}
