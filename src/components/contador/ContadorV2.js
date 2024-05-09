import React, { useState } from 'react';
import { Text } from 'react-native';
import Estilo from '../estilo';
import ContadorDisplay from './ContadorDisplay';
import ContadorBotoes from './ContadorBotoes';

export default props => {
    const [num, setNum] = useState(0)
    
    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)
    
    return (
        <>
            <Text style={Estilo.txtG}>
                Contador V2
            </Text>
            <ContadorDisplay num={num} />
            {/* aqui há uma comunicação direta, pois o componente ContadorDisplay recebe o valor de num diretamente do componente ContadorV2. */}
            
            <ContadorBotoes inc={inc} dec={dec} />
            {/* aqui há uma comunicação indireta, pois o componente ContadorBotoes não recebe o valor de num diretamente do componente ContadorV2, mas sim através de uma função que é passada como parâmetro. */}
        </>
    )
}