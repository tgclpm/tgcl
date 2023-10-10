import {useMediaQuery} from 'usehooks-ts';

function useDesktop() {
    return useMediaQuery('(min-width: 768px)');
}

export default useDesktop;
