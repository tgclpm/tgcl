import {ComponentProps, FC, ReactNode} from 'react';

import classes from './Typography.module.css';

interface IProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'subtitle' | 'heading' | 'body1' | 'body2' | 'body3';
    className?: ComponentProps<'div'>['className'];
    style?: ComponentProps<'div'>['style'];
    children?: ReactNode;
}

const Typography: FC<IProps> = ({variant, children, className = '', style}) => {
    return (
        <>
            {variant === 'h1' && (
                <h1 className={`${classes.heading_h1} ${className}`} style={style}>
                    {children}
                </h1>
            )}
            {variant === 'h2' && ( // 32px 55px
                <h2 className={`${classes.heading_h2} ${className}`} style={style}>
                    {children}
                </h2>
            )}
            {variant === 'h3' && ( // 32px 40px
                <h3 className={`${classes.heading_h3} ${className}`} style={style}>
                    {children}
                </h3>
            )}
            {variant === 'h4' && ( // 20px 24px
                <h4 className={`${classes.heading_h4} ${className}`} style={style}>
                    {children}
                </h4>
            )}
            {variant === 'subtitle' && ( // 16px 20px
                <div className={`${classes.heading_subtitle} ${className}`} style={style}>
                    {children}
                </div>
            )}
            {variant === 'heading' && (
                <h1 className={`${classes.heading} ${className}`} style={style}>
                    {children}
                </h1>
            )}
            {variant === 'body1' && (
                <div className={`${classes.heading_body1} ${className}`} style={style}>
                    {children}
                </div>
            )}
            {variant === 'body2' && (
                <div className={`${classes.heading_body2} ${className}`} style={style}>
                    {children}
                </div>
            )}
            {variant === 'body3' && (
                <div className={`${classes.heading_body3} ${className}`} style={style}>
                    {children}
                </div>
            )}
        </>
    );
};

export default Typography;
