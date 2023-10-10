import NextImage, {StaticImageData} from 'next/image';
import Link from 'next/link';
import {FC} from 'react';

import Typography from '../../../../../atoms/Typography';
import classes from '../HeroFrame.module.css';
interface ContactItemProps {
    image: StaticImageData;
    title: string;
    subtitle: string;
    bg: string;
    link: string;
}

const ContactItem: FC<ContactItemProps> = ({image, title, subtitle, bg, link}) => {
    return (
        <Link href={link} target="_blank">
            <div className={classes.contacts}>
                <NextImage src={image} alt="" width={60} height={60} />
                <div className="flex flex-col items-start gap-1.5 pr-[40px]">
                    <Typography variant="body3" className="!text-white/60">
                        {title}
                    </Typography>
                    <Typography variant="body2" className="uppercase tracking-wide">
                        {subtitle}
                    </Typography>
                    <div className={classes.gradient} style={{background: bg}} />
                </div>
            </div>
        </Link>
    );
};
export default ContactItem;
