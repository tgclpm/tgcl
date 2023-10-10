import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc';
import NextImage from 'next/image';

import {FC, useCallback, useEffect, useMemo, useState} from 'react';

import classes from './Stage.module.css';

import LargeButton from 'src/components/atoms/LargeButton/LargeButton';

import Timer from 'src/components/atoms/Timer';

import Typography from 'src/components/atoms/Typography';

import useScrollToElement from 'src/hooks/useScrollToElement';

dayjs.extend(utc);
dayjs.extend(duration);

interface StageProps {
    title: string;
    hardCap: string;
    softCap?: string;
    onSale: string;
    alreadySold?: string;
    startDate?: string;
    duration?: number;
    image: string;
    displayDate?: string;
    displayEndDate?: string;
    defaultEnded?: boolean;
    isOnSale?: boolean;
}

const StageItem: FC<StageProps> = ({
    title,
    image,
    hardCap,
    softCap,
    onSale,
    alreadySold,
    duration,
    startDate,
    displayDate,
    displayEndDate,
    defaultEnded = false,
    isOnSale,
}) => {
    const scroll = useScrollToElement('#buy-tokens');
    const [ended, setEnded] = useState(defaultEnded);

    const isEnded = useMemo(() => {
        if (!startDate) return false;
        if (!duration) return false;

        return dayjs()
            .utc()
            .isAfter(dayjs.utc(startDate).add(dayjs.duration({days: duration})));
    }, [startDate, duration]);

    useEffect(() => {
        if (isEnded) {
            setEnded(isEnded);
        }
    }, [isEnded]);

    const waiting = !startDate || (!isOnSale && !ended && dayjs().isBefore(dayjs(startDate)));

    const disabled = waiting || ended;

    const onEnd = useCallback(() => {
        setEnded(true);
    }, []);

    return (
        <div className={`${classes.stage_wrapper} flex flex-col items-center p-4 lg:p-10`}>
            <Typography variant="h3" className="mb-8 lg:mb-[60px]">
                {title}
            </Typography>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
                <div className="flex flex-col items-center space-y-[30px] lg:space-y-[40px]">
                    <div className="relative h-[144px] w-[311px] max-w-[80vw] lg:h-[167px] lg:w-[360px]">
                        <NextImage src={image} alt="world map" fill />
                    </div>

                    <div className="flex flex-col space-y-[10px]">
                        {waiting ? (
                            startDate ? (
                                <>
                                    <Typography variant="body1" className="lg:text-start">
                                        Sale starts in:
                                    </Typography>
                                    <Typography variant="h4">
                                        <Timer time={startDate} onEnd={onEnd} />
                                    </Typography>
                                </>
                            ) : (
                                <Typography variant="h3" className="mt-auto">
                                    TBD
                                </Typography>
                            )
                        ) : (
                            <Typography variant="h3" className="mt-auto">
                                {ended ? 'sold out' : 'on sale'}
                            </Typography>
                        )}
                    </div>
                </div>

                <div className="flex flex-col lg:justify-between">
                    <div className="mb-8 flex flex-col space-y-[16px] lg:mb-0">
                        <div className="grid grid-cols-3 gap-x-[16px] gap-y-[20px] lg:grid-cols-4 lg:gap-[20px]">
                            <Typography variant="body1" className="col-span-1 text-end">
                                Hard&nbsp;Cap:
                            </Typography>
                            <Typography variant="h4" className="col-span-1 text-start lg:col-span-3">
                                {hardCap}
                                <Typography
                                    variant="body1"
                                    className="col-span-1 inline-block normal-case !text-white/60 lg:!font-bold lg:!text-white"
                                >
                                    &nbsp;BUSD
                                </Typography>
                            </Typography>
                        </div>

                        {softCap && (
                            <div className="grid grid-cols-3 gap-x-[16px] gap-y-[20px] lg:grid-cols-4 lg:gap-[20px]">
                                <Typography variant="body1" className="col-span-1 text-end">
                                    Soft&nbsp;Cap:
                                </Typography>
                                <Typography variant="h4" className="col-span-2 text-start lg:col-span-3">
                                    {softCap}
                                    <Typography
                                        variant="body1"
                                        className="inline-block normal-case !text-white/60 lg:!font-bold lg:!text-white"
                                    >
                                        &nbsp;BUSD
                                    </Typography>
                                </Typography>
                            </div>
                        )}

                        <div className="grid grid-cols-3 gap-x-[16px] gap-y-[20px] lg:grid-cols-4 lg:gap-[20px]">
                            <Typography variant="body1" className="col-span-1 text-end">
                                On&nbsp;Sale:
                            </Typography>
                            <Typography variant="h4" className="col-span-2 text-start lg:col-span-3">
                                {onSale}
                                <Typography
                                    variant="body1"
                                    className="inline-block normal-case !text-white/60 lg:!font-bold lg:!text-white"
                                >
                                    SDMS tokens
                                </Typography>
                            </Typography>
                        </div>

                        {alreadySold && (
                            <div className="grid grid-cols-3 gap-x-[16px] gap-y-[20px] lg:grid-cols-4 lg:gap-[20px]">
                                <Typography variant="body1" className="col-span-1 text-end">
                                    Already Sold:
                                </Typography>
                                <Typography
                                    variant="h4"
                                    className="col-span-2 text-start lg:col-span-3 lg:!text-[32px]"
                                >
                                    {alreadySold}{' '}
                                    <Typography
                                        variant="body1"
                                        className="inline-block normal-case !text-white/60 lg:!font-bold lg:!text-white"
                                    >
                                        SDMS tokens
                                    </Typography>
                                </Typography>
                            </div>
                        )}

                        {displayDate && (
                            <div className="grid grid-cols-3 gap-x-[16px] gap-y-[20px] lg:grid-cols-4 lg:gap-[20px]">
                                <Typography variant="body1" className="col-span-1 text-end">
                                    Start&nbsp;date:
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className="col-span-2 text-start !font-[600] !text-white lg:col-span-3"
                                >
                                    {displayDate}
                                </Typography>
                            </div>
                        )}

                        {displayEndDate && (
                            <div className="grid grid-cols-3 gap-x-[16px] gap-y-[20px] lg:grid-cols-4 lg:gap-[20px]">
                                <Typography variant="body1" className="col-span-1 text-end">
                                    Projected end&nbsp;date:
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className="col-span-2 text-start !font-[600] !text-white lg:col-span-3"
                                >
                                    {displayEndDate}
                                </Typography>
                            </div>
                        )}
                    </div>
                    <br />
                    {!ended && (
                        <LargeButton disabled={disabled} onClick={scroll}>
                            {waiting ? 'waiting' : 'BUY SDMS TOKENS'}
                        </LargeButton>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StageItem;
