import {fCurrency} from '../../../../../../utils/formatNumber';
import useInitialContractData from '../../../../../hooks/useInitialContractData';
import {formatDateGST, myseven, mySevenStageDuration, mySevenStageStarts} from '../../../ProjectsHomePage/config';

import stage1 from './images/world-stage-1.png';
import stage2 from './images/world-stage-2.png';

import stage3 from './images/world-stage-3.png';

import stage4 from './images/world-stage-4.png';

import StageItem from './StageItem';

import Container from 'src/components/atoms/Container';
import Typography from 'src/components/atoms/Typography';

export default function StagesFrame() {
    const {initialData} = useInitialContractData();

    if (!initialData) {
        return null;
    }

    const sold = Math.floor(initialData.allStartingTokens) - Math.floor(initialData.allAvailableTokensCount);

    return (
        <div className="relative z-[5]">
            <Container>
                <Typography variant="h2" className="mb-[64px] lg:mb-[60px]">
                    Shift DAO myseven sale
                </Typography>
                <div className="flex flex-col space-y-[24px] lg:space-y-[60px]">
                    <StageItem
                        title="Stage 1 - MIDDLE EAST"
                        image={stage1.src}
                        hardCap="2,500,000"
                        softCap="250,000"
                        onSale="250,000,000 "
                        alreadySold={fCurrency(sold)}
                        startDate={mySevenStageStarts.stage1}
                        duration={mySevenStageDuration['stage1']}
                        displayDate={formatDateGST(mySevenStageStarts.stage1)}
                        displayEndDate={myseven.endDate}
                        defaultEnded={Boolean(process.env.NEXT_PUBLIC_MY_SEVEN_STAGE_1_ENDED)}
                        isOnSale
                    />

                    <StageItem
                        title="Stage 2 - LATIN & Central AMerica"
                        image={stage2.src}
                        hardCap="2,500,000"
                        onSale="250,000,000 "
                        // defaultEnded={Boolean(process.env.NEXT_PUBLIC_MY_SEVEN_STAGE_2_ENDED)}
                    />

                    <StageItem
                        title="Stage 3 - South East Asia"
                        image={stage3.src}
                        hardCap="2,500,000"
                        onSale="250,000,000 "
                        // startDate={mySevenStageStarts.stage3}
                        // duration={7}
                        // displayDate={formatDateICT(mySevenStageStarts.stage3)}
                        defaultEnded={Boolean(process.env.NEXT_PUBLIC_MY_SEVEN_STAGE_3_ENDED)}
                    />

                    <StageItem
                        title="Stage 4 - AFRICA"
                        image={stage4.src}
                        hardCap="2,500,000"
                        onSale="250,000,000 "
                        // startDate={mySevenStageStarts.stage4}
                        // duration={7}
                        // displayDate={formatDateWAT(mySevenStageStarts.stage4)}
                        defaultEnded={Boolean(process.env.NEXT_PUBLIC_MY_SEVEN_STAGE_4_ENDED)}
                    />
                </div>

                <div className="my-[80px] h-[1px] bg-light/20 lg:my-[120px]" />
            </Container>
        </div>
    );
}
