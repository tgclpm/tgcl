import Link from 'next/link';

import classes from './Partners.module.css';

import Container from 'src/components/atoms/Container';

import Typography from 'src/components/atoms/Typography';

export default function PartnersFrame() {
    return (
        <>
            <Container>
                <Typography variant="h2" className="mb-12 lg:mb-[60px] lg:text-start">
                    project PARTNERS
                </Typography>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
                    <div className="flex flex-col space-y-[24px] lg:space-y-[40px]">
                        <div className="flex flex-col space-y-[8px] lg:space-y-[10px]">
                            <Typography variant="body1" className="lg:text-start">
                                Onboarded partnerships:
                            </Typography>
                            <Typography variant="h4" className="lg:text-start">
                                100+ influencers
                            </Typography>
                        </div>

                        <div className="flex flex-col space-y-[8px] lg:space-y-[10px]">
                            <Typography variant="body1" className="lg:text-start">
                                Total reach of partners:
                            </Typography>
                            <Typography variant="h4" className="lg:text-start">
                                250M+
                            </Typography>
                        </div>

                        <div className="flex justify-center lg:justify-start">
                            <Link href="https://myseven.io/celebrities" target="_blank" className={classes.link}>
                                Details &gt;&gt;
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-[24px] lg:items-start lg:space-y-[40px]">
                        <Typography variant="body1" className="lg:whitespace-pre-line lg:text-start">
                            With over 100 influencers onboarded prior to the beta release and many more in the pipeline,
                            MySeven’s partners are extensive and rapidly expanding.
                            <br /> <br />
                            As the project expands into further communities and regions, the team aims to have over 500
                            influencer partners within the first year of launching the platform.
                        </Typography>
                    </div>
                </div>
                <div className="my-[80px] h-[1px] bg-light/20 lg:my-[120px]" />
            </Container>
        </>
    );
}
