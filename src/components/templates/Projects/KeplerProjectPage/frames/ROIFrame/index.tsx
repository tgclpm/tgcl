import classes from './ROI.module.css';

import Container from 'src/components/atoms/Container';

import Typography from 'src/components/atoms/Typography';

export default function ROIFrame() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.radial_bg} />
            <Container>
                <Typography variant="h2" className="mb-8 lg:mb-10 lg:text-start">
                    PROJECT ROI
                </Typography>
                <div className="grid space-y-[32px] lg:grid-cols-2 lg:gap-10">
                    <div className="flex items-center justify-center lg:justify-start">
                        <Typography variant="body1" className="!font-bold lg:text-start">
                            Industry leading VC support.
                            <br /> <br />
                            Incubated by ImmutableX
                        </Typography>
                    </div>
                    <Typography variant="body1" className="lg:text-start">
                        With DWF Labs leading the round with few follow investors, Project Kepler has strong financial
                        backers that foresee significant growth in value of the company once the product is fully rolled
                        out and once planned features are all fully developed.
                        <br /> <br />
                        The project is offering the residual part of their current round to public investors through
                        Shift DAO, allowing retail investors to participate alongside the likes of DWF Labs and other
                        institutional investors!
                    </Typography>
                </div>
                <div className="my-[80px] h-[1px] bg-light/20 lg:mb-[120px]" />
            </Container>
        </div>
    );
}
