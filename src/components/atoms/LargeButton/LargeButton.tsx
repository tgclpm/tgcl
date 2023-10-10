import Link from 'next/link';
import {FC, HTMLProps, MouseEventHandler, ReactNode} from 'react';

import classes from '../LargeButton/LargeButton.module.css';

interface largeButtonProps {
    className?: string;
    linkClassName?: string;
    children: ReactNode;
    style?: HTMLProps<HTMLButtonElement>['style'];
    type?: 'button' | 'submit' | 'reset';
    onClick?: MouseEventHandler<HTMLButtonElement>;
    color?: 'blue' | 'gray';
    disabled?: boolean;
    to?: string;
}

const colors = {
    blue: classes.blue_color,
    gray: classes.gray_color,
};

const LargeButton: FC<largeButtonProps> = ({
    className = '',
    linkClassName = '',
    children,
    onClick,
    to,
    color = 'blue',
    disabled,
    ...others
}) => {
    if (to && !disabled) {
        return (
            <Link href={to} className={`w-full ${linkClassName}`}>
                <button
                    className={`${classes.button_root} ${colors[color]} lg:!w-full ${className}`}
                    {...others}
                    onClick={onClick}
                >
                    {children}
                </button>
            </Link>
        );
    }

    return (
        <button
            className={`${classes.button_root} ${colors[color]} ${className} `}
            disabled={disabled}
            {...others}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default LargeButton;
