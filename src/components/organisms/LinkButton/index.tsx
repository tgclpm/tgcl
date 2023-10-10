import Image from 'next/image';
import Link from 'next/link';

import {useRouter} from 'next/router';
import {FC} from 'react';

import Arrow from '../../../../public/icons/right-arrow-link-button.svg';
import useMobile from '../../../hooks/useMobile';

interface Props {
    href: string;
    text?: string;
    textClassName?: string;
}

const LinkButton: FC<Props> = ({href, text, textClassName}): JSX.Element | null => {
    const {locale} = useRouter();
    const mobile = useMobile();

    return (
        <Link
            href={href}
            locale={locale}
            type="button"
            className="flex w-[100%] max-w-[1272px] flex-row items-center justify-between self-center bg-gradient-to-r from-[#DA3D15] to-[#FE7801] px-[14px] py-[12px] lg:px-8 lg:py-[16px]"
        >
            <span
                className={`2md:whitespace-normal lg:leading-xl whitespace-pre-line font-secondary text-[18px] font-bold uppercase leading-none text-[#FEF9F4] lg:text-[24px] xl:text-[28px] 2xl:text-[30px] ${textClassName}`}
            >
                {text}
            </span>

            <div className="flex h-[34px] min-w-[34px] items-center justify-center rounded-full bg-[#FEF9F4] lg:h-[60px] lg:min-w-[60px]">
                <Image
                    src={Arrow}
                    alt="arrow link icon"
                    width={mobile ? 13.8 : 26}
                    height={mobile ? 10.6 : 20}
                    objectFit="contain"
                />
            </div>
        </Link>
    );
};

export default LinkButton;
