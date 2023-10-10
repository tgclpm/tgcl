import classes from './Note.module.css';

import Container from 'src/components/atoms/Container';
import Spacer from 'src/components/atoms/Spacer';
import Typography from 'src/components/atoms/Typography';

export default function NoteFrame() {
    return (
        <div className="relative">
            <Container>
                <div className="flex h-full w-full flex-row justify-center py-[57px] lg:justify-start lg:py-[120px]">
                    <div className="flex flex-row">
                        <div>
                            <Typography
                                variant="body1"
                                className="relative z-10 !text-center !text-[16px] !text-white/80 lg:!text-left lg:!text-[18px]"
                            >
                                It&apos;s important to note that no investment is completely without risk, and it is
                                important for investors to carefully evaluate the specific risks associated with any
                                investment opportunity. However, the decentralized, transparent, and customizable nature
                                of a tokenized equity DAO, as well as the liquidity and fractional ownership options it
                                provides, could make it a relatively safe investment option compared to some traditional
                                alternatives.
                            </Typography>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="w-full lg:hidden">
                <div className={classes.imageWrapperMobile} />
            </div>
            <div className="hidden w-full lg:block">
                <div className={classes.imageWrapper} />
            </div>
            <Spacer variant="v3" />
        </div>
    );
}
