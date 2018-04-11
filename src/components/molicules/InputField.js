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

    let onChangeHandler = (e) => {
        onChange(e.target.value);
    };

    return (<FieldWrapper>
        <Label error={!!error}>{label}</Label>
        <Input
            type="number"
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