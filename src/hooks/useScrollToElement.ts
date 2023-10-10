import {useCallback} from 'react';

function useScrollToElement(elementId: string, block: ScrollLogicalPosition = 'start') {
    const scroll = useCallback(() => {
        document.querySelector(elementId)?.scrollIntoView({
            behavior: 'smooth',
            block,
        });
    }, [elementId, block]);

    return scroll;
}

export default useScrollToElement;
