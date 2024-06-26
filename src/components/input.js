// input.js
import React from 'react';
import { TextInput } from 'react-native-paper';
import { primaryColor } from '../config/colors';

export const Input = (props) => {
    const { label, value, onChangeText, icon, type } = props;

    return (
        <TextInput
            label={label}
            value={value}
            onChangeText={onChangeText}
            style={{}}
            mode="outlined"
            activeUnderlineColor={primaryColor}
            left={<TextInput.Icon icon={icon} />}
            keyboardType={type}
        />
    );
};
