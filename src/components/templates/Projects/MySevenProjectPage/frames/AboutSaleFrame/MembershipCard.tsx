import NextImage from 'next/image';

import {FC, memo} from 'react';

import classes from './AboutSale.module.css';

import vip from './vip-membership.png';

import Typography from 'src/components/atoms/Typography';

import useMobile from 'src/hooks/useMobile';

const MembershipCard: FC = memo((): JSX.Element | null => {
    const mobile = useMobile();
    return (
        <div className={`${classes.membership_card} p-4 lg:p-10`}>
            <Typography variant="h3" className="mb-8 lg:mb-[60px]">
                Shift DAO VIP club membership
            </Typography>

            <div className="grid gap-10 lg:grid-cols-5">
                <div className="col-span-5 flex justify-center lg:col-span-2 lg:max-h-[383px]">
                    <NextImage src={vip} alt="my seven" className="" width={mobile ? 190 : 238} height={0} />
                </div>

                <div className="col-span-5 lg:col-span-3">
                    <Typography variant="body1" className="mb-8 whitespace-pre-line lg:mb-10 lg:text-start">
                        Shift DAO offers an exclusive and limited opportunity to like-minded investors to join our VIP
                        Investor Club.{'\n'}
                        Participating in SHIFT DAO’s flagship investment campaigns rewards investors with the VIP Club
                        membership.{'\n'}
                        With the goal of rewarding investors who support our vision and share our values, VIP Club
                        members will gain early access to industry revolutionizing projects!
                    </Typography>

                    <div className="lg:mg-0 mb-8 h-[1px] bg-light/20 lg:hidden" />

                    <div className="flex flex-col space-y-[16px] lg:space-y-0">
                        <div>
                            <div className="grid lg:grid-cols-5 lg:py-[12px]">
                                <Typography variant="body1" className="col-span-1 text-start">
                                    Duration:
                                </Typography>
                                <Typography variant="body1" className="col-span-4 text-start !font-[600] !text-white">
                                    Lifetime
                                </Typography>
                            </div>
                            <div className="hidden h-[1px] bg-light/20 lg:block" />
                        </div>

                        <div>
                            <div className="grid lg:grid-cols-5 lg:py-[12px]">
                                <Typography variant="body1" className="col-span-1 text-start">
                                    Benefits:
                                </Typography>
                                <Typography variant="body1" className="col-span-4 text-start !font-[600] !text-white">
                                    All future private presales access
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default MembershipCard;
