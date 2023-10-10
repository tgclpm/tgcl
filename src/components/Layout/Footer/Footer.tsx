import Link from 'next/link';
import {FC, memo} from 'react';

import classes from './Footer.module.css';

import Container from 'src/components/atoms/Container';
import SocialLinks from 'src/components/atoms/SocialLinks';
import useMobile from 'src/hooks/useMobile';

const Footer: FC = memo((): JSX.Element | null => {
    const mobile = useMobile();
    return (
        <footer className="absolute bottom-0 z-10 w-full bg-transparent py-[80px] lg:py-[60px]">
            <Container>
                <div className="flex flex-col space-y-[48px] lg:space-y-[40px]">
                    <div className="grid gap-[48px] lg:grid-cols-12 lg:justify-start">
                        <div className="flex items-center justify-center lg:col-span-5 lg:justify-start lg:space-x-[43px]">
                            <Link href="/" className={classes.logo}>
                                SHIFT DAO
                            </Link>
                            {!mobile && <SocialLinks />}
                        </div>
                        <div className="flex justify-center lg:col-span-7 lg:justify-end">
                            <div className="flex w-full justify-between">
                                <Link href="/about" className={`${classes.link} text-center lg:text-end`}>
                                    About
                                </Link>
                                <Link href="/projects" className={`${classes.link} text-center lg:text-end`}>
                                    Projects
                                </Link>
                                <Link href="/instructions" className={`${classes.link} text-center lg:text-end`}>
                                    How to buy
                                </Link>
                                <Link
                                    href="https://shiftdao.gitbook.io/shiftdao-faq/"
                                    target="_blank"
                                    className={`${classes.link} text-center`}
                                >
                                    FAQ
                                </Link>
                                <Link href="/security" className={`${classes.link} text-center lg:text-end`}>
                                    Security
                                </Link>
                                <Link href="/contact-us" className={`${classes.link} text-center lg:text-end`}>
                                    Сontact&nbsp;us
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-[24px] lg:grid-cols-2 lg:justify-start lg:gap-[48px]">
                        <div className="flex justify-center lg:justify-start">
                            <div className="text-[12px] leading-[1.6] text-white/40">
                                © 2023 SHIFT DAO. All Rights Reserved.
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <div className="grid-d grid w-full grid-cols-3 gap-[40px] lg:grid-cols-3">
                                <Link
                                    href="/announcements"
                                    className="text-end text-[12px] leading-[1.2] text-white/40 underline lg:col-span-1 lg:text-end"
                                >
                                    Announcements
                                </Link>
                                <Link
                                    href="/privacy-policy"
                                    className="text-end text-[12px] leading-[1.2] text-white/40 underline lg:col-span-1 lg:text-end"
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    href="/terms"
                                    className="col-span-1 text-start text-[12px] leading-[1.2] text-white/40 underline lg:-ml-[10px] lg:text-end"
                                >
                                    Terms&nbsp;of&nbsp;service
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
});

export default Footer;
