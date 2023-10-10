import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc';
import Link from 'next/link';

import useMobile from '../../../../../hooks/useMobile';
import Container from '../../../../atoms/Container';

import LargeButton from '../../../../atoms/LargeButton/LargeButton';
import Typography from '../../../../atoms/Typography';

import classes from './ProjectsFrame.module.css';

dayjs.extend(duration);
dayjs.extend(utc);

export default function ProjectsFrame() {
    const mobile = useMobile();

    return (
        <div className="relative z-[1]">
            <Container>
                <div className="flex flex-col gap-[57px] py-[57px] lg:gap-[60px] lg:py-[120px]">
                    <div>
                        <Typography variant="h2" style={{textAlign: mobile ? 'center' : 'left'}}>
                            PROJECTS
                        </Typography>
                    </div>
                    <div className="flex flex-col items-end gap-[24px] lg:flex-row lg:gap-[40px]">
                        <Link href="/projects/nisai">
                            <div className={classes.card}>
                                <Typography variant="h4" style={{textAlign: 'left'}}>
                                    NISAI <br /> project
                                </Typography>
                                <Typography variant="body2" style={{textAlign: 'left'}}>
                                    Asset tokenization platform with an emphasis on heavy CAPEX industries with an
                                    initial PoC on medical diagnostic assets.
                                </Typography>
                            </div>
                        </Link>
                        <Link href="/projects/kepler">
                            <div className={classes.card}>
                                <Typography variant="h4" style={{textAlign: 'left'}}>
                                    Kepler &nbsp; project
                                </Typography>
                                <Typography variant="body2" style={{textAlign: 'left'}}>
                                    White-label custom hyper-realistic metaverse instances powered by Artificial
                                    Intelligence for business and communal usage.
                                </Typography>
                            </div>
                        </Link>
                    </div>

                    <div>
                        <LargeButton to="/projects">ALL PROJECTS</LargeButton>
                    </div>
                </div>
                <div style={{border: ' 1px solid rgba(180, 205, 255, 0.2)'}} />
            </Container>
            <div className={classes.bg} />
        </div>
    );
}
