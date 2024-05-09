import React from 'react';
import { Text } from 'react-native';
import Estilo from './estilo';

export default props => {
    if (props.num % 2 === 0) {
        return (
            <Text style={Estilo.txtG}>
                Par
            </Text>
        )
    } else {
        return (
            <Text style={Estilo.txtG}>
                Ímpar
            </Text>
        )
    }
}