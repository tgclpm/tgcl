/**
 * Created by Mitin M. on 07.04.2022
 */

import {
    ChangeEvent,
    ChangeEventHandler,
    DetailedHTMLProps,
    FC,
    memo,
    ReactNode,
    TextareaHTMLAttributes,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

type textAreaHTMLProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

interface BaseProps {
    value?: string;

    customStyle?: string;

    onChange?(value?: string): void;

    prefix?: ReactNode;
    suffix?: ReactNode;
}

interface TextAreaElementProps extends BaseProps, Omit<textAreaHTMLProps, 'onChange' | 'value' | 'prefix'> {}

const TextArea: FC<TextAreaElementProps> = memo(({...props}): JSX.Element => {
    const {
        className = '',
        customStyle = 'text-sm appearance-none resize-none overflow-hidden focus:outline-0 bg-bg-input placeholder:text-black/60 disabled:pointer-events-none',
        id,
        style,
        prefix,
        suffix,
        placeholder,
        value,
        onChange,
        disabled,
        maxLength,
        ...rest
    } = props;

    const input = useRef<HTMLTextAreaElement>(null);
    const [local, setLocal] = useState(value);

    const setHeight = useCallback(() => {
        if (input.current) {
            const elem = input.current;

            elem.style.height = `auto`;
            elem.style.height = `${elem.scrollHeight}px`;
        }
    }, []);

    const onChangeLocal: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
        (e: ChangeEvent<HTMLTextAreaElement>) => {
            const newValue = e.target.value;

            setLocal(newValue);
            onChange?.(newValue);
        },
        [onChange],
    );

    useEffect(() => {
        setLocal(value || '');
    }, [value]);

    useEffect(() => {
        setHeight();
    }, [local, setHeight]);

    return (
        <div
            id={id}
            style={style}
            className={`${className} bg-bg-input flex flex-nowrap items-stretch ${
                disabled ? 'cursor-not-allowed opacity-20' : ''
            }`}
        >
            {prefix ? <div className="inline-flex shrink-0 items-center justify-center pl-4 pr-2">{prefix}</div> : null}

            <textarea
                {...rest}
                className={`flex-auto ${suffix ? 'pl-0' : ''} ${prefix ? 'pr-0' : ''} ${customStyle}`}
                value={local || ''}
                onChange={disabled ? undefined : onChangeLocal}
                rows={1}
                ref={input}
                placeholder={placeholder}
                maxLength={maxLength}
            />

            {suffix ? <div className="inline-flex shrink-0 items-center justify-center pr-4 pl-2">{suffix}</div> : null}
        </div>
    );
});

export default TextArea;
