import { Text, View } from "react-native"
import { formatNumber } from "../utils/number-utils"
import { ImcResultProps } from "./interfaces"
import imcResultStyles from "./styles"

const ImcResult = ({ result }: ImcResultProps) => {

  return (
    <View style={imcResultStyles.resultContainer}>
      {
        result ?
          <View style={imcResultStyles.result}>
            <Text style={imcResultStyles.textLarge}>Seu IMC é</Text>
            <Text style={imcResultStyles.textHuge}>{formatNumber(result)}</Text>
          </View>
          : null
      }
    </View>
  )
}

export default ImcResult