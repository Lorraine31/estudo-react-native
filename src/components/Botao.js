import React from "react";
import { Button } from "react-native";

export default props => {
    function executar() {
        console.warn("Executado!");
    }
    
    return (
        <>
            <Button
                title="Executar #01"
                onPress={executar} // onPress é o evento de clique do botão. 
                //Aqui eu passo a função executar() como parâmetro para o evento onPress.
            />
            <Button
                title="Executar #02"
                onPress={function() {
                    console.warn("Executado #02!")
                    //Aqui eu passo uma função anônima como parâmetro para o evento onPress.
                }} 
            />
            <Button
                title="Executar #03"
                onPress={() => console.warn("Executado #03!")} 
                //Aqui eu passo uma arrow function como parâmetro para o evento onPress.
            />
        </>   
    );
}