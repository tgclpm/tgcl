import NextImage from 'next/image';
import Link from 'next/link';
import {FC} from 'react';

import medium from './medium.svg';
import telegram from './telegram.svg';
import twitter from './twitter.svg';

import {mediumLink, tgLink, twitterLink} from 'src/components/templates/Projects/ProjectsHomePage/config';
import useMobile from 'src/hooks/useMobile';

const SocialLinks: FC = (): JSX.Element | null => {
    const mobile = useMobile();
    return (
        <div className="flex space-x-[60px] lg:space-x-[20px]">
            <Link href={twitterLink} target="_blank">
                <NextImage width={mobile ? 40 : 30} height={mobile ? 40 : 30} src={twitter} alt="twitter" />
            </Link>

            <Link href={mediumLink} target="_blank">
                <NextImage width={mobile ? 40 : 30} height={mobile ? 40 : 30} src={medium} alt="medium" />
            </Link>

            <Link href={tgLink} target="_blank">
                <NextImage width={mobile ? 40 : 30} height={mobile ? 40 : 30} src={telegram} alt="telegram" />
            </Link>
        </div>
    );
};

export default SocialLinks;
