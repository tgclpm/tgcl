import NextImage from 'next/image';
import {FC, MouseEventHandler} from 'react';

import check from './check.svg';

interface CheckboxProps {
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    checked?: boolean;
}

const Checkbox: FC<CheckboxProps> = ({className = '', checked = false, onClick, ...others}) => {
    return (
        <button
            className={`mr-[10px] flex h-[24px] w-[24px] min-w-[24px] items-center justify-center rounded-[4px] border-[1px] border-[#BABABA] ${
                checked ? 'border-none bg-gradient-to-r from-[#006EEF] to-[#00CEEA]' : ''
            } ${className} `}
            {...others}
            onClick={onClick}
        >
            {checked && <NextImage src={check} alt="check" width={14} height={11} />}
        </button>
    );
};

export default Checkbox;
