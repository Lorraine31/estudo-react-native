import React from "react";
import { View, Text } from "react-native";
import Estilo from "./estilo";

export default props => {
    return (
        <View>
            {/* para retornar mais de um elemento, é necessário colocar todos dentro de uma <View />, <React.Fragment />, apenas <> < /> ou qlq outro "envelopamento" (método conhecido como "fragment") */}
            <Text style={Estilo.txtG}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </View>
    )
}