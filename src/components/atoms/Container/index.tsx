import {FC, ReactNode} from 'react';

interface IProps {
    children: ReactNode;
    className?: string;
}

const Container: FC<IProps> = ({children, className = ''}) => {
    return <div className={`mx-auto box-border w-full max-w-[calc(960px+32px)] px-4 ${className}`}>{children}</div>;
};

export default Container;
