import {FC, HTMLProps, MouseEventHandler, PropsWithChildren} from 'react';

import classes from './Button.module.css';

interface ButtonProps {
    className?: string;
    style?: HTMLProps<HTMLButtonElement>['style'];
    type?: 'button' | 'submit' | 'reset';
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({className = '', children, ...others}) => {
    return (
        <button className={`${classes.button_root} ${className} `} {...others}>
            {children}
        </button>
    );
};

export default Button;
