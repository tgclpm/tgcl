import {FC, HTMLProps, MouseEventHandler, ReactNode} from 'react';

import classes from './SmallButton.module.css';

interface SmallButtonProps {
    className?: string;
    children: ReactNode;
    style?: HTMLProps<HTMLButtonElement>['style'];
    type?: 'button' | 'submit' | 'reset';
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

const SmallButton: FC<SmallButtonProps> = ({className = '', children, onClick, disabled, ...others}) => {
    return (
        <button className={`${classes.button_root} ${className} `} onClick={onClick} {...others} disabled={disabled}>
            {children}
        </button>
    );
};

export default SmallButton;
