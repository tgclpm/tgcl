import NextImage from 'next/image';

import roi from './nisai-project-roi.png';

import classes from './ROI.module.css';

import Container from 'src/components/atoms/Container';

import Typography from 'src/components/atoms/Typography';

export default function ROIFrame() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.radial_bg} />
            <Container>
                <div className="grid lg:grid-cols-2 lg:gap-10">
                    <div className="flex flex-col space-y-[24px] lg:space-y-[40px]">
                        <Typography variant="h2" className="lg:text-start">
                            PROJECT ROI
                        </Typography>

                        <div className="flex items-center justify-center lg:hidden">
                            <NextImage src={roi} alt="project roi" className="" width={300} height={0} />
                        </div>

                        <Typography variant="body1" className="lg:text-start">
                            The NISAI investment ties directly to the platform earnings as well as the first set of
                            assets that will be tokenized and launched in the ecosystem. The first assets, medical
                            diagnostic imaging, have high IRRs while the platform’s earnings are directly linked to the
                            number of assets tokenized and raised through the platform!
                        </Typography>
                    </div>

                    <div className="hidden items-center justify-center lg:flex">
                        <NextImage src={roi} alt="project roi" className="" width={460} height={0} />
                    </div>
                </div>
                <div className="my-[80px] h-[1px] bg-light/20 lg:mb-[120px]" />
            </Container>
        </div>
    );
}
