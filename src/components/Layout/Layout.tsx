import {FC, memo, PropsWithChildren} from 'react';

import Footer from './Footer/Footer';
import Header from './Header';

const Layout: FC<PropsWithChildren> = memo(({children}): JSX.Element | null => {
    return (
        <div className="relative overflow-hidden">
            <div className="invisible absolute top-1" id="header-trigger" />
            <Header />

            <main className="pt-header min-h-[100vh] bg-bgblack pb-[var(--footer-height-mobile)] lg:min-h-[100vh] lg:pb-[var(--footer-height-lg)]">
                {children}
            </main>
            {/*<Modals />*/}
        </div>
    );
});

export default Layout;
