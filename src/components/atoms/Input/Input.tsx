import {
    ChangeEventHandler,
    DetailedHTMLProps,
    FC,
    InputHTMLAttributes,
    memo,
    ReactNode,
    useCallback,
    useEffect,
    useState,
} from 'react';

type availableValue = string | number;

type inputHTMLProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface InputProps extends Omit<inputHTMLProps, 'prefix' | 'onChange'> {
    value?: availableValue;
    precision?: number;

    customStyle?: string;

    onChange?(value?: availableValue): void;

    prefix?: ReactNode;
    suffix?: ReactNode;
}

const Input: FC<InputProps> = memo(
    ({
        className = '',
        id,
        style,
        customStyle = 'py-5  text-sm appearance-none focus:outline-0 bg-[#E0E3ED] text-black disabled:pointer-events-none placeholder:text-black/60',
        prefix,
        suffix,
        placeholder,
        value,
        onChange,
        onBlur,
        precision,
        onKeyDown,
        ...rest
    }): JSX.Element | null => {
        const [local, setLocal] = useState(value);
        const {type, disabled, min} = rest;

        useEffect(() => {
            setLocal(value);
        }, [value]);

        const onChangeLocal: ChangeEventHandler<HTMLInputElement> = useCallback(
            ({target: {value, valueAsNumber}}) => {
                const nextValue = type === 'number' ? (isNaN(valueAsNumber) ? undefined : valueAsNumber) : value;
                setLocal(nextValue);
                onChange?.(nextValue);
            },
            [onChange, type],
        );

        const onKeyDownLocal: Required<inputHTMLProps>['onKeyUp'] = useCallback(
            e => {
                if (type === 'number' && e.key === ',' && false) {
                    e.preventDefault();
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    e.target.value += '.';
                }
                onKeyDown?.(e);
            },
            [type, onKeyDown],
        );

        const onBlurLocal: Required<inputHTMLProps>['onFocus'] = useCallback(
            e => {
                const hasMin = typeof min === 'number';
                const hasPrecision = typeof precision === 'number';

                if (type === 'number' && typeof local === 'number' && (hasMin || hasPrecision)) {
                    let nextValue = local;

                    if (hasMin) {
                        nextValue = Math.max(local, min);
                    }

                    if (hasPrecision) {
                        nextValue = parseFloat(nextValue.toFixed(precision));
                    }

                    setLocal(nextValue);
                    onChange?.(nextValue);
                }
                onBlur?.(e);
            },
            [local, onBlur, onChange, precision, type, min],
        );

        return (
            <div
                id={id}
                style={style}
                className={`${className} bg-bg-input flex flex-nowrap items-stretch ${
                    disabled ? 'cursor-not-allowed opacity-20' : ''
                }`}
            >
                {prefix ? (
                    <div className="inline-flex shrink-0 items-center justify-center pl-4 pr-2">{prefix}</div>
                ) : null}
                <input
                    {...rest}
                    className={`flex-auto  rounded-none  ${suffix ? 'pr-0' : ''} ${
                        prefix ? 'pl-0' : ''
                    } ${customStyle} px-5`}
                    value={local || ''}
                    onBlur={disabled ? undefined : onBlurLocal}
                    onKeyDown={disabled ? undefined : onKeyDownLocal}
                    onChange={disabled ? undefined : onChangeLocal}
                    placeholder={placeholder}
                />
                {suffix ? (
                    <div className="inline-flex shrink-0 items-center justify-center pr-4 pl-2">{suffix}</div>
                ) : null}
            </div>
        );
    },
);

Input.defaultProps = {
    type: 'text',
    precision: 2,
};

export default Input;
