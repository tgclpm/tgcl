import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc';
import NextImage from 'next/image';

import Link from 'next/link';
import {FC, useEffect, useMemo, useState} from 'react';

import useMobile from '../../../../../../hooks/useMobile';

import LargeButton from '../../../../../atoms/LargeButton/LargeButton';

import Timer from '../../../../../atoms/Timer';

import classes from './Incoming.module.css';

import Typography from 'src/components/atoms/Typography';

dayjs.extend(utc);
dayjs.extend(duration);

interface IncomingItemProps {
    title: string;
    image: string;
    startDate: string;
    duration: number; // days
    description: string;
    points?: Array<string>;
    more?: string;
    hardCap: string;
    link: string;
    formatedDate: string;
    onSale: {
        value: string;
        text?: string;
    };
    className?: string;
}

const IncomingItem: FC<IncomingItemProps> = ({
    title,
    image,
    description,
    points,
    duration,
    hardCap,
    onSale,
    more,
    startDate,
    className = '',
    link,
}) => {
    const endDate = dayjs.utc(startDate).add(dayjs.duration({days: duration}));
    const mobile = useMobile();
    const [ended, setEnded] = useState(false);

    const isEnded = useMemo(() => {
        return dayjs().utc().isAfter(endDate);
    }, [endDate]);

    useEffect(() => {
        if (isEnded) {
            setEnded(isEnded);
        }
    }, [isEnded]);

    const waiting = dayjs.utc().isBefore(dayjs.utc(startDate));

    return (
        <div className={`${classes.mySeven} ${className}`}>
            <div className="flex w-full flex-col items-start gap-[30px] lg:flex-row lg:justify-between lg:gap-0">
                <Link href={link}>
                    <div className="flex items-center gap-[23px]">
                        <NextImage src={image} alt="" width={96} height={96} />
                        <Typography variant="h4" className="whitespace-pre-line text-start">
                            {title}
                        </Typography>
                    </div>
                </Link>
                {!mobile ? (
                    <div className="flex flex-col space-y-[10px]">
                        {waiting ? (
                            <>
                                <Typography variant="body1" className="text-end">
                                    Sale starts in
                                </Typography>
                                <Typography variant="body1">
                                    <Timer time={startDate} />
                                </Typography>
                            </>
                        ) : ended ? (
                            <>
                                <Typography variant="body1" className="text-end">
                                    Sale ends on
                                </Typography>
                                <Typography variant="h3">TBD</Typography>
                            </>
                        ) : null}
                    </div>
                ) : (
                    <div className="col-start-1 col-end-3 flex flex-col gap-2.5">
                        <Typography variant="body1" className="whitespace-pre-line text-start">
                            {description}
                        </Typography>
                        {points?.map(point => (
                            <div key={point} className="flex items-center gap-2">
                                <div className={classes.dot} />
                                <Typography variant="body1">{point}</Typography>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="h-[1px] w-full bg-light/20" />
            <div className=" flex flex-col gap-8 lg:grid lg:grid-cols-4 lg:gap-10">
                {!mobile && (
                    <div className="col-start-1 col-end-3 flex flex-col gap-2.5">
                        <Typography variant="body1" className="whitespace-pre-line text-start">
                            {description}
                        </Typography>
                        {points?.map(point => (
                            <div key={point} className="flex items-center lg:gap-2">
                                <div className={classes.dot} />
                                <Typography variant="body1">{point}</Typography>
                            </div>
                        ))}
                    </div>
                )}

                <div className="col-start-3 col-end-6 flex flex-col lg:justify-between">
                    <div className="mb-8 flex flex-col space-y-[16px] lg:mb-0">
                        {!!hardCap && (
                            <div className="flex grid-cols-3 flex-col gap-x-[16px] lg:grid lg:grid-cols-4 lg:gap-[20px]">
                                <Typography variant="body1" className="col-span-1 text-start lg:text-end">
                                    Hard&nbsp;Cap:
                                </Typography>
                                <Typography variant="h4" className="col-span-2 text-start lg:col-span-3">
                                    10’000’000
                                    <Typography
                                        variant="body1"
                                        className="inline-block normal-case !text-white/60 lg:!font-bold lg:!text-white"
                                    >
                                        &nbsp;BUSD
                                    </Typography>
                                </Typography>
                            </div>
                        )}

                        {!!onSale && (
                            <div className="grid-cols-3 gap-x-[16px] gap-y-[20px] lg:grid lg:grid-cols-4 lg:gap-[20px]">
                                <Typography variant="body1" className="col-span-1 text-start lg:text-end">
                                    On Sale:
                                </Typography>
                                <Typography variant="h4" className="col-span-2 text-start lg:col-span-3">
                                    {onSale.value}&nbsp;
                                    <Typography
                                        variant="body1"
                                        className="inline-block normal-case !text-white/60 lg:!font-bold lg:!text-white"
                                    >
                                        tokens <br />
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        className="normal-case !text-white lg:text-start"
                                        style={{fontWeight: 600}}
                                    >
                                        {onSale.text}
                                    </Typography>
                                </Typography>
                            </div>
                        )}

                        <div className="grid-cols-3 gap-x-[16px] gap-y-[20px] lg:grid lg:grid-cols-4 lg:gap-[20px]">
                            <Typography variant="body1" className="col-span-1 text-start lg:text-end">
                                Start&nbsp;date:
                            </Typography>
                            <Typography variant="body1" className="col-span-2 text-start !font-[600] lg:col-span-3">
                                TBD
                            </Typography>
                        </div>

                        <div className="grid-cols-3 gap-x-[16px] gap-y-[20px] lg:grid lg:grid-cols-4 lg:gap-[20px]">
                            <Typography variant="body1" className="col-span-1 text-start lg:text-end">
                                Duration:
                            </Typography>
                            <Typography variant="body1" className="col-span-2 text-start !font-[600] lg:col-span-3">
                                {duration ? <>{duration} days</> : 'TBD'}
                            </Typography>
                        </div>
                        {more && (
                            <div className="grid-cols-3 gap-x-[16px] gap-y-[20px] lg:grid lg:grid-cols-4 lg:gap-[20px]">
                                <Typography variant="body1" className="col-span-1 text-start lg:text-end">
                                    More:
                                </Typography>
                                <Typography variant="body1" className="col-span-2 text-start !font-[600] lg:col-span-3">
                                    {more}
                                </Typography>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {mobile && <div className=" h-[1px] w-full bg-light/20" />}

            {mobile && (
                <div className="flex w-full flex-col items-center">
                    <div className="flex flex-col space-y-[10px]">
                        {waiting ? (
                            <>
                                <Typography variant="body1">Sale starts in</Typography>
                                <Typography variant="body1">
                                    <Timer time={startDate} />
                                </Typography>
                            </>
                        ) : ended ? (
                            <>
                                <Typography variant="body1">Sale ends on</Typography>
                                <Typography variant="h3">TBD</Typography>
                            </>
                        ) : null}
                    </div>
                </div>
            )}
            <LargeButton style={{width: '100%'}} className="z-[2] mt-[24px] lg:m-0" to={link}>
                Learn more
            </LargeButton>
        </div>
    );
};

export default IncomingItem;
