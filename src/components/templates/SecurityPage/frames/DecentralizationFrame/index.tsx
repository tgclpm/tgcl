import NextImage from 'next/image';

import WrapperBgDesktop from './chain.png';

import Container from 'src/components/atoms/Container';
import Spacer from 'src/components/atoms/Spacer';

import Typography from 'src/components/atoms/Typography';

export default function WhyDaoFrame() {
    return (
        <div className="relative z-[1]">
            <Container>
                <div className="flex h-full w-full flex-col pb-[57px] lg:flex-row lg:pb-[120px]">
                    <div className="mr-[10px] hidden lg:block">
                        <NextImage
                            src={WrapperBgDesktop}
                            alt=""
                            width={355}
                            height={357}
                            className="max-w-fit object-cover"
                        />
                    </div>
                    <div className="pt-[60px]">
                        <Typography
                            variant="h1"
                            className="mb-[24px] !text-[32px] lg:mb-[40px] lg:text-start lg:!text-[55px]"
                        >
                            Decentralization
                        </Typography>

                        <div className="flex h-[257px] justify-center lg:hidden">
                            <NextImage
                                src={WrapperBgDesktop}
                                alt=""
                                width={255}
                                height={257}
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <Typography variant="body1" className="!text-[16px] lg:text-start lg:!text-[18px]">
                                One of the main advantages of a DAO is that it is decentralized, meaning that it is not
                                controlled by a single entity. This can help to mitigate some of the risks associated
                                with traditional centralized organizations, such as a single point of failure or the
                                potential for corruption.
                            </Typography>
                        </div>
                    </div>
                </div>
            </Container>
            <Spacer variant="v3" />
        </div>
    );
}
