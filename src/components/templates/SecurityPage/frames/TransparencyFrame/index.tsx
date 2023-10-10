import WrapperBgDesktop from './1.png';

import Container from 'src/components/atoms/Container';
import Spacer from 'src/components/atoms/Spacer';

import Typography from 'src/components/atoms/Typography';

export default function TransparencyFrame() {
    return (
        <div>
            <Container>
                <div className="flex h-full w-full flex-col py-[57px] lg:flex-row lg:py-[120px]">
                    <div className="flex flex-col lg:mr-[160px] lg:flex-row">
                        <div>
                            <Typography
                                variant="h1"
                                className="pb-[40px] text-center !text-[32px] lg:!text-left lg:!text-[55px]"
                            >
                                <p>Transparency</p>
                            </Typography>
                            <div className="mx-auto mb-[24px] flex w-full justify-center lg:hidden">
                                <div
                                    className="z-10 h-[207px] w-[200px] bg-[0rem_0rem] bg-no-repeat"
                                    style={{
                                        backgroundImage: `url(${WrapperBgDesktop.src})`,
                                        backgroundSize: '100%',
                                    }}
                                />
                            </div>
                            <Typography
                                variant="body1"
                                className="text-center !text-white/80 lg:pb-[40px] lg:!text-left"
                            >
                                Because a DAO is run by code, it can be transparent and auditable, which can help to
                                increase trust among stakeholders. This can provide investors with greater visibility
                                into the operations of the DAO and help to reduce the risk of fraud or mismanagement.
                            </Typography>
                        </div>
                    </div>
                    <div className="hidden h-full lg:block">
                        <div
                            className="z-10 h-[339px] w-[368px] bg-[0rem_0rem] bg-no-repeat"
                            style={{
                                backgroundImage: `url(${WrapperBgDesktop.src})`,
                                backgroundSize: '80%',
                            }}
                        />
                    </div>
                </div>
            </Container>
            <Spacer variant="v3" />
        </div>
    );
}
