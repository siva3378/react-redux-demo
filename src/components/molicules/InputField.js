import React from 'react';
import { Input, Label, FieldWrapper } from '../atoms';
import debounce from 'debounce';

const InputField = ({
    label,
    units,
    value,
    onChange,
    error,
    errorText
}) => {
    const onChangeHandler = (e) => {
        onChange(e.target.value);
    };

    return (<FieldWrapper>
        <Label error={!!error}>{label}</Label>
        <Input
            type="text"
            value={value}
            onChange={onChangeHandler}
            error={!!error}
        />
        <Label inline>{units}</Label>
        {
            !!error
                ? <Label error>{errorText}</Label>
                : <noscript />
        }
    </FieldWrapper>);
}


export default InputField;