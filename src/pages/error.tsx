import type {NextPage} from 'next';
import {memo} from 'react';

import Layout from 'src/components/Layout/Layout';

const ErrorPage: NextPage = memo(() => {
    return <Layout>Error</Layout>;
});

export default ErrorPage;
