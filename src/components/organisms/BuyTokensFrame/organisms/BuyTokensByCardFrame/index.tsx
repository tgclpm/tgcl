import {Input} from 'antd';
import NextImage from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {SelectProps} from 'rc-select';
import {ChangeEvent, FC, useCallback, useEffect, useMemo, useState} from 'react';

import {fCurrency} from '../../../../../utils/formatNumber';
import SelectCardField from '../../../../atoms/SelectCardField';
import Typography from '../../../../atoms/Typography';

import BuyResultDialog from '../../../../dialogs/BuyResultDialog';
import SwitchereDialog from '../../../../dialogs/SwitchereDialog';
import useInitialContractData from '../../../../hooks/useInitialContractData';

import getNumberOfTokensForBUSD, {IGetNumberOfTokensForBUSDResult} from '../../helpers/getNumberOfTokensForBUSD';

import classes from './BuyTokens.module.css';
import DMCAIcon from './dmca-icon.svg';
import InfoIcon from './InfoCircle.svg';
import MasterCardIcon from './masterCard-icon.svg';
import SofortIcon from './sofortIcon.svg';
import VisaIcon from './visa-icon.svg';

import Checkbox from 'src/components/atoms/Checkbox';
import LargeButton from 'src/components/atoms/LargeButton/LargeButton';
import {isCurrentMySevenStageTimeEnd} from 'src/components/templates/Projects/ProjectsHomePage/config';
import useScrollToElement from 'src/hooks/useScrollToElement';

type Props = {
    onBack: VoidFunction;
};

const validateEmail = (email: string) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
};

const BuyTokensByCardFrame: FC<Props> = ({onBack}) => {
    const {
        query: {block},
    } = useRouter();

    const scroll = useScrollToElement(`#buy-tokens`);

    useEffect(() => {
        if (block === 'buy') {
            scroll();
        }
    }, [block, scroll]);

    const [agree, setAgree] = useState(false);
    const [value, setValue] = useState<string>('');
    const [emailValue, setEmailValue] = useState<string>('');
    const [resultDialogStatus, setResultDialogStatus] = useState<'hidden' | 'success' | 'error'>('hidden');
    const [calculatedData, setCalculatedData] = useState<null | IGetNumberOfTokensForBUSDResult>(null);
    const {initialData} = useInitialContractData();

    const [switchereIsOpen, setSwitchereIsOpen] = useState(false);

    const onChangeHandle = (value: SelectProps['value']) => {
        setValue(value);
    };

    const onChangeEmailHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.target.value);
    };

    const onCloseHandle = useCallback(() => setResultDialogStatus('hidden'), []);

    const changeValueHandler = useCallback((amount: number, categoriesData: any, saleData: any) => {
        const result = getNumberOfTokensForBUSD(amount, categoriesData, saleData);
        setCalculatedData(result);
    }, []);

    const toggleSwithereDialog = () => {
        setSwitchereIsOpen(!switchereIsOpen);
    };

    const isValid = useMemo(() => {
        return (
            !!value.length &&
            !!emailValue &&
            validateEmail(emailValue) &&
            Number(value) >= 10 &&
            Number(value) <= 100000 &&
            calculatedData &&
            calculatedData?.tokensWithBonus <= calculatedData?.availableTokens
        );
    }, [calculatedData, emailValue, value]);

    useEffect(() => {
        !!value.length &&
            initialData &&
            changeValueHandler(Number(value) * 100, initialData.categoriesData, initialData.saleData);
    }, [value, initialData, changeValueHandler]);

    const isCurrentStageEnded = useMemo(isCurrentMySevenStageTimeEnd, [value, agree]);

    return (
        <>
            {switchereIsOpen && (
                <SwitchereDialog
                    open={switchereIsOpen}
                    value={Number(value)}
                    emailValue={emailValue}
                    tokensWithBonus={calculatedData?.tokensWithBonus || 0}
                    onClose={toggleSwithereDialog}
                />
            )}

            <BuyResultDialog count = {1} status={resultDialogStatus} onClose={onCloseHandle} />

            <div className="relative z-[1] min-h-[500px] py-[80px] bg-purple lg:py-[120px]">
                <div id="buy-tokens" className="invisible absolute -top-[20px] z-[-5] lg:-top-[100px]" />
                <div className="container">
                    <Typography className="lg:!text-left" variant="h2">
                        Buy SDMS TOKENS
                    </Typography>

                    <div className="mt-[48px] grid gap-[48px] lg:mt-[60px] lg:grid-cols-12">
                        <div className="flex flex-col items-center lg:col-span-7 lg:items-start">
                            <Typography variant="body3" className={`${classes.body2} !text-left lg:mb-[40px]`}>
                                <span>The SDMS tokens purchasing will be executed in 3 steps:</span>
                                <ul className="ml-3.5 list-outside list-decimal">
                                    <li>
                                        You buy and transfer <b>BUSD</b> tokens.
                                    </li>
                                    <li>By email you receive a SDMS tokens certificate with all the details.</li>
                                    <li>
                                        After the campaign is over you will recieve SDMS tokens on your SDMS address
                                        provided by you.
                                    </li>
                                </ul>
                            </Typography>
                            <div className="mb-5 w-full">
                                <Typography className="mt-[32px] lg:mt-auto lg:!text-left" variant="body1">
                                    Your email:
                                </Typography>
                                {initialData && (
                                    <>
                                        <Input
                                            placeholder="Enter your email"
                                            className="selectRoot mt-[8px] w-full max-w-[500px] lg:mt-[10px] lg:max-w-none"
                                            value={emailValue}
                                            onChange={onChangeEmailHandle}
                                            width="100%"
                                        />
                                        {emailValue && !validateEmail(emailValue) && (
                                            <Typography
                                                variant="body2"
                                                className="mt-[4px] pl-[30px] !text-left !text-[#FF3A3A]"
                                            >
                                                This value is not a valid email address
                                            </Typography>
                                        )}
                                    </>
                                )}
                            </div>
                            <div className="w-full">
                                <Typography className="mt-[32px] lg:mt-auto lg:!text-left" variant="body1">
                                    Amount of BUSD tokens you want to purchase:
                                </Typography>
                                {initialData && (
                                    <SelectCardField
                                        value={value}
                                        calculatedData={calculatedData}
                                        className="mt-[8px] max-w-[500px] lg:mt-[10px] lg:max-w-none"
                                        onChange={onChangeHandle}
                                    />
                                )}
                            </div>

                            <button
                                onClick={() => setAgree(a => !a)}
                                className="mt-[32px] flex items-center justify-center lg:mt-[20px] lg:justify-start"
                            >
                                <Checkbox checked={agree} />
                                <Typography className="text-start !text-[14px]" variant="body1">
                                    By clicking “BUY & TRANSFER TOKENS” you agree with{' '}
                                    <Link href="/terms" target="_blank" className="underline">
                                        Terms & Conditions
                                    </Link>
                                </Typography>
                            </button>
                        </div>
                        <div className="order-first flex flex-col space-y-[24px] lg:order-none lg:col-span-5 lg:space-y-[30px]">
                            <div className="flex flex-col space-y-[4px]">
                                <Typography className="!text-white/80 lg:!text-left" variant="body2">
                                    Token price:
                                </Typography>
                                <Typography className="mt-[10px] font-bold uppercase lg:!text-left" variant="body2">
                                    100 sdms tokenS = 1 BUSD
                                </Typography>
                                <Typography className="!mt-[24px] lg:!mt-[30px] lg:!text-left" variant="body1">
                                    Available SDMS tokens in current stage:
                                </Typography>

                                {initialData?.availableCategories && (
                                    <Typography className="mt-[10px] lg:!text-left" variant="subtitle">
                                        <span>
                                            {fCurrency(
                                                initialData?.availableCategories[0].availableTokens +
                                                    initialData?.availableCategories[1].availableTokens,
                                            )}
                                        </span>
                                        <span className="text-[16px]">&nbsp;(+ 5% bonus)</span>
                                    </Typography>
                                )}

                                {initialData?.availableCategories && (
                                    <Typography className="mt-[10px] lg:!text-left" variant="subtitle">
                                        <span>{fCurrency(initialData?.availableCategories[2].availableTokens)}</span>
                                        <span className="text-[16px]">&nbsp;(no bonus)</span>
                                    </Typography>
                                )}
                            </div>

                            <div className="flex justify-center gap-3 text-white lg:justify-start">
                                <NextImage src={VisaIcon} alt="" width={40} height={40} />
                                <NextImage src={MasterCardIcon} alt="" width={102} height={22} />
                                <NextImage src={SofortIcon} alt="" width={65} height={24} />
                                <NextImage src={DMCAIcon} alt="" width={52} height={24} />
                            </div>
                            <div className="!mt-[48px] h-[1px] bg-light/50 lg:hidden" />
                        </div>
                    </div>

                    {isValid && (
                        <div className="mt-[60px] flex items-center rounded-[12px] bg-[rgba(255,255,255,0.1)] py-[10px] px-[30px] text-white lg:h-[70px] lg:pl-[70px]">
                            <NextImage className="mr-2" src={InfoIcon} width={30} height={30} alt="" />
                            {calculatedData &&
                                (calculatedData.tokensWithBonus !== calculatedData.tokens ? (
                                    <>
                                        <span>
                                            If you buy right now you get{' '}
                                            <b className="!text-white">
                                                {fCurrency(calculatedData.tokensWithBonus)} SDMS tokens&nbsp;
                                            </b>
                                            ({fCurrency(calculatedData.tokens)} tokens +{' '}
                                            <b className="!text-white">
                                                bonus{' '}
                                                {fCurrency(calculatedData.tokensWithBonus - calculatedData.tokens)}{' '}
                                                tokens
                                            </b>
                                            )
                                        </span>
                                    </>
                                ) : (
                                    <span>
                                        You get{' '}
                                        <b className="!text-white">
                                            {fCurrency(calculatedData.tokensWithBonus)} SDMS tokens&nbsp;
                                        </b>
                                    </span>
                                ))}
                        </div>
                    )}

                    <div className="mt-[32px] flex justify-center lg:mt-[60px]">
                        <LargeButton
                            disabled={isCurrentStageEnded || !agree || !isValid}
                            onClick={toggleSwithereDialog}
                            className="relative !w-full max-w-[500px] lg:max-w-none"
                        >
                            BUY & TRANSFER TOKENS
                        </LargeButton>
                    </div>

                    <button
                        className={`${classes.link} !mx-auto mt-[48px] !block !text-[18px] lg:mt-[60px]`}
                        onClick={onBack}
                    >
                        {'<< Back'}
                    </button>
                </div>
            </div>
        </>
    );
};

export default BuyTokensByCardFrame;
