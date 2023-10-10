import NextImage from 'next/image';

import {FC, ReactNode, useState} from 'react';

import cross from './cross.svg';

import Typography from 'src/components/atoms/Typography';

interface Item {
    title: string;
    description: ReactNode;
}

const AccordionItem: FC<Item> = ({title, description}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col space-y-[20px] border-b-[1px] border-b-light/20 py-[20px]">
            <button className="btn-free flex items-center justify-between" onClick={() => setIsOpen(o => !o)}>
                <Typography variant="h4" className="mr-[20px] text-start">
                    {title}
                </Typography>
                <div className="flex h-[50px] w-[50px] items-center justify-center">
                    <NextImage
                        src={cross}
                        alt=""
                        className={`transition-all ${isOpen ? 'rotate-45' : ''}`}
                        width={22.5}
                        height={22.5}
                    />
                </div>
            </button>
            <Typography
                variant="body1"
                className={`h-0 overflow-hidden whitespace-pre-line text-start transition-all ${
                    isOpen ? 'h-auto' : '!my-0'
                }`}
            >
                {description}
            </Typography>
        </div>
    );
};

interface AccordionProps {
    items: Array<Item>;
    className?: string;
}

const Accordion: FC<AccordionProps> = ({items, className = ''}) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <div className="h-[1px] bg-light/20" />
            {items.map(item => (
                <AccordionItem key={item.title} {...item} />
            ))}
        </div>
    );
};

export default Accordion;
