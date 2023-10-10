import Link from 'next/link';

import classes from './LetsChatFrame.module.css';

import Container from 'src/components/atoms/Container';

import {tgLink} from 'src/components/templates/Projects/ProjectsHomePage/config';
import useMobile from 'src/hooks/useMobile';

export default function LetsChatFrame() {
    const mobile = useMobile();

    return (
        <div className="relative z-[1]">
            <Container>
                <Link href={tgLink} target="_blank">
                    <div className="flex flex-col items-center gap-[56px] py-[80px] lg:items-start lg:gap-[60px] lg:py-[120px]">
                        {mobile ? (
                            <div
                                className={classes.text}
                                style={{textAlign: 'center', display: 'flex', gap: '24px', flexDirection: 'column'}}
                            >
                                <div>Let&apos;s Chat</div>
                                <div>→</div>
                            </div>
                        ) : (
                            <div className={classes.text} style={{display: 'flex', gap: '40px'}}>
                                <div>Let&apos;s Chat</div>
                                <div>→</div>
                            </div>
                        )}
                    </div>
                </Link>
                <div style={{border: ' 1px solid rgba(180, 205, 255, 0.2)'}} />
            </Container>
            <div className={classes.bg} />
        </div>
    );
}
