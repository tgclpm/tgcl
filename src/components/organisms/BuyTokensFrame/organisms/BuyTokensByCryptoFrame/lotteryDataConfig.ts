import {Address} from 'wagmi';

import {LotteryABI as lotteryabi} from '../../../../../abi/LotteryABI';

const saleDataConfig = {
    contracts: [
        {
            address: process.env.NEXT_PUBLIC_AX_LOTTERY as Address, //Sale Contract Address
            abi: lotteryabi,
            functionName: 'ticketCount',
        },
        {
            address: process.env.NEXT_PUBLIC_AX_LOTTERY as Address, //Sale Contract Address
            abi: lotteryabi,
            functionName: 'prizeMoney',
        },
    ],
};

export default saleDataConfig;
