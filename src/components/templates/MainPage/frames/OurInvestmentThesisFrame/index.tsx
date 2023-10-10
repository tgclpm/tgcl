import useMobile from '../../../../../hooks/useMobile';
import Container from '../../../../atoms/Container';
import Typography from '../../../../atoms/Typography';

export default function OurInvestmentThesisFrame() {
    const mobile = useMobile();
    return (
        <div className="relative z-[2]">
            <Container>
                <div className="flex flex-col gap-[57px] py-[57px] lg:grid lg:grid-cols-6 lg:gap-[40px] lg:py-[120px]">
                    <div className="lg:col-span-3">
                        <Typography variant="h2" className={mobile ? 'text-center' : `text-start`}>
                            Our Investment Thesis
                        </Typography>
                    </div>
                    <div className="flex flex-col gap-[57px] lg:col-span-3 lg:gap-[60px]">
                        <div>
                            <Typography variant="h4" className={mobile ? 'text-center' : `text-start`}>
                                Verification from industry veterans
                            </Typography>
                            <div
                                style={{background: 'linear-gradient(90deg, #1282E4 0%, #0FD3E1 100%)'}}
                                className="my-[24px] h-[1px] lg:my-[30px]"
                            />
                            <Typography variant="body1" className={mobile ? 'text-center' : `text-start`}>
                                Our projects are heavily vetted by a team of various industry experts and blockchain
                                veterans before being listed on SHIFT DAO.
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="h4" className={mobile ? 'text-center' : `text-start`}>
                                Identify fast growing products
                            </Typography>
                            <div
                                style={{background: 'linear-gradient(90deg, #1282E4 0%, #0FD3E1 100%)'}}
                                className="my-[24px] h-[1px] lg:my-[30px]"
                            />
                            <Typography variant="body1" className={mobile ? 'text-center' : `text-start`}>
                                The Shift DAO focuses on early to growth stage investments, targeting projects expected
                                to grow rapidly with scale operations. Shift DAO invests through a registered SPV and
                                investors are issued a digital token representing the funded campaign.
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="h4" className={mobile ? 'text-center' : `text-start`}>
                                Early to growth stage investments
                            </Typography>
                            <div
                                style={{background: 'linear-gradient(90deg, #1282E4 0%, #0FD3E1 100%)'}}
                                className="my-[24px] h-[1px] lg:my-[30px]"
                            />
                            <Typography variant="body1" className={mobile ? 'text-center' : `text-start`}>
                                The Shift DAO focuses on early to growth stage investments, targeting projects expected
                                to grow rapidly with scale operations. Shift DAO invests through a registered SPV and
                                investors are issued a digital token representing the funded campaign
                            </Typography>
                        </div>
                    </div>
                </div>
                <div style={{border: ' 1px solid rgba(180, 205, 255, 0.2)'}} />
            </Container>
        </div>
    );
}
