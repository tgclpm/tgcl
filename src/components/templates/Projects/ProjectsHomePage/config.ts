import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc';

dayjs.extend(duration);
dayjs.extend(utc);

export const mysevenStartDate = process.env.NEXT_PUBLIC_MY_SEVEN_START_DATE || '';
export const mysevenEndDate = process.env.NEXT_PUBLIC_MY_SEVEN_END_DATE || '';
export const nisaiStartDate = process.env.NEXT_PUBLIC_NISAI_START_DATE || '';
export const keplerStartDate = process.env.NEXT_PUBLIC_KEPLER_START_DATE || '';

export const mysevenDuration = Number(process.env.NEXT_PUBLIC_MY_SEVEN_DURATION_DAYS);
export const nisaiDuration = Number(process.env.NEXT_PUBLIC_NISAI_DURATION_DAYS);
export const keplerDuration = Number(process.env.NEXT_PUBLIC_KEPLER_DURATION_DAYS);

export const MySevenAllSaleEnded = Boolean(process.env.NEXT_PUBLIC_MY_SEVEN_ALL_SALE_ENDED);

export const formatDate = (date: string) =>
    dayjs.utc(date).format('MMM D, YYYY h:mm A [GMT]').replace(' AM', 'am').replace(' PM', 'pm');

export const formatDateGST = (date: string) =>
    date
        ? dayjs
              .utc(date)
              .add(dayjs.duration({hours: 4}))
              .format('MMM D, YYYY h:mm A [GST]')
              .replace(' AM', 'am')
              .replace(' PM', 'pm')
        : 'TBD';

export const formatDateBRT = (date: string) =>
    date
        ? dayjs
              .utc(date)
              .add(dayjs.duration({hours: -3}))
              .format('MMM D, YYYY h:mm A [BRT]')
              .replace(' AM', 'am')
              .replace(' PM', 'pm')
        : 'TBD';

export const formatDateICT = (date: string) =>
    date
        ? dayjs
              .utc(date)
              .add(dayjs.duration({hours: 7}))
              .format('MMM D, YYYY h:mm A [ICT]')
              .replace(' AM', 'am')
              .replace(' PM', 'pm')
        : 'TBD';

export const formatDateWAT = (date: string) =>
    date
        ? dayjs
              .utc(date)
              .add(dayjs.duration({hours: 1}))
              .format('MMM D, YYYY h:mm A [WAT]')
              .replace(' AM', 'am')
              .replace(' PM', 'pm')
        : 'TBD';

export const mysevenStartFull = formatDateGST(mysevenStartDate);
export const mysevenEndFull = formatDateGST(mysevenEndDate);
export const nisaiStartFull = formatDate(nisaiStartDate);
export const keplerStartFull = formatDate(keplerStartDate);

export const myseven = {
    startDate: mysevenStartDate,
    endDate: mysevenEndFull,
    duration: mysevenDuration,
    incoming: true,
};

export const nisai = {
    startDate: nisaiStartDate,
    duration: nisaiDuration,
    incoming: dayjs.utc(nisaiStartDate).diff(dayjs.utc(), 'day') < 2,
};

export const kepler = {
    startDate: keplerStartDate,
    duration: keplerDuration,
    incoming: dayjs.utc(keplerStartDate).diff(dayjs.utc(), 'day') < 2,
};

export const mySevenStageStarts: Record<string, string> = {
    stage1: '2023-01-23T08:00:00.000Z',
    stage2: '',
    stage3: '',
    stage4: '',
};

// stage2: '2023-01-31T15:00:00.000Z',
// stage3: '2023-02-08T05:00:00.000Z',
// stage4: '2023-02-16T11:00:00.000Z',

export const isMySevenStageEnded: Record<string, boolean> = {
    stage1: Boolean(process.env.NEXT_PUBLIC_MY_SEVEN_STAGE_1_ENDED),
    stage2: Boolean(process.env.NEXT_PUBLIC_MY_SEVEN_STAGE_2_ENDED),
    stage3: Boolean(process.env.NEXT_PUBLIC_MY_SEVEN_STAGE_3_ENDED),
    stage4: Boolean(process.env.NEXT_PUBLIC_MY_SEVEN_STAGE_4_ENDED),
};

export const mySevenStageDuration: Record<string, number> = {
    stage1: 70,
    stage2: 7,
    stage3: 7,
    stage4: 7,
};

export const isCurrentMySevenStageTimeEnd = () => {
    const nowDate = dayjs.utc();

    const currentStage = Object.keys(mySevenStageStarts).find(stage => {
        if (!mySevenStageStarts[stage]) {
            return false;
        }

        return dayjs.utc().isAfter(dayjs.utc(mySevenStageStarts[stage]));
    });

    if (!currentStage) return false;

    return (
        isMySevenStageEnded[currentStage] ||
        nowDate.isAfter(
            dayjs.utc(mySevenStageStarts[currentStage]).add(dayjs.duration({days: mySevenStageDuration[currentStage]})),
        )
    );
};

export const IphonePromoEndTime = () => {
    const endDate = dayjs.utc(mySevenStageStarts.stage1).add(dayjs.duration({days: mySevenStageDuration['stage1']}));
    return dayjs.utc().isAfter(endDate) ? null : endDate.toISOString();
};

export const isStageOneEnded = () => {
    return (
        Boolean(process.env.NEXT_PUBLIC_MY_SEVEN_STAGE_1_ENDED) ||
        dayjs
            .utc()
            .isAfter(dayjs.utc(mySevenStageStarts.stage1).add(dayjs.duration({days: mySevenStageDuration['stage1']})))
    );
};

export const tgLink = 'https://t.me/shiftdao';
export const twitterLink = 'https://twitter.com/shift_dao';
export const mediumLink = 'https://medium.com/@shiftdao';
