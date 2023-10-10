import NextImage from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import screenshot0 from '../../../screenshots/marketplace.png';

import screenshot1 from '../../../screenshots/screenshot1.png';

import screenshot10 from '../../../screenshots/screenshot10.png';

import screenshot2 from '../../../screenshots/screenshot2.png';

import screenshot3 from '../../../screenshots/screenshot3.png';

import screenshot4 from '../../../screenshots/screenshot4.png';
import screenshot5 from '../../../screenshots/screenshot5.png';
import screenshot6 from '../../../screenshots/screenshot6.png';
import screenshot7 from '../../../screenshots/screenshot7.png';
import screenshot8 from '../../../screenshots/screenshot8.png';
import screenshot9 from '../../../screenshots/screenshot9.png';

import Container from 'src/components/atoms/Container';
import Typography from 'src/components/atoms/Typography';
import Carousel from 'src/components/organisms/Carousel';

const screenshots = [
    {url: screenshot0, width: 740, height: 450},
    {url: screenshot1, width: 638, height: 500},
    {url: screenshot2, width: 740, height: 425},
    {url: screenshot3, width: 618, height: 500},
    {url: screenshot4, width: 740, height: 500},
    {url: screenshot5, width: 715, height: 500},
    {url: screenshot6, width: 623, height: 500},
    {url: screenshot7, width: 714, height: 500},
    {url: screenshot8, width: 665, height: 500},
    {url: screenshot9, width: 563, height: 500},
    {url: screenshot10, width: 612, height: 500},
];

export default function ScreenshotsFrame() {
    return (
        <>
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
                                alt={`marketplace screenshot ${i}`}
                                className="max-h-[500px] rounded-[20px]"
                                width={img.width}
                                height={img.height}
                            />
                        </div>
                    ))}
                </Carousel>
                <div className="my-[80px] h-[1px] bg-light/20 lg:my-[120px]" />
            </Container>
        </>
    );
}
