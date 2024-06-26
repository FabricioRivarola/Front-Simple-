// passinput.js
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { primaryColor } from '../config/colors';

export const PassInput = (props) => {
    const { label, value, onChangeText, icon, type } = props;
    const [secureText, setSecureText] = useState(type === 'password');
    const [eyeIcon, setEyeIcon] = useState('eye-off');

    const toggleSecureText = () => {
        setSecureText(!secureText);
        setEyeIcon(secureText ? 'eye' : 'eye-off');
    };

    return (
        <TextInput
            label={label}
            value={value}
            onChangeText={onChangeText}
            style={{ marginVertical: 15 }}
            mode="outlined"
            activeUnderlineColor={primaryColor}
            left={icon && <TextInput.Icon icon={icon} />}
            right={
                type === 'password' && (
                    <TextInput.Icon
                        icon={eyeIcon}
                        onPress={toggleSecureText}
                    />
                )
            }
            secureTextEntry={secureText}
            keyboardType={type === 'password' ? 'default' : type}
        />
    );
};
