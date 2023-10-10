/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import {ConnectKitButton} from 'connectkit';
import NextImage from 'next/image';

import Link from 'next/link';

import {FC, Fragment, PropsWithChildren, useEffect, useState} from 'react';

import menu from './burger.svg';
import close from './close.svg';
import classes from './Header.module.css';

import Container from 'src/components/atoms/Container';
import SocialLinks from 'src/components/atoms/SocialLinks';
import useMobile from 'src/hooks/useMobile';

const LinkWrap: FC<PropsWithChildren> = ({children}) => (
    <div className="my-auto flex flex-col space-y-[32px]">{children}</div>
);

const observe = () => {
    const header = document.querySelector('header');
    if (
        header &&
        'IntersectionObserver' in window &&
        'IntersectionObserverEntry' in window &&
        'intersectionRatio' in window.IntersectionObserverEntry.prototype
    ) {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].boundingClientRect.y < 0) {
                header.classList.remove('!bg-transparent');
            } else {
                header.classList.add('!bg-transparent');
            }
        });
        const root = document.querySelector('#header-trigger');
        if (root) {
            observer.observe(root);
        }
    }
};

const Header = () => {
    const mobile = useMobile();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.addEventListener('click', () => setIsOpen(false));
        observe();
    }, []);

    const Wrapper = mobile ? LinkWrap : Fragment;

    return (
        <header
            className={`transition-all ${classes.header} ${
                isOpen && mobile ? '!bg-[#0E0121]' : ''
            } z-[60] w-full py-4 lg:py-10`}
            onClick={e => e.stopPropagation()}
        >
            <div className="relative w-full">
                <Container>
                    <div className="flex">
                        <button className="btn-free mr-[12px] lg:hidden" onClick={() => setIsOpen(o => !o)}>
                            <NextImage src={isOpen ? close : menu} alt="" className="" width={24} height={24} />
                        </button>
                        <div className="flex w-full items-center justify-between lg:h-[41px]">
                            <Link href="/" className={classes.logo}>
                                TGCL
                            </Link>
                            <div
                                className={`${
                                    isOpen && mobile
                                        ? 'absolute inset-x-0 -bottom-[calc(100vh-50px)] flex h-[calc(100vh-50px)] w-full flex-col justify-between rounded-b-lg bg-[#0E0121] pb-[58px] lg:static lg:w-auto'
                                        : 'hidden lg:grid'
                                } lg:grid lg:grid-cols-5 lg:gap-[20px]`}
                            >
                            </div>

                            <ConnectKitButton />
                        </div>
                    </div>
                </Container>
            </div>
            <style global>{`
                .primary {
                    background: #ffffff;
                    border-radius: 10px;
                    color: #0E0121;
                    font-size: 12px;
                    text-transform: uppercase;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    line-height: 1.2;
                    margin-left: 1px;
                }
                .primary > div {
                    padding: 0 13px !important;
                }
                .primary:hover {
                    background: #CED7E2 !important;
                    color: #0E0121 !important;
                    border-radius: 10px !important;
                }
            `}</style>
        </header>
    );
};

export default Header;
