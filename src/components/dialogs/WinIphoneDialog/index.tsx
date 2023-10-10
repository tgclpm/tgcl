import Icon from '@ant-design/icons';
import {Modal} from 'antd';
import NextImage from 'next/image';
import {FC, useCallback, useMemo, useState} from 'react';

import {ReactComponent as CloseIcon} from '../../../../public/icons/close.svg';

import iphone_mobile from './Iphone-mobile.png';
import iphone from './Iphone.png';
import qr_code from './qr_code.png';

import classes from './WinIphone.module.css';

import TimerSmall from 'src/components/atoms/TimerSmall';

import {
    IphonePromoEndTime,
    isStageOneEnded,
    tgLink,
    twitterLink,
} from 'src/components/templates/Projects/ProjectsHomePage/config';
import useMobile from 'src/hooks/useMobile';

const initOpen = () => {
    if (typeof window !== 'undefined') {
        return Number(window?.localStorage.getItem('iphone_popup_count')) < 3;
    }

    return true;
};

const WinIphoneDialog: FC = () => {
    const [isOpen, setIsOpen] = useState(initOpen());
    const mobile = useMobile();

    const onClose = useCallback(() => {
        setIsOpen(false);
        const count = Number(window.localStorage.getItem('iphone_popup_count'));
        window.localStorage.setItem('iphone_popup_count', String(count + 1));
    }, []);

    const isEndedStage1 = useMemo(isStageOneEnded, []);

    const endTime = useMemo(IphonePromoEndTime, []);

    if (isEndedStage1 || endTime === null) {
        return null;
    }

    return (
        <Modal
            open={isOpen}
            centered
            onCancel={onClose}
            destroyOnClose
            footer={null}
            width={mobile ? 311 : 820}
            closable={false}
            bodyStyle={{padding: 0}}
        >
            <div className="relative flex flex-col items-center rounded-[20px] bg-gradient-to-b from-[#006EEF] to-[#00CEEA] p-[30px] lg:flex-row lg:py-[50px] lg:px-[60px] lg:pb-[38px]">
                <div className="lg:w-[240px]">
                    <NextImage
                        width={0}
                        height={mobile ? 340 : 426}
                        src={mobile ? iphone_mobile : iphone}
                        alt="iphone 14"
                        className="absolute left-0 bottom-0 rounded-[20px]"
                    />
                </div>
                <div className="flex flex-col text-white">
                    <div className="text-center text-[28px] font-[600] leading-[98%] lg:text-start lg:text-[48px]">
                        Win
                        <br />
                        iPhone 14
                        <br />
                        Pro Max*
                    </div>
                    <ol className="z-[80] ml-[25px] mt-[9px] list-decimal text-[14px] leading-[1.3] lg:mt-[20px] lg:text-[18px]">
                        <li>
                            Buy SDMS tokens <br />
                        </li>
                        <li>
                            Join our Telegram:&nbsp;@
                            <a href={tgLink} target="_blank" className="underline" rel="noreferrer">
                                shiftdao
                            </a>
                        </li>
                        <li>
                            Follow&nbsp;us&nbsp;on&nbsp;Twitter:&nbsp;@
                            <a href={twitterLink} target="_blank" className="underline" rel="noreferrer">
                                shift_dao
                            </a>
                        </li>
                    </ol>
                    {!mobile && <div className="mt-[20px] h-[1px] bg-white" />}
                    {mobile ? (
                        <div className={classes.timer_wrapper}>
                            <div className="mb-[10px] text-[14px] leading-[1.6]">Promo ends in:</div>
                            <TimerSmall time={endTime} />
                        </div>
                    ) : (
                        <div className="!mt-[15px]">
                            <div className="text-[14px] leading-[1.6]">Promo ends in:</div>
                            <div className="max-w-[240px]">
                                <TimerSmall time={endTime} />
                            </div>
                        </div>
                    )}
                </div>
                {!mobile && (
                    <div className="flex justify-end self-end">
                        <NextImage
                            width={108}
                            height={155}
                            src={qr_code}
                            alt="iphone 14"
                            className="lg:ml-[30px] lg:mb-[20px]"
                        />
                    </div>
                )}
                <button
                    type="button"
                    className="focus:button-focus-effect absolute right-0 -top-[60px] inline-flex h-8 w-8 items-center justify-center rounded-full bg-white lg:-top-[20px] lg:-right-[20px] lg:h-10 lg:w-10"
                    onClick={onClose}
                >
                    <Icon className="text-[12px] lg:text-[18px]" component={CloseIcon} />
                </button>
            </div>
        </Modal>
    );
};

export default WinIphoneDialog;
