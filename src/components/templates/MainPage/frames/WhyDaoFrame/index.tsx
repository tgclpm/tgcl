import useMobile from '../../../../../hooks/useMobile';
import Container from '../../../../atoms/Container';
import Typography from '../../../../atoms/Typography';

export default function WhyDaoFrame() {
    const mobile = useMobile();
    return (
        <div className="relative z-[2]">
            <Container>
                <div className="flex flex-col gap-[57px] py-[57px] lg:grid lg:grid-cols-6 lg:gap-[60px] lg:py-[120px]">
                    <div className="flex flex-col gap-[20px] lg:col-span-7">
                        <Typography variant="h3" style={{textAlign: mobile ? 'center' : `left`}}>
                            Why DAO?
                        </Typography>
                        <Typography variant="body1" style={{textAlign: mobile ? 'center' : `left`}}>
                            Shift DAO helps investors easily gain exposure to verified and vetted projects while being
                            protected through community consensus on investment actions. The upside, risks, and research
                            will be analyzed among numerous users, bringing added safety for all investors.
                        </Typography>
                    </div>
                    <div className="flex flex-col gap-[20px] lg:col-span-7">
                        <Typography variant="h3" style={{textAlign: mobile ? 'center' : `left`}}>
                            Why is tokenized equity the future?
                        </Typography>
                        <Typography variant="body1" style={{textAlign: mobile ? 'center' : `left`}}>
                            Investors have been made wary of web 3 investments through token form as the value of the
                            freely floating digital assets are hard to control and turn into high-risk speculative
                            instruments quickly. By tokenizing equity, we are ensuring that the investment has intrinsic
                            value that can be well defined by the project’s operational success while keeping the
                            investment liquid and freely tradeable between investors.
                        </Typography>
                    </div>
                </div>
                <div style={{border: ' 1px solid rgba(180, 205, 255, 0.2)'}} />
            </Container>
        </div>
    );
}
