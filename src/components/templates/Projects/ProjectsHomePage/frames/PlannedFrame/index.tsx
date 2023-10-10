import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import Link from 'next/link';

import {kepler, nisai} from '../../config';

import KeplerProject from './KeplerProject';

import NissaiProject from './NissaiProject';

import classes from './Planned.module.css';

import Container from 'src/components/atoms/Container';
import Typography from 'src/components/atoms/Typography';

dayjs.extend(utc);

export default function PlannedFrame() {
    if (nisai.incoming && kepler.incoming) return null;

    return (
        <div className="relative z-[1]">
            <div className={classes.radial_bg1} />
            <div className={classes.radial_bg2} />
            <Container>
                <div className="flex flex-col  gap-[64px] py-[80px]  lg:gap-[60px] lg:py-[120px]">
                    <div>
                        <Typography variant="h2" className="lg:text-start">
                            Planned
                        </Typography>
                    </div>
                    {nisai.incoming ? null : (
                        <Link href="/projects/nisai">
                            <NissaiProject />
                        </Link>
                    )}
                    {kepler.incoming ? null : (
                        <Link href="/projects/kepler">
                            <KeplerProject />
                        </Link>
                    )}
                </div>
                <div className="h-[1px] bg-light/20" />
            </Container>
        </div>
    );
}
