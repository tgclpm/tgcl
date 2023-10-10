import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import {formatDateGST, kepler, myseven, nisai} from '../../config';

import Kepler from '../PlannedFrame/KeplerProject/kepler.png';

import Nisai from '../PlannedFrame/NissaiProject/nissai.png';

import IncomingItem from './IncomingItem';

import MySeven from './my-seven.png';

import Container from 'src/components/atoms/Container';
import Typography from 'src/components/atoms/Typography';

dayjs.extend(utc);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mySevenProps = {
    startDate: myseven.startDate,
    duration: myseven.duration,
    title: 'My seven \nproject',
    image: MySeven.src,
    description:
        'MY SEVEN project is poised to revolutionize how influencers and digital content creators interact with their fanbases. Project consists of:',
    points: ['Fan engagement mobile apps', 'Exclusive NFT marketplaces'],
    hardCap: '10’000’000',
    more: 'Up to 15% bonuses',
    formatedDate: formatDateGST(myseven.startDate),
    onSale: {
        value: '1’000’000’000',
        text: '(20% tokenised equity of business)',
    },
    link: '/projects/my-seven',
};

const nisaiProps = {
    startDate: 'nisai.startDate',
    duration: nisai.duration,
    formatedDate: nisai.startDate,
    title: 'NISAI \nproject',
    image: Nisai.src,
    description:
        'Asset tokenization platform with an emphasis on heavy CAPEX industries with an initial PoC on medical diagnostic assets.',
    hardCap: '1’000’000',
    onSale: {
        value: '500’000',
        text: '(20% tokenised equity)',
    },
    link: '/projects/nisai',
};

const keplerProps = {
    startDate: kepler.startDate,
    formatedDate: kepler.startDate,
    duration: kepler.duration,
    title: 'PROJECT \nKEPLER',
    image: Kepler.src,
    description:
        'White-label custom hyper-realistic metaverse instances powered by Artificial Intelligence  for business and communal usage.',
    hardCap: '500’000',
    onSale: {
        value: '500’000',
        text: '(3.4% tokenised equity)',
    },
    link: '/projects/kepler',
};

export default function IncomingFrame() {
    return (
        <div className="relative z-[2]">
            <Container>
                <div className="flex flex-col gap-[64px] py-[80px]  lg:gap-[60px] lg:py-[120px]">
                    <div>
                        <Typography variant="h2" className="lg:text-start">
                            Incoming
                        </Typography>
                    </div>
                    {nisai.incoming && <IncomingItem {...nisaiProps} />}
                    {kepler.incoming && <IncomingItem {...keplerProps} />}
                </div>

                <div className="h-[1px] bg-light/20" />
            </Container>
        </div>
    );
}
