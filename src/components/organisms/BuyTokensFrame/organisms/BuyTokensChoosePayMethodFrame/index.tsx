import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {FC, useEffect} from 'react';

import Typography from '../../../../atoms/Typography';

import {isStageOneEnded} from '../../../../templates/Projects/ProjectsHomePage/config';

import applePayIcon from './applePay-icon.svg';

import styles from './buyTokensChoosePayMethodFrame.module.css';
import cryptoIcon from './crypto-icon.svg';
import masterCardIcon from './masterCard-icon.svg';
import sepaIcon from './sepa-icon.svg';
import sofortIcon from './sofort-icon.svg';
import visaIcon from './visa-icon.svg';

import useScrollToElement from 'src/hooks/useScrollToElement';

const Dot = () => (
    <div className="mt-[8px] inline-block h-[6px] min-w-[6px] rounded-full bg-gradient-to-r from-[#1282E4] to-[#0FD3E1] lg:mt-0" />
);
const contractAddress = process.env.NEXT_PUBLIC_AX_DAO;

const bonuses = {
    first_stage: {
        first: ['First 20% sold with', '15% bonus tokens'],
        next: ['Next 45% sold with', '5% bonus tokens'],
    },
    other_stage: {
        first: ['First 15% sold with', '10% bonus tokens'],
        next: ['Next 45% sold with', '5% bonus tokens'],
    },
};

type Props = {
    onChoose: (method: 'card' | 'crypto') => void;
};

const BuyTokensChoosePayMethodFrame: FC<Props> = ({onChoose}) => {
    const {
        query: {block},
    } = useRouter();

    const scroll = useScrollToElement(`#buy-tokens`);

    useEffect(() => {
        if (block === 'buy') {
            scroll();
        }
    }, [block, scroll]);

    const bonusLabel = isStageOneEnded() ? bonuses.other_stage : bonuses.first_stage;

    return (
        <>
            <div className="relative z-[1] min-h-[500px] py-[80px] bg-purple lg:py-[120px]">
                <div id="buy-tokens" className="invisible absolute -top-[20px] z-[-5] lg:-top-[100px]" />
                <div className="container">
                    <Typography className="lg:!text-left" variant="h2">
                        Buy SDMS TOKENS
                    </Typography>

                    <div className="mt-[48px] grid gap-[48px] lg:mt-[60px] lg:grid-cols-12">
                        <div className="flex flex-col items-center lg:col-span-7">
                            <button className={styles.method_item} onClick={() => onChoose('crypto')}>
                                <span>BUY with CRYPTO</span>
                                <Image src={cryptoIcon} alt="" width={34} height={34} />
                            </button>
                            <button
                                className={`${styles.method_item} mt-[30px] !flex-col !items-start`}
                                onClick={() => onChoose('card')}
                            >
                                <span>BUY with card</span>
                                <div className="mt-[10px] flex flex-row gap-2">
                                    <Image src={applePayIcon} width={46} height={30} alt="" />
                                    <Image src={masterCardIcon} width={45} height={30} alt="" />
                                    <Image src={visaIcon} width={45} height={30} alt="" />
                                    <Image src={sofortIcon} width={72} height={30} alt="" />
                                    <Image src={sepaIcon} width={48} height={30} alt="" />
                                </div>
                            </button>
                        </div>
                        <div className="order-1 flex flex-col space-y-[24px] lg:order-none lg:col-span-5 lg:space-y-[30px]">
                            <div className="flex flex-col space-y-[4px]">
                                <Typography className="!text-[14px] lg:!text-left lg:!text-[16px]" variant="body1">
                                    Bonuses inside every stage::
                                </Typography>
                                <div className="flex justify-center space-x-[8px] lg:items-center lg:justify-start">
                                    <Dot />

                                    <Typography className="!mt-0 w-min min-w-fit lg:!text-left" variant="body1">
                                        {bonusLabel.first[0]}&nbsp;
                                        <Typography className="text-left lg:inline-block" variant="subtitle">
                                            {bonusLabel.first[1]}
                                        </Typography>
                                    </Typography>
                                </div>
                                <div className="flex justify-center space-x-[8px] lg:items-center lg:justify-start">
                                    <Dot />

                                    <Typography className="!mt-0 w-min min-w-fit lg:!text-left" variant="body1">
                                        {bonusLabel.next[0]}&nbsp;
                                        <Typography className="text-left lg:inline-block" variant="subtitle">
                                            {bonusLabel.next[1]}
                                        </Typography>
                                    </Typography>
                                </div>
                            </div>

                            <Typography className="!text-[12px] lg:!text-left" variant="body1">
                                The SDMS token has been deployed to the contract address shown below{' '}
                                <Link
                                    href={`https://bscscan.com/address/${contractAddress}`}
                                    target="_blank"
                                    className="break-all text-white underline"
                                >
                                    ({contractAddress})
                                </Link>{' '}
                                and can be imported to your digital wallets.
                            </Typography>
                            <div className="!mt-[48px] h-[1px] bg-light/50 lg:hidden" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuyTokensChoosePayMethodFrame;
