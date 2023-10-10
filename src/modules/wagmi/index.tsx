import * as process from 'process';

import {ConnectKitProvider, getDefaultClient} from 'connectkit';
import {ReactNode} from 'react';
import {createClient, WagmiConfig} from 'wagmi';
import {bsc, bscTestnet} from 'wagmi/chains';

export default function Wagmi({children}: {children: ReactNode}) {
    // eslint-disable-next-line no-console
    console.log('========================================================');
    // eslint-disable-next-line no-console
    console.log('NEXT_PUBLIC_APP_STAGE', process.env.NEXT_PUBLIC_APP_STAGE);
    // eslint-disable-next-line no-console
    console.log('NEXT_PUBLIC_AX_SALE', process.env.NEXT_PUBLIC_AX_SALE);
    // eslint-disable-next-line no-console
    console.log('NEXT_PUBLIC_AX_BUSD', process.env.NEXT_PUBLIC_AX_BUSD);
    // eslint-disable-next-line no-console
    console.log('NEXT_PUBLIC_AX_DAO', process.env.NEXT_PUBLIC_AX_DAO);
    // eslint-disable-next-line no-console
    console.log('========================================================');

    const client = createClient(
        getDefaultClient({
            appName: 'Shift DAO',
            alchemyId: 'rxXwZCbZnUKNHyxqXrzjzTP-tHS-joBI',
            chains: [process.env.NEXT_PUBLIC_APP_STAGE !== 'production' ? bscTestnet : bsc],
        }),
    );

    return (
        <WagmiConfig client={client}>
            <ConnectKitProvider>{children}</ConnectKitProvider>
        </WagmiConfig>
    );
}
