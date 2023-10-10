import NextImage from 'next/image';

import Link from 'next/link';

import marketplace from '../../../screenshots/marketplace.png';

import classes from './AboutProject.module.css';

import Container from 'src/components/atoms/Container';

import Typography from 'src/components/atoms/Typography';

export default function AboutProject() {
    return (
        <div className="relative z-[1]">
            <Container>
                <Typography variant="h2" className="mb-12 lg:mb-[60px] lg:text-start">
                    About project
                </Typography>

                <NextImage
                    src={marketplace}
                    alt="marketplace"
                    className="mb-[60px] hidden rounded-[20px] lg:block"
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
                                October 2021
                            </Typography>
                        </div>

                        <div className="flex flex-col space-y-[8px] lg:space-y-[10px]">
                            <Typography variant="body1" className="lg:text-start">
                                Current status:
                            </Typography>
                            <Typography variant="h4" className="lg:text-start">
                                Project is on <br /> closed beta testing
                            </Typography>
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-[24px] lg:items-start lg:space-y-[40px]">
                        <NextImage src={marketplace} alt="marketplace" className="lg:hidden" width={343} height={0} />
                        <Link href="https://myseven.io/" target="_blank" className={`${classes.link} lg:!mt-0`}>
                            Web
                        </Link>
                        <Link href="https://myseven.io/company/roadmap" target="_blank" className={classes.link}>
                            RoadMap
                        </Link>
                        <Link href="https://myseven.io/files/pitchdeck.pdf" target="_blank" className={classes.link}>
                            Pitchdeck
                        </Link>
                        <Link href="/files/one_pager.pdf" target="_blank" className={classes.link}>
                            One-pager (WhitePaper)
                        </Link>
                        <Link href="https://myseven.io/company/our-team" target="_blank" className={classes.link}>
                            Team
                        </Link>
                    </div>
                </div>
                <div className="my-[80px] h-[1px] bg-light/20 lg:my-[120px]" />
            </Container>
        </div>
    );
}
