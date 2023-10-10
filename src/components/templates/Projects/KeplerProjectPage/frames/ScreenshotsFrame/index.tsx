import NextImage from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import screenshot1 from '../../screenshots/screenshot1.png';

import screenshot2 from '../../screenshots/screenshot2.png';

import screenshot3 from '../../screenshots/screenshot3.png';

import screenshot4 from '../../screenshots/screenshot4.png';

import classes from './KeplerScreens.module.css';

import Container from 'src/components/atoms/Container';

import Typography from 'src/components/atoms/Typography';

import Carousel from 'src/components/organisms/Carousel';

const screenshots = [
    {url: screenshot1, width: 740, height: 450},
    {url: screenshot2, width: 740, height: 450},
    {url: screenshot3, width: 740, height: 450},
    {url: screenshot4, width: 740, height: 450},
];

export default function ScreenshotsFrame() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.radial_purple} />
            <div className={classes.radial_blue} />
            <Container>
                <Typography variant="h2" className="mb-12 lg:mb-[60px]">
                    SCREENSHOTS
                </Typography>

                <Carousel>
                    {screenshots.map((img, i) => (
                        <div
                            key={img.url.src}
                            className="relative mx-[5px] flex items-center justify-center lg:mx-0 lg:h-[500px] lg:px-[110px]"
                        >
                            <NextImage
                                src={img.url.src}
                                alt={`kepler shot ${i + 1}`}
                                className="max-h-[500px]"
                                width={img.width}
                                height={img.height}
                            />
                        </div>
                    ))}
                </Carousel>
                <div className="my-[80px] h-[1px] bg-light/20 lg:my-[120px]" />
            </Container>
        </div>
    );
}
