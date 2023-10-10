import Container from 'src/components/atoms/Container';
import Spacer from 'src/components/atoms/Spacer';

import Typography from 'src/components/atoms/Typography';

export default function Expertise() {
    return (
        <div style={{}}>
            <Container>
                <div className="flex h-full w-full flex-col py-[78px] lg:flex-row">
                    <div className="h-full justify-between lg:hidden">
                        <Typography variant="h1" className="pb-[40px] !text-center !text-[32px]">
                            <p>Expertise</p>
                            <p>Experience</p>
                            <p>Enthusiasm</p>
                        </Typography>
                    </div>
                    <div className="flex flex-col self-center lg:mr-[80px] lg:w-[460px] lg:flex-row">
                        <div className="flex flex-col gap-y-[16px] lg:gap-y-[24px]">
                            <Typography variant="body1" className="!text-center !text-white/80 lg:!text-left">
                                Our team is composed of <span className="font-bold">experts</span> in various fields,
                                including finance, law, e-sports, creative arts and more, who have been involved in the
                                blockchain industry for numerous years.
                            </Typography>
                            <Typography variant="body1" className="!text-center !text-white/80 lg:!text-left">
                                Our team includes <span className="font-bold">experienced</span> developers who have a
                                track record of delivering high-quality smart contract code, and legal experts who are
                                well-versed in the latest regulatory developments related to digital assets.
                            </Typography>
                            <Typography variant="body1" className="!text-center !text-white/80 lg:!text-left">
                                Our team shares a strong <span className="font-bold">enthusiasm</span> for innovative
                                and disruptive technologies, and are constantly on the look-out for promising,
                                industry-shaking projects and companies!
                            </Typography>
                        </div>
                    </div>
                    <div className="hidden h-full justify-between lg:block lg:w-[460px]">
                        <Typography variant="h1" className="pb-[40px] !text-right !text-[40px]">
                            <p>Expertise</p>
                            <p>Experience</p>
                            <p>Enthusiasm</p>
                        </Typography>
                    </div>
                </div>
            </Container>
            <Spacer variant="v3" />
        </div>
    );
}
