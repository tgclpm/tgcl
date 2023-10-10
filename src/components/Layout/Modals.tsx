import {FC} from 'react';

import MySevenDialog from '../dialogs/MySevenDialog';

import MySevenOnSale from '../organisms/MySevenOnSale';
import {MySevenAllSaleEnded} from '../templates/Projects/ProjectsHomePage/config';

const Modals: FC = (): JSX.Element | null => {
    return (
        <>
            {!MySevenAllSaleEnded && <MySevenDialog />}
            {!MySevenAllSaleEnded && <MySevenOnSale />}
        </>
    );
};

export default Modals;
