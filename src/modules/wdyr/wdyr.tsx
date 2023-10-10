/// <reference types="@welldone-software/why-did-you-render" />
/**
 * WDYR (why-did-you-render) помогает найти ненужные повторные рендеры.
 * Применяется в режиме разработки, только во внешнем интерфейсе.
 *
 * Будет регистрировать только ненужные повторные рендеры.
 *
 * @см https://github.com/welldone-software/why-did-you-render
 * @см https://github.com/vercel/next.js/tree/canary/examples/with-why-did-you-render
 */

// eslint-disable-next-line no-restricted-imports
import React from 'react';

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const whyDidYouRender = require('@welldone-software/why-did-you-render');
    // eslint-disable-next-line no-console
    console.debug(
        'Applying whyDidYouRender, to help you locate unnecessary re-renders during development. See https://github.com/welldone-software/why-did-you-render',
    );

    // See https://github.com/welldone-software/why-did-you-render#options
    whyDidYouRender(React, {
        trackAllPureComponents: true,
        trackHooks: true,
        logOwnerReasons: false,
        collapseGroups: false,
    });
}
