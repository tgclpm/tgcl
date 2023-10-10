import {NextPage} from 'next';
import NextErrorComponent from 'next/error';

interface Props {
    statusCode: number;
}

const CustomErrorComponent: NextPage<Props> = ({statusCode}) => {
    return <NextErrorComponent statusCode={statusCode} />;
};

export default CustomErrorComponent;
