import { useState } from "react"
import { UseImcResult } from "./interfaces"

export const useImc = (): UseImcResult => {
  
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [result, setResult] = useState<number>()

  const calculate = () => {
    const fHeight = parseFloat(height)
    const fWeight = parseFloat(weight)

    const imc = fWeight / (fHeight * fHeight)
    setResult(imc)
  }

  return {
    setWeight,
    setHeight,
    calculate,
    result,
  }
}