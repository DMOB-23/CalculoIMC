import { Button, Text, TextInput, View } from "react-native"
import ImcResult from "../components/imc-result"
import { useImc } from "../hooks/use-imc"
import imcStyles from "./styles"

const Imc = () => {

  const { setHeight, setWeight, calculate, result} = useImc();

  return (
    <View style={imcStyles.container}>
      <Text>Peso</Text>
      <TextInput style={imcStyles.input} onChangeText={setWeight}
        keyboardType="decimal-pad" />

      <Text>Altura</Text>
      <TextInput style={imcStyles.input} onChangeText={setHeight}
        keyboardType="decimal-pad" />

      <ImcResult result={result} />

      <Button title="Calcular" onPress={calculate} />
    </View>
  )
}

export default Imc