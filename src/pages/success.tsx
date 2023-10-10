import type {NextPage} from 'next';
import {memo} from 'react';

import Container from '../components/atoms/Container';
import LargeButton from '../components/atoms/LargeButton/LargeButton';
import Typography from '../components/atoms/Typography';

import Layout from 'src/components/Layout/Layout';

const SuccessPage: NextPage = memo(() => {
    return (
        <Layout>
            <Container>
                <div className="mx-auto box-border flex max-w-[820px] flex-col items-center p-[60px]">
                    <div className="mx-auto mb-[10px] text-center !text-[24px] font-bold uppercase text-white">
                        Congratulations!
                    </div>
                    <Typography variant="body1">You are now a SHIFT DAO MY SEVEN (SDMS) tokens holder.</Typography>
                    <LargeButton className="mx-auto my-[40px]">download your certificate of ownership now</LargeButton>
                    <Typography variant="body1">
                        To get your tokens, create a SDMS address on your wallet and execute your certificate by filling
                        out the claiming form.
                        <br />
                        <br />
                        The instruction how to do this and the link to your certificate are also sent to
                        %buyer_email_address%.
                    </Typography>
                </div>
            </Container>
        </Layout>
    );
});

export default SuccessPage;
