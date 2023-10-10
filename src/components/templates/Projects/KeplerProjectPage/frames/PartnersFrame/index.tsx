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
                            Locked in 15 Web3 brands (with a reach of over 950K).
                            <br /> <br />
                            Locked in KuCoin (IEO) Moonstarter,
                            <br /> <br />
                            Future fast track listing agreements with Binance, Crypto.com, Coinbase.
                        </Typography>
                    </div>

                    <div className="flex items-center">
                        <Typography variant="body1" className="lg:whitespace-pre-line lg:text-start">
                            Immutable X 250K grant and Strategic Partnership project status achieved.
                        </Typography>
                    </div>
                </div>
                <div className="my-[80px] h-[1px] bg-light/20 lg:my-[120px]" />
            </Container>
        </>
    );
}
