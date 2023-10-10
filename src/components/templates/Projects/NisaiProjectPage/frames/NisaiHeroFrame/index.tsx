import NextImage from 'next/image';

import nisai from './nisai.svg';

import classes from './NisaiHero.module.css';

import Container from 'src/components/atoms/Container';

import LargeButton from 'src/components/atoms/LargeButton/LargeButton';
import Typography from 'src/components/atoms/Typography';

export default function NisaiHeroFrame() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.radial_purple} />
            <div className={classes.radial_blue} />
            <Container>
                <Typography variant="h1" className="mb-[64px] lg:mb-[60px] lg:text-start">
                    Nisai project
                </Typography>

                <div className="mb-[64px] grid space-y-[64px] lg:mb-[40px] lg:grid-cols-6 lg:gap-10 lg:space-y-0">
                    <div className="flex items-start justify-center lg:col-span-2">
                        <NextImage src={nisai} alt="my seven" className="" width={293} height={0} />
                    </div>

                    <div className="flex flex-col space-y-[24px] lg:col-span-4 lg:space-y-[20px]">
                        <Typography variant="h4" className="lg:text-start">
                            General Information
                        </Typography>
                        <Typography variant="body1" className="lg:text-start">
                            NISAI Medical is building an asset tokenization platform that is created with the vision to
                            make investments and distributed ownership more accessible in heavy CAPEX health industries
                            such as medtech and diagnostic services. With initial roll-out in emerging economies where
                            the lack of channels for investments and capital has limited the expansion of medical
                            infrastructure in the region.
                            <br /> <br />
                            NISAI aims to bridge this gap by allowing entrepreneurs, communities, and companies to raise
                            distributed capital from retail investors in return for fragmented ownership of high-value
                            medical assets. The investors are protected with both operational and financial performance
                            data being stored directly on the blockchain, bringing increased transparency and
                            accountability from the asset operators!
                        </Typography>
                    </div>
                </div>

                <LargeButton disabled className="!w-full">
                    SALE START IS TO BE ANNOUNCED
                </LargeButton>
            </Container>
        </div>
    );
}
