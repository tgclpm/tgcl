import NextImage from 'next/image';
import {useRouter} from 'next/router';
import {FC, useEffect} from 'react';

import picBgMobile from './bg-pic-mobile.png';
import picBg from './bg-pic.png';
import nftImgMobile from './nft-mobile.png';
import nftImg from './nft.png';
import classes from './SaleModal.module.css';

import LargeButton from 'src/components/atoms/LargeButton/LargeButton';
import useMobile from 'src/hooks/useMobile';
import useScrollToElement from 'src/hooks/useScrollToElement';

const observe = () => {
    const onsaleModal = document.querySelector('#onsale-modal');
    if (
        onsaleModal &&
        'IntersectionObserver' in window &&
        'IntersectionObserverEntry' in window &&
        'intersectionRatio' in window.IntersectionObserverEntry.prototype
    ) {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].boundingClientRect.y >= window.innerHeight) {
                onsaleModal.classList.remove('!opacity-0');
                onsaleModal.classList.remove('!-z-10');
            } else {
                onsaleModal.classList.add('!opacity-0');
                onsaleModal.classList.add('!-z-10');
            }
        });
        const root = document.querySelector('#onsale-trigger');
        if (root) {
            observer.observe(root);
        }
    }
};

const saleObserve = () => {
    const onsaleModal = document.querySelector('#onsale-modal');
    if (
        onsaleModal &&
        'IntersectionObserver' in window &&
        'IntersectionObserverEntry' in window &&
        'intersectionRatio' in window.IntersectionObserverEntry.prototype
    ) {
        const saleBlock = document.querySelector('#buy-tokens');
        const observerSale = new IntersectionObserver(entries => {
            if (entries[0].boundingClientRect.y >= window.innerHeight) {
                onsaleModal.classList.remove('!opacity-0');
                onsaleModal.classList.remove('!-z-10');
            } else {
                onsaleModal.classList.add('!opacity-0');
                onsaleModal.classList.add('!-z-10');
            }
        });

        if (saleBlock) {
            observerSale.observe(saleBlock);
        } else {
            setTimeout(saleObserve, 1000);
        }
    }
};

const MySevenOnSale: FC = (): JSX.Element | null => {
    const scroll = useScrollToElement(`#buy-tokens`);
    const mobile = useMobile();
    const {pathname} = useRouter();

    const isMesevenPage = pathname === '/projects/my-seven';

    useEffect(() => {
        if (isMesevenPage) {
            saleObserve();
        } else {
            observe();
        }
    }, [isMesevenPage]);

    return (
        <>
            <div className="invisible absolute bottom-4" id="onsale-trigger" />
            <div className={classes.wrapper} id="onsale-modal">
                <div
                    className={classes.inner}
                    style={{background: `url(${mobile ? picBgMobile.src : picBg.src})`, backgroundPositionX: 'center'}}
                >
                    <div className="container relative flex h-full items-center px-0 text-white/80 lg:pr-8 lg:pt-[10px]">
                        <div className="flex items-center justify-center px-[20px] pt-[2px] lg:w-[185px] lg:pt-0">
                            <NextImage
                                src={mobile ? nftImgMobile : nftImg}
                                alt="nft"
                                width={mobile ? 38 : 301}
                                height={mobile ? 60 : 300}
                                className="lg:absolute lg:bottom-0 lg:-left-[45px]"
                            />
                        </div>
                        {mobile ? (
                            <div className="mr-auto flex flex-col text-white">
                                <div className="text-[16px] font-[600] uppercase leading-[1.2]">MY SEVEN project</div>
                                <div className="text-[13px] font-[600] leading-none">
                                    <span className="font-[300] text-white/80">up to</span> <br />
                                    15% bonus tokens
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="text-[24px] font-[600] uppercase leading-[1.2]">
                                    MY SEVEN project <br />
                                    is on sale
                                </div>
                                <div className="ml-auto mr-[30px] text-[14px] font-[600] text-white">
                                    <span className="font-[300] text-white/80">up to</span>&nbsp;15% bonus tokens
                                </div>
                            </>
                        )}
                        <LargeButton
                            to={isMesevenPage ? undefined : '/projects/my-seven?block=buy'}
                            onClick={isMesevenPage ? scroll : undefined}
                            linkClassName="h-full lg:h-auto max-w-[90px] lg:max-w-[300px]"
                            className="!h-full max-w-[90px] !rounded-none lg:!h-[60px] lg:max-w-[300px] lg:!rounded-[12px]"
                        >
                            BUY TOKENS
                        </LargeButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MySevenOnSale;
