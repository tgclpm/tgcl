import {useContext} from 'react';

import {ContractContext, IContextType} from '../context/ContractProvider';

const useInitialContractData = (): IContextType => {
    return useContext(ContractContext);
};

export default useInitialContractData;
