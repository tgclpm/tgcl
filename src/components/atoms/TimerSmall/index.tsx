import {Dayjs} from 'dayjs';
import {FC, memo, useEffect, useRef} from 'react';

import useTimeEnd from 'src/hooks/useTimeEnd';

interface TimerProps {
    time: string | Date | Dayjs;

    onEnd?(): void;
}

const Timer: FC<TimerProps> = memo(({time, onEnd}): JSX.Element | null => {
    const {fullDays, hours, minutes, seconds, isEnd} = useTimeEnd(time, 1);

    const isTriggered = useRef(isEnd);

    useEffect(() => {
        if (isTriggered.current && !isEnd) {
            isTriggered.current = false;
        }
    }, [isEnd, time]);

    useEffect(() => {
        if (!isTriggered.current && isEnd) {
            isTriggered.current = true;
            onEnd?.();
        }
    }, [isEnd, onEnd]);

    return (
        <div className="grid grid-cols-4 gap-4 font-[600] text-white">
            <div className="flex min-w-[45px] flex-col space-y-[4px] lg:space-y-[7px]">
                <div className="text-center text-[26px] leading-none lg:text-[30px]">{fullDays}</div>
                <div className="text-center text-[10px] uppercase leading-none tracking-[0.075em]">days</div>
            </div>

            <div className="flex min-w-[45px] flex-col space-y-[4px] lg:space-y-[7px]">
                <div className="text-center text-[26px] leading-none lg:text-[30px]">{hours}</div>
                <div className="text-center text-[10px] uppercase leading-none tracking-[0.075em]">hrs</div>
            </div>

            <div className="flex min-w-[45px] flex-col space-y-[4px] lg:space-y-[7px]">
                <div className="text-center text-[26px] leading-none lg:text-[30px]">{minutes}</div>
                <div className="text-center text-[10px] uppercase leading-none tracking-[0.075em]">min</div>
            </div>

            <div className="flex min-w-[45px] flex-col space-y-[4px] lg:space-y-[7px]">
                <div className="text-center text-[26px] leading-none lg:text-[30px]">{seconds}</div>
                <div className="text-center text-[10px] uppercase leading-none tracking-[0.075em]">sec</div>
            </div>
        </div>
    );
});

export default Timer;
