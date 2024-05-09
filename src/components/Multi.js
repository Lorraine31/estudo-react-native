import React from "react";
import { Text } from "react-native";
import Estilo from "./estilo";

export default function Comp() { // esse será o default que posso chamar separado lá no App.js 
  return <Text style={Estilo.txtG}>Comp #Oficial</Text>;
}

function Comp1() {
  return <Text style={Estilo.txtG}>Comp #01</Text>;
}

function Comp2() {
  return <Text style={Estilo.txtG}>Comp #02</Text>;
}

export { Comp1, Comp2 };

//não é comum ter tantas componentes por arquivo, mas é possível. E podemos usar várias maneiras de exportar, como no exemplo acima.