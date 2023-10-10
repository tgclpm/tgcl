import Container from 'src/components/atoms/Container';
import Spacer from 'src/components/atoms/Spacer';

import Typography from 'src/components/atoms/Typography';

export default function WhyDaoFrame() {
    return (
        <div style={{}}>
            <Container>
                <div className="h-full w-full py-[80px] lg:py-[120px]">
                    <div className="flex flex-col justify-between">
                        <Typography
                            variant="h1"
                            className="relative z-10 pb-[40px] text-center !text-[40px] lg:!text-left"
                        >
                            Our Story
                        </Typography>
                        <div>
                            <Typography variant="body1" className="pb-[40px] text-center lg:!text-left">
                                <p>
                                    United by the passion of disruptive technology, a group of blockchain enthusiasts
                                    and veterans came
                                </p>
                                <p>
                                    together with a united vision of creating a decentralized autonomous organization
                                    (DAO) to democratize
                                </p>
                                <p>access to funding and investment opportunities in the blockchain ecosystem. </p>
                            </Typography>
                        </div>
                    </div>
                </div>
            </Container>
            <Spacer variant="v3" />
        </div>
    );
}
