import React, { useState } from "react";
import { Text, Button } from "react-native";
import Estilo from "./estilo";

export default ({ inicial = 0, passo = 1 }) => { // Aqui eu defino um valor padrão para o parâmetro inicial, caso ele não seja passado.
    const [numero, setNumero] = useState(inicial) // useState() retorna um array com 2 elementos: o primeiro é o valor e o segundo é uma função para alterar o valor.
    const inc = () => setNumero(numero + passo) // Aqui eu defino uma função para incrementar o valor do estado.
    const dec = () => setNumero(numero - passo)
    return (
        <>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title="+" onPress={inc} />
            <Button title="-" onPress={dec} />
        
        </>
    )
}
