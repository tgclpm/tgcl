import {useModal} from 'connectkit';
import NextImage from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {FC, useCallback, useEffect, useMemo, useState} from 'react';

import {useAccount, useWatchPendingTransactions} from 'wagmi';

import {fCurrency} from '../../../../../utils/formatNumber';
import Spinner from '../../../../atoms/Spinner';
import Typography from '../../../../atoms/Typography';

import BuyResultDialog from '../../../../dialogs/BuyResultDialog';
import useInitialContractData from '../../../../hooks/useInitialContractData';
import Transaction from '../../../Transaction';

import getNumberOfTokensForBUSD, {IGetNumberOfTokensForBUSDResult} from '../../helpers/getNumberOfTokensForBUSDCrypto';

import classes from './BuyTokens.module.css';

import InfoIcon from './InfoCircle.svg';

import {watchAsset} from './watchAsset';

import Checkbox from 'src/components/atoms/Checkbox';
import LargeButton from 'src/components/atoms/LargeButton/LargeButton';
import SelectField from 'src/components/atoms/SelectField';
import {isCurrentMySevenStageTimeEnd} from 'src/components/templates/Projects/ProjectsHomePage/config';
import useScrollToElement from 'src/hooks/useScrollToElement';

import {LotteryABI as lotteryabi} from '../../../../../abi/LotteryABI';
import {
    fetchBalance,
    getAccount,
    getContract,
    getNetwork,
    prepareWriteContract,
    readContract,
    waitForTransaction,
    writeContract,
} from '@wagmi/core';
import {BigNumber} from 'ethers';
import {Address} from 'wagmi';
import AddressField from 'src/components/atoms/AddressInput';
var tickets = '';
type Props = {
    onBack: VoidFunction;
};
const BuyTokensByCryptoFrame: FC<Props> = ({onBack}) => {
    const {
        query: {block},
    } = useRouter();
    
    const scroll = useScrollToElement(`#buy-tokens`);

    useEffect(() => {
        if (block === 'buy') {
            scroll();
        }
    }, [block, scroll]);
    const [currentTicket, setCurrentTicket] = useState(0);
    const [prizeMoney, setPrizeMoney] = useState("0");
    const [agree, setAgree] = useState(false);
    const [value, setValue] = useState<string>('');
    const [gift, setGift] = useState<string>('');
    const [isStarting, setIsStarting] = useState(false);
    const [isChecking, setIsChecking] = useState(false);
    const [resultDialogStatus, setResultDialogStatus] = useState<'hidden' | 'success' | 'error'>('hidden');
    const [calculatedData, setCalculatedData] = useState<null | IGetNumberOfTokensForBUSDResult>(null);
    const {isConnected} = useAccount();
    const {setOpen} = useModal();
    const {initialData} = useInitialContractData();

    const onChangeHandle = (value: string) => {
        // eslint-disable-next-line no-console
        console.log('value', value);
        setValue(value);
    };

    const onGiftChangeHandle = (gift: string) => {
        // eslint-disable-next-line no-console
        console.log('gift', gift);
        setGift(gift);
    };

    useWatchPendingTransactions({
        listener(transaction) {
            // eslint-disable-next-line no-console
            console.log('useWatchPendingTransactions fired', transaction);
        },
    });

    const sendTransactionHandle = () => {
        if (isConnected) {
            setIsStarting(true);
        } else {
            setOpen(true);
        }
    };

    const checkTicketsHandle = async () => {
        if (isConnected) {
            setIsChecking(true);
            const myTickets: any = await readContract({
                address: process.env.NEXT_PUBLIC_AX_LOTTERY as Address,
                abi: lotteryabi,
                functionName: 'checkMyTickets',
                args: [getAccount().address]
            });
            console.log(myTickets);
            var i = 1;
            tickets = '';
            for (var item of myTickets) {
                var n = parseInt(item._hex, 16).toString();
                if(n == '0') break;
                if(i == 1){
                    tickets += 'From ' + n;
                    i = 2;
                }
                else{
                    tickets += ' To ' + n + '\n';
                    i = 1;
                }
            }
            setIsChecking(false);
        }
    };

    const getLotteryData = async () => {
        
        const ticketCount: any = await readContract({
            address: process.env.NEXT_PUBLIC_AX_LOTTERY as Address,
            abi: lotteryabi,
            functionName: 'currentTicket',
        });
        const pm: any = await readContract({
            address: process.env.NEXT_PUBLIC_AX_LOTTERY as Address,
            abi: lotteryabi,
            functionName: 'prizeMoney',
        });
        return {pm, ticketCount};
    };

    const afterSubmitHandle = useCallback(async (status: 'success' | 'error') => {
        setIsStarting(false);
        setResultDialogStatus(status);
        if (status === 'success') {
            setTimeout(() => watchAsset(), 2000);
        }
    }, []);

    const onCloseHandle = useCallback(() => setResultDialogStatus('hidden'), []);

    const changeValueHandler = useCallback((amount: number, categoriesData: any, saleData: any) => {
        const result = getNumberOfTokensForBUSD(amount, categoriesData, saleData);
        // eslint-disable-next-line no-console
        console.log('getNumberOfTokensForBUSD result', result);
        setCalculatedData(result);
    }, []);

    useEffect(() => {
        getLotteryData().then(data => {
            // eslint-disable-next-line no-console
            const prizeMoney = (parseInt(data.pm._hex, 16) * 10 ** -18).toFixed(3);
            const ticketCount = parseInt(data.ticketCount._hex, 16);
            console.log('getLotteryData', prizeMoney, ticketCount);
            setPrizeMoney(prizeMoney);
            setCurrentTicket(ticketCount -1);
        });
    }, []);

    useEffect(() => {
        
    }, [value, initialData, changeValueHandler]);

    return (
        <>
            {isStarting && !!value.length && (
                <Transaction purchaseAmount={Number(value)} giftAddress={gift} afterSubmitCb={afterSubmitHandle} />
            )}

            <BuyResultDialog count={Number(value)} status={resultDialogStatus} onClose={onCloseHandle} />

            <div className="relative z-[1] min-h-[500px] py-[80px] bg-purple lg:py-[120px]">
                <div id="buy-tokens" className="invisible absolute -top-[20px] z-[-5] lg:-top-[100px]" />
                <div className="container">
                    <Typography className="lg:!text-left" variant="h2">
                        Buy Lottery Tickets
                    </Typography>

                    <div className="mt-[48px] grid gap-[48px] lg:mt-[60px] lg:grid-cols-12">
                        <div className="flex flex-col items-center lg:col-span-7 lg:items-start">
                            <Typography className="lg:!text-left" variant="body1">
                                Join the hype and participate in the biggest crypto lottery ever (or so we hope)!
                            </Typography>

                            
                                <SelectField
                                    value={value}
                                    calculatedData={calculatedData}
                                    className="mt-[8px] max-w-[500px] lg:mt-[20px] lg:max-w-none"
                                    onChange={onChangeHandle}
                                />
                        </div>
                        <div className="order-first flex flex-col space-y-[24px] lg:order-none lg:col-span-5 lg:space-y-[30px]">
                            <div className="flex flex-col space-y-[4px]" >
                                <Typography className="mt-[10px] font-bold uppercase lg:!text-left" variant="body2">
                                    {value ? (`You need ` + (parseFloat(value)/100).toFixed(2) + `ETH`) : `Ticket price: 0.01 ETH`}
                                </Typography>
                                <br /><br />
                                <Typography className="!text-white/80 lg:!text-left" variant="body2">
                                    Total prize money: {prizeMoney} ETHEREUM
                                </Typography>
                                <Typography
                                    className="!mt-[24px] lg:!mt-[30px] lg:!text-left lg:!text-[16px]"
                                    variant="body1"
                                >
                                    Number of tickets sold: {currentTicket}
                                </Typography>
                            </div>
                            <div className="!mt-[48px] h-[1px] bg-light/50 lg:hidden" />
                        </div>
                        <div className="flex flex-col items-center lg:col-span-7 lg:items-start">
                            <Typography className="lg:!text-left" variant="body1">
                                Or gift tickets to your favorite people
                            </Typography>

                            
                                <AddressField
                                    value={gift}
                                    className="mt-[8px] max-w-[500px] lg:mt-[20px] lg:max-w-none"
                                    onChange={onGiftChangeHandle}
                                />
                        </div>
                        
                    </div>

                    <div className="mt-[32px] flex justify-center lg:mt-[60px]">
                        <LargeButton
                            disabled={!value || isStarting}
                            onClick={sendTransactionHandle}
                            className="relative !w-full max-w-[500px] lg:max-w-none"
                        >
                            {isStarting ? <Spinner /> : 'Try your luck'}
                        </LargeButton>
                    </div>
                    <br /><br />
                    <div className="mt-[48px] grid gap-[48px] lg:mt-[60px] lg:grid-cols-12">
                        <Typography className="mt-[10px] font-bold uppercase lg:!text-left" variant="body2">
                                        You own the following tickets: {tickets}
                        </Typography>
                    </div>
                    <div className="mt-[32px] flex justify-center lg:mt-[60px]">
                        <LargeButton
                            disabled={!isConnected || isChecking}
                            onClick={checkTicketsHandle}
                            className="relative !w-full max-w-[500px] lg:max-w-none"
                        >
                            {isStarting ? <Spinner /> : 'Check your tickets'}
                        </LargeButton>
                    </div> 
                </div>
            </div>
        </>
    );
};

export default BuyTokensByCryptoFrame;
