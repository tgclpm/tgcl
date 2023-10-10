import {Input, SelectProps} from 'antd';
import {ChangeEvent, useCallback} from 'react';

import {IGetNumberOfTokensForBUSDResult} from '../../organisms/BuyTokensFrame/helpers/getNumberOfTokensForBUSD';
import Typography from '../Typography';

const SelectCardField = ({
    onChange,
    value,
    className = '',
}: {
    calculatedData: IGetNumberOfTokensForBUSDResult | null;
    onChange: (value: SelectProps['value']) => void;
    className?: string;
    value: SelectProps['value'];
}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value: inputValue} = e.target;
        const reg = /^[1-9]\d*$/;
        if (reg.test(inputValue) || inputValue === '') {
            onChange(inputValue);
        }
    };

    const handleBlur = () => {
        let valueTemp = value;
        if (value.charAt(value.length - 1) === '.' || value === '-') {
            valueTemp = value.slice(0, -1);
        }
        onChange(valueTemp.replace(/0*(\d+)/, '$1'));
    };

    const getHelperText = useCallback(() => {
        if (Number(value) > 0 && Number(value) < 10) {
            return (
                <Typography variant="body2" className="mt-[4px] pl-[30px] !text-left !text-[#FF3A3A]">
                    Amount have to be at least 10 BUSD tokens
                </Typography>
            );
        } else if (Number(value) > 0 && Number(value) > 100000) {
            return (
                <Typography variant="body2" className="mt-[4px] pl-[30px] !text-left !text-[#FF3A3A]">
                    Amount have to be less than 100’000 BUSD tokens
                </Typography>
            );
        } else {
            return null;
        }
    }, [value]);

    return (
        <>
            <div className="w-full">
                <Input
                    placeholder="Enter amount of BUSD tokens"
                    className={`w-full ${className} selectRoot`}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    width="100%"
                />
                {getHelperText()}
            </div>

            <style jsx global>{`
                .ant-select-selector,
                .ant-input {
                    height: 72px !important;
                    padding-left: 30px !important;
                    padding-right: 30px !important;
                    border-color: rgba(255, 255, 255, 0.1) !important;
                    background-color: #15021f;
                    border-radius: 10px;
                    backdrop-filter: blur(10px);
                }

                .ant-select-selection-search-input {
                    height: 72px !important;
                }

                .ant-select-selector:not(:active):hover,
                .ant-input:hover {
                    background-color: rgba(45, 10, 63, 1) !important;
                }

                .ant-select-selector:active {
                    color: rgba(58, 15, 80, 1) !important;
                }

                .ant-select-selector .ant-select-selection-item,
                .ant-select-selection-placeholder,
                .ant-input {
                    line-height: 70px !important;
                    font-size: 20px !important;
                    color: #fff !important;
                }

                .ant-input::placeholder {
                    color: rgba(255, 255, 255, 0.2) !important;
                    line-height: 70px !important;
                    font-size: 20px !important;
                }

                .ant-select-selection-item {
                    max-width: 80vw;
                }

                .ant-select-item.ant-select-item-option {
                    margin-top: 10px !important;
                    padding: 10px 30px !important;
                    font-size: 14px;
                }

                .ant-select-item.ant-select-item-option:last-child {
                    margin-bottom: 30px;
                }

                .ant-select-item.ant-select-item-option.ant-select-item-option-selected {
                    background: rgba(255, 255, 255, 0.1) !important;
                }

                .ant-select-dropdown {
                    border-radius: 10px;
                    padding: 0;
                    background: #15021f !important;
                    border: solid 1px rgba(255, 2555, 255, 0.1);
                    max-height: 235px;
                }

                .ant-select-arrow {
                    color: #fff !important;
                    right: 30px !important;
                }

                .ant-select-dropdown .ant-select-item-option-disabled {
                    color: rgba(255, 255, 255, 0.4);
                }

                @media (max-width: 1023px) {
                    .ant-select-selector {
                        padding-left: 16px !important;
                        padding-right: 16px !important;
                        background: #4e0077 !important;
                    }

                    .ant-select.ant-select-open .ant-select-selector {
                        background: #4e0077 !important;
                    }

                    .ant-select:not(.ant-select-open) .ant-select-selector:hover {
                        background: #2d0044 !important;
                    }

                    .ant-select:not(.ant-select-open) .ant-select-selector:active {
                        background-color: #4e0077 !important;
                    }

                    .ant-select-dropdown {
                        border-radius: 10px;
                        background: #2d0044 !important;
                    }

                    .ant-select-arrow {
                        right: 16px !important;
                    }
                }
            `}</style>
        </>
    );
};

export default SelectCardField;
