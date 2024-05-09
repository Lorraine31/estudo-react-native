import React, {useState} from 'react';
import Filho from '../direta/Filho';
import { Text } from 'react-native';
import Estilo from '../estilo';

export default props => {
    const [num, setNum] = useState(0) //useState() retorna um array com 2 elementos: o primeiro é o valor e o segundo é uma função que altera o valor.
    const [texto, setTexto] = useState(0)
    
    function exibirValor(numero, texto) { //função que recebe o valor do filho
        setNum(numero)
        setTexto(texto)
    }
    
    return (
        <>
            <Text style={Estilo.txtG}>{num}
                {texto}{num}
            </Text>
            <Filho
                min={1}
                max={60}
                funcao={exibirValor} //passando a função exibirValor() como parâmetro para o componente filho.
            />
        </>
    )
}