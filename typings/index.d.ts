declare module '*.svg' {
    import {FC, SVGProps} from 'react';

    export const ReactComponent: FC<SVGProps<SVGSVGElement>>;

    const value: string;

    export default value;
}

declare module '*.png' {
    const value: string;
    export default value;
}
