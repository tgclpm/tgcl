import {useRouter} from 'next/router';
import {useEffect} from 'react';

function useReferral() {
    const {
        query: {r},
    } = useRouter();

    useEffect(() => {
        if (r) {
            window.localStorage.setItem('ref_code', r as string);
        }
    }, [r]);
}

export default useReferral;
