import useMobile from '../../../hooks/useMobile';

import DesktopTemplate from './organism/DesktopTemplate';
import MobileTemplate from './organism/MobileTemplate';

export default function PrivacyPolicyPage() {
    const isMobile = useMobile();

    return (
        <div className="bg-white lg:py-[80px]">
            <div className="container">{!isMobile ? <DesktopTemplate /> : <MobileTemplate />}</div>
        </div>
    );
}
