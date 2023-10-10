import type {NextPage} from 'next';

import Layout from '../components/Layout/Layout';

import DocumentTitle from 'src/components/atoms/DocumentTitle';
import MainPage from 'src/components/templates/MainPage';

const Home: NextPage = () => {
    return (
        <Layout>
            <DocumentTitle
                title="Welcome to The Great Crypto Lottery."
                description="A completely decentralized lottery with no owner on the Ethereum chain"
            />

            <section className="flex flex-col">
                <MainPage />
            </section>
        </Layout>
    );
};

export default Home;
