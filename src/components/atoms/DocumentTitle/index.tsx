import Head from 'next/head';
import {FC, memo, useMemo} from 'react';
import isEqual from 'react-fast-compare';

interface DocumentTitleProps {
    title?: string | Array<string>;
    description?: string | null;
    image?: string | null;
}

const DocumentTitle: FC<DocumentTitleProps> = memo(
    ({title, description, image}): JSX.Element | null => {
        const finalTitle = useMemo(() => {
            return [title]
                .flat(1)
                .filter(v => !!v)
                .join(' | ');
        }, [title]);

        const finalDescription = useMemo(() => {
            return description || '';
        }, [description]);

        const ogImage = useMemo(() => {
            return image || `${process.env.NEXT_PUBLIC_ORIGIN}/images/shiftdao_io_image.png`;
        }, [image]);

        return (
            <Head>
                <title>{finalTitle}</title>
                <meta name="description" content={finalDescription} />
                <meta name="keywords" content="nft, marketplace" />
                <meta property="og:title" content={finalTitle} />
                <meta property="og:description" content={finalDescription} />
                <meta property="og:image" content={ogImage} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content={ogImage} />

                <meta content="#000000" name="msapplication-TileColor" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="robots" content="index,all" />
                <meta name="revisit" content="10 days" />
                <meta name="revisit-after" content="10 days" />
                <meta name="document-state" content="dynamic" />
                <meta name="referrer" content="no-referrer-when-downgrade" />
                <meta name="format-detection" content="telephone=no" />
                <meta property="og:type" content="website" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <meta property="og:url" content="https://shiftdao.io/" />
            </Head>
        );
    },
    ({title}, {title: nextTitle}) => isEqual(title, nextTitle),
);

export default DocumentTitle;
