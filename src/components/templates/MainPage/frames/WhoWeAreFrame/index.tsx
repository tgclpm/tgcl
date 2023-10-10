import Container from '../../../../atoms/Container';
import Typography from '../../../../atoms/Typography';

import classes from './WhoAreWeFrame.module.css';

export default function WhoWeAreFrame() {
    return (
        <div className="">
            <Container>
                <div className="relative z-[1] flex flex-col gap-[57px] pb-[57px] pt-[420px] lg:grid lg:grid-cols-6 lg:gap-[40px] lg:py-[120px]">
                    <div className="lg:col-span-3">
                        <Typography variant="h2" className="text-center lg:text-start">
                            Who we are
                        </Typography>
                        <Typography variant="body1" className="pt-[24px] lg:pt-[40px] lg:text-start">
                            We are Shift DAO.
                            <br /> A team of passionate investors and builders united to identify revolutionary concepts
                            and projects for early investments. We at Shift DAO are constantly identifying, promoting
                            and incubating projects and companies with cutting-edge innovative technologies!
                        </Typography>
                    </div>
                    <div className="lg:col-span-3 lg:mt-[420px]">
                        <div>
                            <Typography variant="h2" className="text-center lg:text-start">
                                what do we shift
                            </Typography>
                            <Typography variant="body1" className="pt-[24px] text-center lg:pt-[40px] lg:text-start">
                                Our vision is to get public investors in at the ground floor for industry
                                paradigm-shifting projects run by qualified and experienced teams. Together, we will
                                play an integral role in helping shape the future!
                            </Typography>
                        </div>
                    </div>
                </div>
                <div style={{border: ' 1px solid rgba(180, 205, 255, 0.2)'}} />
            </Container>
            <div className={classes.bg} />
        </div>
    );
}
