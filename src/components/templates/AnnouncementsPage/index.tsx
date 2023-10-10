import process from 'process';

import axios from 'axios';
import {useEffect, useState} from 'react';

import Container from '../../atoms/Container';

import Typography from '../../atoms/Typography';

import styles from './AnnouncementsPage.module.css';

const endpoint = `${process.env.NEXT_PUBLIC_FLOTIQ_BASE_URL}/content/announcements`;
const apiKey = process.env.NEXT_PUBLIC_FLOTIQ_API_KEY || '';

export default function AnnouncementsPage() {
    const [data, setData] = useState<{announcements: string} | undefined>(undefined);
    const [error, setError] = useState<string | undefined>(undefined);
    const getAnnouncementsPageData = async () => {
        try {
            const {
                data: {data},
            } = await axios.get(`${endpoint}`, {
                headers: {'X-Auth-Token': apiKey},
            });

            setData(data[0]);
        } catch (e: unknown) {
            setError(axios.isAxiosError(e) ? e.message : '');
        }
    };

    useEffect(() => {
        getAnnouncementsPageData();
    }, []);

    return (
        <div className="bg-white py-[60px] lg:py-[80px]">
            <Container>
                <Typography
                    className="leading-[100%]: mb-[60px] !text-left !text-[30px] !text-[#191919] lg:!text-[69px]"
                    variant="h1"
                >
                    announcements
                </Typography>
            </Container>
            <Container className={styles.root}>
                {data ? <div dangerouslySetInnerHTML={{__html: data.announcements}} /> : null}

                {error ? 'An error occurred while loading the page' : null}
            </Container>
        </div>
    );
}
