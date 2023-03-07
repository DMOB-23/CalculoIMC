import { formatNumber } from "../number-utils"

describe('when formatting number', () => {

  describe('and the number has integer and decimal parts', () => {  
    it('formats the number correctly', () => {
      const result = formatNumber(7.91)
      expect(result).toEqual("7,91")
    })  
  })

  describe('and the number has only decimal part', () => {  
    it('formats the number correctly', () => {
      const result = formatNumber(0.32)
      expect(result).toEqual("0,32")
    })
  })

  describe('and the number has a decimal part of 1 digit', () => {  
    it('formats the number correctly', () => {
      const result = formatNumber(0.2)
      expect(result).toEqual("0,2")
    })
  })

  describe('and the number is negative', () => {  
    it('returns a dash', () => {
      const result = formatNumber(-0.32)
      expect(result).toEqual("-")
    })
  })
})

