import Container from 'src/components/atoms/Container';

import Typography from 'src/components/atoms/Typography';

export default function PartnersFrame() {
    return (
        <>
            <Container>
                <Typography variant="h2" className="mb-12 lg:mb-[60px] lg:text-start">
                    project PARTNERS
                </Typography>

                <div className="grid gap-7 lg:grid-cols-2 lg:gap-10">
                    <div>
                        <Typography variant="body1" className="lg:whitespace-pre-line lg:text-start">
                            The platform is designed and developed by an experienced medical diagnostic provider in Asia
                            - ECMP, that has over 5 years of experience in the Industry.
                            <br /> <br />
                            The existing network of medical assets under the parent group umbrella has been supported
                            and partially owned by Swiss investors (ACA Investments) and large Japanese investment
                            banks.
                        </Typography>
                    </div>

                    <div className="flex items-center">
                        <Typography variant="body1" className="lg:whitespace-pre-line lg:text-start">
                            The project is supported by multiple blockchain and finance experts and is a key client of
                            the advisory firms - Octave Advisory and Catena.mba.
                        </Typography>
                    </div>
                </div>
                <div className="my-[80px] h-[1px] bg-light/20 lg:my-[120px]" />
            </Container>
        </>
    );
}
