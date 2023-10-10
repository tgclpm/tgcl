import Icon from '@ant-design/icons';
import {Modal} from 'antd';
import NextImage from 'next/image';
import {useRouter} from 'next/router';
import {FC, useCallback, useState} from 'react';

import {ReactComponent as CloseIcon} from '../../../../public/icons/close.svg';

import bgMobile from './background-mobile.png';
import bg from './background.png';
import leftHand from './left-hand.png';
import classes from './MySevenDialog.module.css';
import nft from './nft.png';
import OnSaleNow from './OnSaleNow.png';

import rightHand from './right-hand.png';

import LargeButton from 'src/components/atoms/LargeButton/LargeButton';
import useMobile from 'src/hooks/useMobile';

const initOpen = () => {
    if (typeof window !== 'undefined') {
        return Number(window?.localStorage.getItem('myseven_popup_count')) < 3;
    }
    return true;
};

const MySevenDialog: FC = () => {
    const {pathname} = useRouter();

    const isMesevenPage = pathname === '/projects/my-seven';

    const [isOpen, setIsOpen] = useState(initOpen());
    const mobile = useMobile();

    const onClose = useCallback(() => {
        setIsOpen(false);
        const count = Number(window.localStorage.getItem('myseven_popup_count'));
        window.localStorage.setItem('myseven_popup_count', String(count + 1));
    }, []);

    if (isMesevenPage) {
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
            bodyStyle={{padding: 0, background: '#000000', borderRadius: '20px'}}
        >
            <div
                className="relative flex flex-col items-center rounded-[20px] p-[16px] pt-[30px] lg:flex-row lg:items-start lg:justify-between lg:p-[50px]"
                style={{background: `url(${mobile ? bgMobile.src : bg.src})`}}
            >
                <div className="z-[100] mb-[37px] flex w-full flex-row-reverse justify-between px-[14px] lg:w-auto lg:flex-col lg:justify-start lg:px-0">
                    <div className="text-end font-bold uppercase leading-[0.9] text-white lg:mb-[28px] lg:text-start lg:text-[28px]">
                        my seven <br />
                        Project
                    </div>

                    <div className={classes.logo}>
                        shift <br />
                        dao
                    </div>
                </div>
                <NextImage
                    width={0}
                    height={mobile ? 235 : 292}
                    src={nft}
                    alt="my seven nft"
                    className="z-[100] mb-[44px] lg:mb-0 lg:ml-[60px]"
                />
                {mobile && (
                    <NextImage
                        width={0}
                        height={100}
                        src={OnSaleNow}
                        alt="on sale"
                        className="absolute top-[160px] left-[30px] z-[101]"
                    />
                )}
                {!mobile && (
                    <>
                        <NextImage
                            width={0}
                            height={370}
                            src={leftHand}
                            alt="left hand"
                            className="absolute left-0 bottom-0"
                        />
                        <NextImage
                            width={0}
                            height={440}
                            src={rightHand}
                            alt="right hand"
                            className="absolute right-0 top-0"
                        />
                    </>
                )}
                <div className="z-[100] flex w-full flex-col lg:w-auto lg:self-end">
                    {!mobile && (
                        <div className="mb-[26px] text-center text-[26px] font-[600] uppercase leading-[0.9] text-white">
                            on sale now
                        </div>
                    )}

                    <LargeButton
                        to="/projects/my-seven?block=buy"
                        onClick={onClose}
                        className="!text-[18px] lg:!h-[40px] lg:!text-[12px]"
                    >
                        buy sdms tokens
                    </LargeButton>

                    <div className="mt-[12px] text-center text-[12px] leading-none text-white lg:mt-[10px]">
                        <span className="font-[300] text-white/80">up to</span>&nbsp; 15% bonus tokens
                    </div>
                </div>
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

export default MySevenDialog;
