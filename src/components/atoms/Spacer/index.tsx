import {ComponentProps, FC} from 'react';

import classes from './Spacer.module.css';

interface IProps {
    variant: 'v1' | 'v2' | 'v3';
    className?: ComponentProps<'div'>['className'];
}

const Spacer: FC<IProps> = ({variant, className}) => {
    return (
        <>
            {variant === 'v1' && <div className={`${classes.v1} ${className}`} />}
            {variant === 'v2' && <div className={`${classes.v2} ${className}`} />}
            {variant === 'v3' && <div className={`${classes.v3} ${className}`} />}
        </>
    );
};

export default Spacer;
