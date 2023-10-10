import Typography from '../../../../atoms/Typography';

import classes from './HeroFrame.module.css';

import MailImage from './mail.png';

import ContactItem from './molecules/ContactItem';
import TelegramImage from './telegram.png';
import TwitterImage from './twitter.png';

import Container from 'src/components/atoms/Container';
import {tgLink, twitterLink} from 'src/components/templates/Projects/ProjectsHomePage/config';

export default function HeroFrame() {
    return (
        <div className="relative z-[1]">
            <Container>
                <div className="flex flex-col gap-[56px] py-[120px] lg:items-start lg:gap-[60px]">
                    <div className="flex flex-col gap-[24px] lg:gap-[40px]">
                        <Typography variant="h1" className="lg:text-start">
                            Contact US
                        </Typography>
                        <Typography variant="body1" className="lg:text-start">
                            Join the community. Get all the latest news and updates from us!
                        </Typography>
                    </div>
                    <div className="flex flex-col gap-[24px] lg:flex-row lg:gap-[40px]">
                        <ContactItem
                            image={MailImage}
                            link="mailto:info@shiftdao.io"
                            title="E-mail"
                            subtitle="info@shiftdao.io"
                            bg="radial-gradient(50% 50% at 50% 50%, #BB3BF5 0%, rgba(192, 69, 247, 0) 70%)"
                        />
                        <ContactItem
                            image={TelegramImage}
                            link={tgLink}
                            title="Telegram"
                            subtitle="@shiftdao"
                            bg="radial-gradient(50% 50% at 50% 50%, #61A0FF 0%, rgba(131, 218, 255, 0) 70%)"
                        />
                        <ContactItem
                            image={TwitterImage}
                            link={twitterLink}
                            title="Twitter"
                            subtitle="@SHIFT_DAO"
                            bg="radial-gradient(50% 50% at 50% 50%, #61A0FF 0%, rgba(131, 218, 255, 0) 70%)"
                        />
                    </div>
                </div>
                <div style={{border: ' 1px solid rgba(180, 205, 255, 0.2)'}} />
            </Container>
            <div className={classes.bg} />
        </div>
    );
}
