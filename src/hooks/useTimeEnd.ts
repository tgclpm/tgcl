import dayjs, {Dayjs} from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {useEffect, useState} from 'react';

dayjs.extend(duration);

interface TimeEndResult {
    text: string;
    isEnd: boolean;

    fullDays: number;
    hours: number;
    minutes: number;
    seconds: number;
}

function getTimeLeft(date: string | Date | Dayjs, short = false): TimeEndResult {
    const diff = dayjs(date).diff(dayjs());
    const duration = dayjs.duration(diff);
    const diffAsDate = dayjs(diff);

    const asDays = duration.asDays();
    const fullDays = Math.trunc(asDays);

    const asHours = duration.hours();
    const hours = Math.trunc(asHours);

    const asMinutes = duration.asMinutes();
    const fullMinutes = Math.trunc(asMinutes);

    const asSeconds = duration.asSeconds();

    const minutes = duration.minutes();
    const seconds = duration.seconds();

    const minutesText = diffAsDate.format('mm');
    const secondsText = diffAsDate.format('ss');

    const isEnd = !(asDays > 0 && asHours > 0 && asMinutes > 0 && asSeconds > 0);

    return {
        isEnd,
        text: short ? `${fullMinutes}:${secondsText}` : `${hours}h ${minutesText}m left`,

        fullDays: isEnd ? 0 : fullDays,
        hours: isEnd ? 0 : hours,
        minutes: isEnd ? 0 : minutes,
        seconds: isEnd ? 0 : seconds,
    };
}

function useTimeEnd(time: string | Date | Dayjs, seconds = 60, short = false): TimeEndResult {
    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(time, short));

    useEffect(() => {
        const int = window.setInterval(() => {
            const res = getTimeLeft(time, short);
            setTimeLeft(res);
            if (res.isEnd) clearInterval(int);
        }, seconds * 1000);

        setTimeLeft(getTimeLeft(time, short));

        return () => clearInterval(int);
    }, [time, seconds, short]);

    return timeLeft;
}

export default useTimeEnd;
