import NextImage from 'next/image';
import Link from 'next/link';

import WrapperBgDesktop from './2.png';
import classes from './HeroFrame.module.css';

import Container from 'src/components/atoms/Container';

import Typography from 'src/components/atoms/Typography';

export default function HeroFrame() {
    return (
        <div className={classes.wrapper}>
            <div className="flex h-full w-full flex-col items-center">
                <Container>
                    <div className="my-[57px] flex h-full w-full flex-col lg:my-[120px] lg:flex-row">
                        <div className="flex flex-col justify-center lg:mr-[160px] lg:w-[465px]">
                            <Typography variant="h1" className="mb-[40px] text-center lg:!text-left">
                                <p>Security</p>
                            </Typography>
                            <div className="flex h-[339px] justify-center pb-[24px] lg:hidden">
                                <NextImage
                                    src={WrapperBgDesktop}
                                    alt=""
                                    width={339}
                                    height={368}
                                    className="max-w-fit object-cover"
                                />
                            </div>
                            <div>
                                <Typography
                                    variant="body1"
                                    className="hidden pb-[40px] !text-left !text-white/80 lg:block"
                                >
                                    There are a number of reasons why an investment in a tokenized equity DAO could be
                                    considered safe. Our custom tokens have been audited by an external development
                                    company and by two independent veteran blockchain developers.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className="relative z-10  !text-center !text-white/80 lg:hidden"
                                >
                                    With your permission we and our partners may use precise geolocation data and
                                    identification through device scanning. You may click to consent to our and our
                                    partners’ processing as described above. Alternatively you may click to refuse to
                                    consent or access more detailed information and change your preferences before
                                    consenting.
                                </Typography>
                                <div className="flex flex-col justify-between [&>a]:underline [&>a]:decoration-[#0FD3E1] [&>a]:decoration-1">
                                    <Link
                                        href="/files/audit_report.pdf"
                                        target="_blank"
                                        className={`${classes.linkText} text-center lg:text-left`}
                                    >
                                        Audit Report &gt;&gt;
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="z-10 hidden h-[339px] w-[368px] bg-[0rem_0rem] bg-no-repeat lg:block">
                            <NextImage
                                src={WrapperBgDesktop}
                                alt=""
                                width={339}
                                height={368}
                                className="max-w-fit object-cover"
                            />
                        </div>
                        <div className={classes.imageWrapper} />
                    </div>
                </Container>
            </div>
        </div>
    );
}
