import NextImage from 'next/image';

import Link from 'next/link';

import nisai from '../../images/nisai-about.png';

import classes from './AboutProject.module.css';

import Container from 'src/components/atoms/Container';

import Typography from 'src/components/atoms/Typography';

export default function AboutProject() {
    return (
        <div className="relative z-[5]">
            <Container>
                <Typography variant="h2" className="mb-12 lg:mb-[60px] lg:text-start">
                    About project
                </Typography>

                <NextImage src={nisai} alt="nisai" className="mb-[60px] hidden lg:block" width={960} height={0} />

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
                    <div className="flex flex-col space-y-[24px] lg:space-y-[40px]">
                        <div className="flex flex-col space-y-[8px] lg:space-y-[10px]">
                            <Typography variant="body1" className="lg:text-start">
                                Start of the project development:
                            </Typography>
                            <Typography variant="h4" className="lg:text-start">
                                April 2022
                            </Typography>
                        </div>

                        <div className="flex flex-col space-y-[8px] lg:space-y-[10px]">
                            <Typography variant="body1" className="lg:text-start">
                                Current status:
                            </Typography>
                            <Typography variant="h4" className="lg:text-start">
                                Project is in MVP development
                            </Typography>
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-[24px] lg:items-start lg:space-y-[40px]">
                        <NextImage src={nisai} alt="nisai" className="lg:hidden" width={343} height={0} />
                        <Link href="https://www.nisai.io/" target="_blank" className={`${classes.link} lg:!mt-0`}>
                            Web
                        </Link>
                        <Link href="https://docsend.com/view/473pzza5va4crwiz" target="_blank" className={classes.link}>
                            Pitchdeck {'\n'}(password - 2022NISAI)
                        </Link>
                        <Link
                            href="https://drive.google.com/file/d/17vfStFmdtFX9mvPhzgy1Fm8iSIx-FrjJ/view"
                            target="_blank"
                            className={classes.link}
                        >
                            Whitepaper
                        </Link>
                    </div>
                </div>
                <div className="my-[80px] h-[1px] bg-light/20 lg:my-[120px]" />
            </Container>
        </div>
    );
}
