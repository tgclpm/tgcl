import NextImage from 'next/image';

import useMobile from '../../../../../hooks/useMobile';
import Container from '../../../../atoms/Container';
import Typography from '../../../../atoms/Typography';

import Symbol from './symbol.png';
import classes from './WarrenBuffetFrame.module.css';

export default function WarrenBuffetFrame() {
    const mobile = useMobile();
    return (
        <div className="relative z-[1]">
            <Container>
                <div className="flex flex-col gap-[24px] py-[57px] lg:gap-[40px] lg:py-[120px]">
                    <div className="relative flex">
                        {mobile ? (
                            <Typography variant="heading">
                                If you don&apos;t find a <br /> way to make money while you sleep, you <br /> will work
                                until you <br /> die
                            </Typography>
                        ) : (
                            <Typography variant="heading">
                                If you don&apos;t find a way to <br /> make money while you sleep, you will work until
                                you die
                            </Typography>
                        )}

                        <NextImage
                            src={Symbol}
                            alt=""
                            width={mobile ? 25 : 53}
                            height={mobile ? 17 : 37}
                            className="absolute top-0 right-0 object-cover"
                        />
                    </div>

                    <div className="bg-gradient-to-r from-[#1282E4] to-[#0FD3E1] bg-clip-text font-bold text-transparent  lg:text-[30px] lg:leading-none">
                        <span>Warren Buffett</span>
                    </div>
                </div>
                <div style={{border: ' 1px solid rgba(180, 205, 255, 0.2)'}} />
            </Container>
            <div className={classes.bg} />
        </div>
    );
}
