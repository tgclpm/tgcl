import Icon from '@ant-design/icons';
import {Modal} from 'antd';
import NextImage from 'next/image';
import Link from 'next/link';
import {useCallback, useState} from 'react';

import {ReactComponent as CloseIcon} from '../../../../public/icons/close-bold.svg';

import BetaTesting from './betatesing.webp';
import classes from './ChooseWalletDialog.module.css';
import DialogBg from './dialog-bg.jpg';

const ChooseWalletDialog = () => {
    const [visible, setVisible] = useState(false);

    const isDesktop = true;

    const close = useCallback(() => setVisible(false), []);

    return (
        <Modal
            open={visible}
            centered
            onCancel={close}
            destroyOnClose
            footer={null}
            width={960}
            closable={false}
            bodyStyle={{padding: 0}}
        >
            <div className={classes.dialogContentWrapper}>
                {isDesktop ? <div className="w-[41.04166667%]" /> : null}
                {!isDesktop ? <NextImage className="mx-auto" width={228} src={BetaTesting} alt="" /> : null}

                <div className="z-30 flex flex-col justify-start md:w-[50.52083333%] md:justify-center">
                    <div className={classes.dialogTitle}>
                        <h2 className="m-0">ChooseWalletDialog</h2>
                    </div>
                    <div className="mb-0 flex w-[100%] flex-col md:mb-10">
                        <div className="flex w-[100%] flex-col md:flex-row">
                            <input
                                className="h-[50px] w-[100%] px-5 outline-none"
                                value=""
                                placeholder="Your e-mail address"
                            />
                            <button className="mt-4 h-[50px] text-[16px] uppercase md:mt-0">join now</button>
                        </div>
                        <span className="mt-4 text-center text-xs text-white md:text-left">
                            By clicking Join now you accept the terms of the{' '}
                            <Link className="underline" href="/">
                                EULA & Privacy Policy
                            </Link>
                        </span>
                    </div>
                </div>
            </div>

            {isDesktop ? <NextImage className="relative top-0 left-0" src={DialogBg} alt="" /> : null}

            <button type="button" className={`${classes.dialogButton} focus:button-focus-effect`} onClick={close}>
                <Icon className="lg:text-2xs text-[6px] fill-transparent" component={CloseIcon} />
            </button>
        </Modal>
    );
};

export default ChooseWalletDialog;
