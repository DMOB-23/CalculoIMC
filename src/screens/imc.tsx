import { useState } from "react"
import { Button, Text, TextInput, View } from "react-native"
import imcStyles from "./styles"

const Imc = () => {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [result, setResult] = useState<number>()

  const calculate = () => {
    const fHeight = parseFloat(height)
    const fWeight = parseFloat(weight)

    const imc = fWeight / (fHeight * fHeight)
    setResult(imc)
  }

  const formatNumber = (value: number): string => {
    const fmt = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 1, 
      maximumFractionDigits: 1
    })

    return fmt.format(value)
  }

  return (
    <View style={imcStyles.container}>
      <Text>Peso</Text>
      <TextInput style={imcStyles.input} onChangeText={setWeight}
        keyboardType="decimal-pad" />

      <Text>Altura</Text>
      <TextInput style={imcStyles.input} onChangeText={setHeight}
        keyboardType="decimal-pad" />

      <View style={imcStyles.resultContainer}>
        {
          result ?
            <View style={imcStyles.result}>
              <Text style={imcStyles.textLarge}>Seu IMC é</Text>
              <Text style={imcStyles.textHuge}>{formatNumber(result)}</Text>
            </View>
            : null
        }
      </View>

      <Button title="Calcular" onPress={calculate} />
    </View>
  )
}

export default Imc