import NextImage from 'next/image';

import Link from 'next/link';

import screenshot from '../../screenshots/screenshot3.png';

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

                <NextImage
                    src={screenshot}
                    alt="kepler shot 3"
                    className="mb-[60px] hidden lg:block"
                    width={960}
                    height={0}
                />

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
                    <div className="flex flex-col space-y-[24px] lg:space-y-[40px]">
                        <div className="flex flex-col space-y-[8px] lg:space-y-[10px]">
                            <Typography variant="body1" className="lg:text-start">
                                Start of the project development:
                            </Typography>
                            <Typography variant="h4" className="lg:text-start">
                                June 2021
                            </Typography>
                        </div>

                        <div className="flex flex-col space-y-[8px] lg:space-y-[10px]">
                            <Typography variant="body1" className="lg:text-start">
                                Current status:
                            </Typography>
                            <Typography variant="h4" className="lg:text-start">
                                Project is developing their MSP
                            </Typography>
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-[24px] lg:items-start lg:space-y-[40px]">
                        <NextImage src={screenshot} alt="kepler shot 3" className="lg:hidden" width={343} height={0} />
                        <Link
                            href="https://www.projectkepler.vision/"
                            target="_blank"
                            className={`${classes.link} lg:!mt-0`}
                        >
                            Web
                        </Link>
                        <Link
                            href="https://pitch.com/public/1f9dd5b5-7c5f-48c5-b563-998ee4e6cfa6"
                            target="_blank"
                            className={classes.link}
                        >
                            Pitchdeck
                        </Link>
                        <Link
                            href="https://kepler-group.gitbook.io/project-kepler-whitepaper-v2.0/outline/introduction"
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
