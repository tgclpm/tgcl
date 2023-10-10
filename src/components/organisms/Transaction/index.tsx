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
import {memo, useCallback, useEffect} from 'react';
import {Address} from 'wagmi';

import {LotteryABI as lotteryabi} from '../../../abi/LotteryABI';

interface IPros {
    purchaseAmount: number;
    giftAddress: string;
    afterSubmitCb: (status: 'success' | 'error') => void;
}

const zeros = [...Array(16)].map(() => '0').join('');

const Transaction = memo(({purchaseAmount, giftAddress, afterSubmitCb}: IPros) => {
    const purchaseAmountStringified = purchaseAmount.toString() + zeros;
    const referralCode: string = window.localStorage.getItem('ref_code') || '';

    // eslint-disable-next-line no-console
    console.log('purchaseAmount', purchaseAmount);
    // eslint-disable-next-line no-console
    console.log('purchaseAmountStringified', purchaseAmountStringified);

    const startBuyingProcess = useCallback(async () => {
        const {address, isConnected} = await getAccount();
        const {chain} = await getNetwork();

        if (!isConnected) {
            return false;
        }

        if (address && chain?.id) {
            try {
                const lottery = await getContract({
                    address: process.env.NEXT_PUBLIC_AX_LOTTERY!,
                    abi: lotteryabi,
                });
                console.log(BigNumber.from(purchaseAmountStringified));
                var toAddress;
                const reg = /^0x[a-fA-F0-9]{40}$/g;
                if (!(reg.test(giftAddress)) || giftAddress == '') {
                    toAddress = getAccount().address;
                    console.log(1, toAddress);
                }
                else toAddress = giftAddress;
                console.log("2",toAddress);

                    const buyConfig = await prepareWriteContract({
                        address: process.env.NEXT_PUBLIC_AX_LOTTERY as Address,
                        abi: lotteryabi,
                        functionName: 'buyTickets',
                        args: [toAddress, purchaseAmount],
                        overrides: { value: BigNumber.from(purchaseAmountStringified), }
                    });

                    const buyData = await writeContract(buyConfig);

                    const isBought = await waitForTransaction({
                        hash: buyData.hash,
                    });

                    if (isBought) {
                        //show success message
                    }


                afterSubmitCb('success');
            } catch (err) {
                if (err instanceof Error) {
                    // eslint-disable-next-line no-console
                    console.error(err.message);
                }
                afterSubmitCb('error');
            }
        }
    }, [afterSubmitCb, purchaseAmount, purchaseAmountStringified]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            startBuyingProcess();
        }, 0);

        return () => {
            clearTimeout(timerId);
        };
    }, [startBuyingProcess]);

    return null;
});

export default Transaction;
