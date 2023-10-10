import {multicall} from '@wagmi/core';

import {BigNumber} from 'ethers';
import {createContext, ReactNode, useCallback, useEffect, useState} from 'react';

import categoriesConfig from '../organisms/BuyTokensFrame/organisms/BuyTokensByCryptoFrame/categoriesConfig';
import saleDataConfig from '../organisms/BuyTokensFrame/organisms/BuyTokensByCryptoFrame/saleDataConfig';
import lotteryDataConfig from '../organisms/BuyTokensFrame/organisms/BuyTokensByCryptoFrame/lotteryDataConfig';

type ContractProviderProps = {
    children: ReactNode;
};

export interface IContextType {
    initialData: {
        allAvailableTokensCount: number;
        allStartingTokens: number;
        availableCategories: Array<any>;
        categoriesData: Array<Array<any>>;
        saleData: any;
    } | null;
}

const initialState: IContextType = {
    initialData: null,
};

const ContractContext = createContext<IContextType>(initialState);

function ContractProvider({children}: ContractProviderProps) {
    const [state, dispatch] = useState(initialState);

    const getCategories = useCallback(async (categoriesData: Array<any>) => {
        const saleData: any = await multicall(saleDataConfig);
        const allAvailableTokensCount = categoriesData.reduce((accum: number, category: any): number => {
            return accum + parseInt(category.tokencount._hex, 16) * 10 ** -18;
        }, 0);
        const allStartingTokens = BigNumber.isBigNumber(saleData[4]) ? parseInt(saleData[4]._hex, 16) * 10 ** -18 : 0;

        const availableCategories = categoriesData.reduce((result, category) => {
            const tokenCount = Math.floor(parseInt(category.tokencount._hex, 16) * 10 ** -18);

            if (tokenCount > 0) {
                result.push({
                    availableTokens: tokenCount,
                    bonus: parseInt(category.bonus._hex, 16),
                });
            }
            return result;
        }, []);

        return {
            categoriesData,
            saleData,
            allAvailableTokensCount,
            availableCategories,
            allStartingTokens,
        };
    }, []);

    useEffect(() => {
        const initialize = async () => {
            try {
                const categoriesData: Array<any> = await multicall(categoriesConfig);
                const result = await getCategories(categoriesData);
                dispatch({initialData: result});
            } catch (e) {
                // eslint-disable-next-line no-console
                console.error('Error', e);
            }
        };

        initialize();
    }, [getCategories]);

    return (
        <ContractContext.Provider
            value={{
                ...state,
            }}
        >
            {state.initialData && children}
        </ContractContext.Provider>
    );
}

export {ContractContext, ContractProvider};
