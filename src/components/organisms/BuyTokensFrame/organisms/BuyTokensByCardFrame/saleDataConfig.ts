import {Address} from 'wagmi';

import {SaleContractABI as saleabi} from '../../../../../abi/SaleContractABI';

const saleDataConfig = {
    contracts: [
        {
            address: process.env.NEXT_PUBLIC_AX_SALE as Address, //Sale Contract Address
            abi: saleabi,
            functionName: 'purchaseEnabled',
        },
        {
            address: process.env.NEXT_PUBLIC_AX_SALE as Address, //Sale Contract Address
            abi: saleabi,
            functionName: 'preSaleOnly',
        },
        {
            address: process.env.NEXT_PUBLIC_AX_SALE as Address, //Sale Contract Address
            abi: saleabi,
            functionName: 'salePrice',
        },
        {
            address: process.env.NEXT_PUBLIC_AX_SALE as Address, //Sale Contract Address
            abi: saleabi,
            functionName: 'saleRoundName',
        },
        {
            address: process.env.NEXT_PUBLIC_AX_SALE as Address, //Sale Contract Address
            abi: saleabi,
            functionName: 'startingTokensWithoutBonus',
        },
    ],
};

export default saleDataConfig;
