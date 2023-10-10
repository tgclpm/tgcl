import {useMediaQuery} from 'usehooks-ts';

function useMobile() {
    return useMediaQuery('(max-width: 1024px)');
}

export default useMobile;
