import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
// import Primeiro from './src/components/Primeiro';
// import CompPadrao, { Comp1, Comp2 } from './src/components/Multi';
// import MinMax from './src/components/MinMax';
// import Aleatorio from './src/components/Aleatorio';
// import Titulo from './src/components/Titulo';
// import Botao from './src/components/Botao';
// import Contador from './src/components/Contador';
// import Pai from './src/components/direta/Pai';
// import Pai from './src/components/indireta/Pai';
// import ContadorV2 from './src/components/contador/ContadorV2';
import Diferenciar from './src/components/Diferenciar';

export default function App() {
  return (
    //SafeAreaView é um componente que serve para evitar que o conteúdo seja renderizado embaixo da barra de status do dispositivo. Tanto para Android quanto para iOS.
    <SafeAreaView style={styles.App}>
      {/* <Text>{1 + 1} Será interpretado como JS</Text> */}
      {/* <Primeiro />
      <CompPadrao />
      <Comp1 />
      <Comp2 /> 
      <MinMax min={3} max={20} /> 
      <Aleatorio min={1} max={60} /> 
      <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do Produto" />
      <Botao />
      <Contador inicial={100} passo={13} />
      <Contador />
      <Pai />
      <Pai />
      <ContadorV2 />*/}
      <Diferenciar />
    </SafeAreaView>
  );
}
// <MinMax min={3} max={20} />   assim posso passar os valores que eu quiser para o componente. Usando {} valores numericos.Usando "" , strings.

const styles = StyleSheet.create({ //podemos ver que a escrita das propriedades é baseada no CSS normal, porém com a diferença de que não usamos hífen, mas sim camelCase.
  App: {
    flexGrow: 1,
    fontSize: 25,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
