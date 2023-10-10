import Icon from '@ant-design/icons';
import {Modal} from 'antd';
import NextImage from 'next/image';
import {FC} from 'react';

import {ReactComponent as CloseIcon} from '../../../../public/icons/close.svg';

import classes from './BuyResult.module.css';
import error from './error.svg';

import success from './success.svg';

import LargeButton from 'src/components/atoms/LargeButton/LargeButton';

import Typography from 'src/components/atoms/Typography';

import {tgLink} from 'src/components/templates/Projects/ProjectsHomePage/config';
import useMobile from 'src/hooks/useMobile';

interface Props {
    count: Number
    status: 'hidden' | 'success' | 'error';
    onClose: VoidFunction;
}

const BuyResultDialog: FC<Props> = ({count, status, onClose}) => {
    const mobile = useMobile();

    return (
        <Modal
            open={status !== 'hidden'}
            centered
            onCancel={onClose}
            destroyOnClose
            footer={null}
            width={960}
            closable={false}
            bodyStyle={{padding: 0}}
        >
            <div className="relative flex flex-col items-center space-y-[40px] rounded-[20px] bg-gradient-to-b from-[#1E024B] to-[#201139] py-[80px] px-[16px] lg:p-[60px]">
                <NextImage
                    width={mobile ? 100 : 150}
                    height={mobile ? 100 : 150}
                    src={status === 'success' ? success : error}
                    alt=""
                />
                {status === 'success' ? (
                    <Typography variant="subtitle" className="!mt-[5px] !leading-[1.6]">
                        You have successfully bought <br />{count.toString()} Lottery tickets.
                        <br /> <br />
                        You can check your tickets by pressing the check my tickets button.
                        <br /> <br />
                        Winning tickets will be announced at midnight on New Year's GMT.
                    </Typography>
                ) : (
                    <Typography variant="subtitle" className="!mt-[5px] !leading-[1.6]">
                        An error occurred while processing your transaction. You probably don't have enough ETH in your wallet.
                        <br /> <br />
                        On iOS or Android device use browser inside Metamask app.
                        <br /> <br />
                        On PC or Mac use Chrome browser.
                        <br /> <br />
                        If you have any questions contact our support: <br />
                        <a href={tgLink} target="_blank" className={classes.link} rel="noreferrer">
                            {tgLink}
                        </a>
                    </Typography>
                )}
                <LargeButton onClick={onClose} className="!text-[18px] !tracking-[0.1em]">
                    OK
                </LargeButton>

                <button
                    type="button"
                    className="focus:button-focus-effect absolute right-0 -top-[80px] inline-flex h-8 w-8 items-center justify-center rounded-full bg-white lg:-top-[60px] lg:-right-[20px] lg:h-10 lg:w-10"
                    onClick={onClose}
                >
                    <Icon className="text-[12px] lg:text-[18px]" component={CloseIcon} />
                </button>
            </div>
        </Modal>
    );
};

export default BuyResultDialog;
