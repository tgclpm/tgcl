import Link from 'next/link';

import classes from './LetsChat.module.css';

import Container from 'src/components/atoms/Container';
import Spacer from 'src/components/atoms/Spacer';
import {tgLink} from 'src/components/templates/Projects/ProjectsHomePage/config';
import useMobile from 'src/hooks/useMobile';

export default function LetsChat() {
    const mobile = useMobile();
    return (
        <div className="relative z-[1]">
            <Container>
                <Link href={tgLink} target="_blank">
                    <div className="flex flex-col items-center gap-[56px] py-[80px] lg:items-start lg:gap-[60px] lg:py-[120px]">
                        {mobile ? (
                            <div
                                className={classes.chatText}
                                style={{
                                    textAlign: 'center',
                                    display: 'flex',
                                    gap: '24px',
                                    flexDirection: 'column',
                                }}
                            >
                                <div>Let&apos;s Chat</div> <div>→</div>
                            </div>
                        ) : (
                            <div className={classes.chatText} style={{display: 'flex', gap: '40px'}}>
                                <div>Let&apos;s Chat</div> <div>→</div>
                            </div>
                        )}
                    </div>
                </Link>
            </Container>
            <div className="w-full lg:hidden">
                <div className={classes.imageWrapperMobile} />
            </div>
            <div className="hidden w-full lg:block">
                <div className={classes.imageWrapper} />
            </div>
            <Spacer variant="v3" />
        </div>
    );
}
