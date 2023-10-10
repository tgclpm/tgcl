import WrapperBgDesktop from './1.png';

import WrapperBgMobile from './2.png';

import Container from 'src/components/atoms/Container';

import Spacer from 'src/components/atoms/Spacer';

import Typography from 'src/components/atoms/Typography';
import useMobile from 'src/hooks/useMobile';

export default function WhyDaoFrame() {
    const mobile = useMobile();

    return (
        <div className="relative">
            <div
                className={`absolute top-[114px] left-0 mx-0 min-h-[450px] w-full text-center lg:top-[-5%] lg:min-h-[600px] ${
                    mobile ? 'bgmobile' : 'bgdesktop'
                }`}
            />
            <Container>
                <div className="relative flex h-full w-full flex-col py-[80px] lg:py-[120px]">
                    <div className="z-10 w-full">
                        <Typography
                            variant="h2"
                            className="pb-[40px] text-center !text-[32px] lg:!text-left lg:!text-[55px]"
                        >
                            WHY DAO?
                        </Typography>
                    </div>
                    <div className="z-10 mt-[260px] flex flex-col justify-between lg:mt-[40px] lg:flex-row">
                        <div className="lg:w-[460px]">
                            <Typography variant="body1" className="pb-[40px] text-center lg:!text-left">
                                Our DAO helps investors easily gain exposure to verified and vetted projects while being
                                protected through community consensus on investment actions.
                            </Typography>
                        </div>
                        <div className="lg:w-[460px]">
                            <Typography variant="body1" className="text-center lg:pb-[40px] lg:!text-left">
                                The upside, risks, and research will be analyzed among numerous users, bringing added
                                safety for all investors.
                            </Typography>
                        </div>
                    </div>
                </div>
            </Container>
            <Spacer variant="v3" />
            <style jsx>
                {`
                    .bgmobile {
                        background: no-repeat 50% 1rem / 90% 60% url(${WrapperBgMobile.src});
                    }

                    .bgdesktop {
                        background: no-repeat 31% 0rem / 100% 142% url(${WrapperBgDesktop.src});
                    }
                `}
            </style>
        </div>
    );
}
