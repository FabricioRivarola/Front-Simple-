// botones.js
import React from 'react';
import { Button } from 'react-native-paper';
import { primaryColor } from '../config/colors';
import { StyleSheet } from 'react-native';

const Boton = (props) => {
    const { mode, onPress, title, icon, disabled, loading, style, labelStyle } = props;

    return (
        <Button
            mode={mode || 'contained'}
            onPress={onPress}
            icon={icon}
            disabled={disabled || false}
            loading={loading || false}
            style={[styles.button, style]}
            labelStyle={[styles.label, labelStyle]}
        >
            {title}
        </Button>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: primaryColor,
        marginVertical: 10,
    },
    label: {
        color: 'white',
    },
});

export { Boton };
