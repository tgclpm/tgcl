import * as process from 'process';

import {Modal} from 'antd';
import NextImage from 'next/image';
import {FC, useEffect} from 'react';

import useMobile from '../../../hooks/useMobile';

import Button from '../../atoms/Button/Button';

import close from './close.svg';

interface Props {
    open: boolean;
    onClose: VoidFunction;
    value: number;
    emailValue: string;
    tokensWithBonus: number;
}

const SwitchereDialog: FC<Props> = ({open, onClose, value, emailValue, tokensWithBonus}) => {
    const mobile = useMobile();

    useEffect(() => {
        const dirtyEmail = emailValue.replaceAll('.', '_-_').replace('@', '-_-');
        const switchereIsSandboxMode = process.env.NEXT_PUBLIC_SWITCHERE_STAGE === 'development';
        const tokkensToUsd = value;
        const refCode = window.localStorage.getItem('ref_code') || 'xxxx';
        const partnerOrderId = `${dirtyEmail}-${tokensWithBonus}-${refCode}-${makeid(4)}`;
        const partnerKey = switchereIsSandboxMode ? 'WQYM74Y9PZVPVOXQ' : 'CV3858PVEDUAWQIE';
        const payoutCurrency = switchereIsSandboxMode ? 'BTC' : 'BUSDBSC';
        const dstAddress = switchereIsSandboxMode
            ? '2NA5HzyLQJNZVQkzacroEcjnLbNkcmuUbFQ'
            : '0x43a945CD8f07A5D7CAFBab4ff6c132b137EB6c42';
        const payKey = switchereIsSandboxMode ? 'payinAmount' : 'payoutAmount';

        if (open) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.switchereSdk.init({
                el: '#switchere',
                partnerKey,
                httpReturnFailed: `${process.env.NEXT_PUBLIC_ORIGIN}/projects/my-seven?block=buy`,
                httpReturnSuccess: `${process.env.NEXT_PUBLIC_ORIGIN}/projects/my-seven?block=buy`,
                [payKey]: tokkensToUsd,
                payinCurrency: 'USD',
                payinGroupDefault: 'card',
                payoutCurrency,
                payoutGroupDefault: 'crypto',
                partnerOrderId,
                dstAddress,
            });
        }
    }, [emailValue, open, tokensWithBonus, value]);

    return (
        <Modal
            open={open}
            centered
            closable={false}
            footer={null}
            width="100%"
            className="max-w-[374px] !align-baseline lg:!align-middle"
            bodyStyle={{padding: 0}}
        >
            {!mobile ? (
                <NextImage
                    className="absolute right-[-30px] top-[-30px] cursor-pointer"
                    onClick={onClose}
                    src={close}
                    alt=""
                    width={24}
                    height={24}
                />
            ) : null}
            <div id="switchere" style={{backgroundColor: '#fff', minHeight: '500px', maxWidth: '450px', width: '100%'}}>
                Loading...
            </div>
            {mobile ? (
                <Button className="!w-full !rounded-none" onClick={onClose}>
                    Закрыть
                </Button>
            ) : null}
        </Modal>
    );
};

export default SwitchereDialog;

function makeid(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
