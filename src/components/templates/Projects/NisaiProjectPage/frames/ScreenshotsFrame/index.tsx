import NextImage from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import image from '../../images/nisai-about.png';
import image1 from '../../images/nisai-about1.png';
import image2 from '../../images/nisai-about2.png';

import image3 from '../../images/nisai-about3.png';

import image4 from '../../images/nisai-about4.png';

import classes from './NisaiScreens.module.css';

import Container from 'src/components/atoms/Container';

import Typography from 'src/components/atoms/Typography';

import Carousel from 'src/components/organisms/Carousel';

const images = [
    {url: image1, width: 740, height: 450},
    {url: image2, width: 740, height: 450},
    {url: image3, width: 740, height: 450},
    {url: image, width: 740, height: 450},
    {url: image4, width: 740, height: 450},
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
                    {images.map((img, i) => (
                        <div
                            key={img.url.src}
                            className="relative mx-[5px] flex items-center justify-center lg:mx-0 lg:h-[500px] lg:px-[110px]"
                        >
                            <NextImage
                                src={img.url.src}
                                alt={`nisai ${i}`}
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
