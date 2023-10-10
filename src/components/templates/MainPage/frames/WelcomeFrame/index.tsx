import NextImage from 'next/image';

import useMobile from '../../../../../hooks/useMobile';
import Container from '../../../../atoms/Container';
import Typography from '../../../../atoms/Typography';

import PlanetMobile from './planet-mobile.png';
import Planet from './planet.png';
import classes from './WelcomeFrame.module.css';

export default function WelcomeFrame() {
    const mobile = useMobile();
    return (
        <div className="relative">
            <Container>
                <div className="relative z-[1] pt-[80px] pb-[57px] lg:grid lg:grid-cols-6 lg:gap-[30px] lg:py-[135px]">
                    <div className="flex flex-col lg:col-start-1 lg:col-end-5">
                        <div className="relative overflow-visible">
                            <Typography variant="h1" className="text-center lg:text-start">
                                the great
                            </Typography>
                            <div className="flex flex-col bg-gradient-to-r from-[#1282E4] to-[#0FD3E1]  bg-clip-text text-center text-[84px] font-extrabold leading-[0.88] text-transparent lg:text-start">
                                <span>2023</span>
                                <span>LOTTERY</span>
                            </div>
                            <div className="mt-[48px] grid gap-[48px] lg:mt-[60px] lg:grid-cols-12">
                                <div className="flex flex-col lg:col-span-3">
                                    <Typography variant="h4" className="pt-[40px] text-center lg:text-start">
                                        <span style = {{color: '#3dc746', fontSize: '40px'}}>1</span>
                                    </Typography>
                                    <Typography variant="h4" className="pt-[40px] text-center lg:text-start">
                                    <span style = {{color: '#3dc746', fontSize: '40px'}}>007</span>
                                    </Typography>
                                    <Typography variant="h4" className="pt-[40px] text-center lg:text-start">
                                    <span style = {{color: '#3dc746', fontSize: '40px'}}>61</span>
                                    </Typography>
                                    <br /><br />
                                    <Typography variant="h3" className="text-center lg:text-start">
                                        <span style = {{color: '#3dc746', fontSize: '50px'}}>= 69</span>
                                    </Typography>
                                </div>
                                <div className="flex flex-col lg:col-span-7">
                                    <Typography variant="h4" className="pt-[40px] text-center lg:text-start">
                                        grand winner +
                                    </Typography>
                                    <Typography variant="h4" className="pt-[40px] text-center lg:text-start">
                                        lucky runner ups +
                                    </Typography>
                                    <Typography variant="h4" className="pt-[40px] text-center lg:text-start">
                                        less lucky consolation prizes
                                    </Typography>
                                    <br /><br />
                                    <Typography variant="h3" className="text-center lg:text-start">
                                        total prizes
                                    </Typography>
                                </div>
                            </div>
                            {!mobile && (
                                <div className="absolute h-[1005px] w-[1096px] lg:left-[53%] lg:top-[-52%]">
                                    <NextImage src={Planet} alt="" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
            {mobile && (
                <div className="absolute top-[62%] z-[1] ml-[50%] h-[822px] w-[881px] translate-x-[-57%]">
                    <NextImage src={PlanetMobile} alt="" />
                </div>
            )}
            <div className={classes.bg} />
        </div>
    );
}
