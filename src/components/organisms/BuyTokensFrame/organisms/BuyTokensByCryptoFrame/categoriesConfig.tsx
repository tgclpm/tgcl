import {Address} from 'wagmi';

import {SaleContractABI as saleabi} from '../../../../../abi/SaleContractABI';

const categoriesConfig = {
    contracts: [
        {
            address: process.env.NEXT_PUBLIC_AX_SALE as Address, //Sale Contract Address
            abi: saleabi,
            functionName: 'categories',
            args: [0],
        },
        {
            address: process.env.NEXT_PUBLIC_AX_SALE as Address, //Sale Contract Address
            abi: saleabi,
            functionName: 'categories',
            args: [1],
        },
        {
            address: process.env.NEXT_PUBLIC_AX_SALE as Address, //Sale Contract Address
            abi: saleabi,
            functionName: 'categories',
            args: [2],
        },
    ],
    listenToBlock: true,
};

export default categoriesConfig;
