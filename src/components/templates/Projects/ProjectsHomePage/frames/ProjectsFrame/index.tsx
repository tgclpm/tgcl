import classes from './Projects.module.css';

import Container from 'src/components/atoms/Container';

import Typography from 'src/components/atoms/Typography';

export default function ProjectsFrame() {
    return (
        <div className="relative z-[1]">
            <div className={classes.radial_bg1} />
            <div className={classes.radial_bg2} />
            <Container>
                <div className="flex flex-col gap-[64px] py-[80px]  lg:gap-[40px] lg:py-[120px]">
                    <div>
                        <Typography variant="h1" className="lg:text-start">
                            Projects
                        </Typography>
                    </div>
                    <div className="flex flex-col gap-[16px] lg:gap-[32px]">
                        <div>
                            <Typography variant="body1" className="lg:text-start">
                                SHIFT DAO selects projects that have the potential to shift the world towards innovative
                                and disruptive products that create value and impact on a global scale. We vet the
                                projects based on the product/service scalability, experience of the founding teams, and
                                potential upside valuation of the companies.
                            </Typography>
                        </div>

                        <div>
                            <Typography variant="body1" className="lg:text-start">
                                In line with our mission to facilitate inclusive growth with the masses, we put early
                                investment opportunities in approved companies to the very users they target. Users,
                                investors, stakeholders and the team will have equal opportunities to benefit from the
                                growth of the projects.
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body1" className="lg:text-start">
                                Our intensive review process powered by a team of industry veteran advisors, coupled
                                with mass consensus from retail investors positions SHIFT DAO as a disruptive DAO with
                                the best investment opportunities for investors
                            </Typography>
                        </div>
                    </div>
                </div>

                <div className="h-[1px] bg-light/20" />
            </Container>
        </div>
    );
}
