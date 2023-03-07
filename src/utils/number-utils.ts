export const formatNumber = (value: number): string => {
  if (value < 0) {
    return "-"
  }

  const fmt = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 1, 
    maximumFractionDigits: 2,
    minimumIntegerDigits: 1,
  })

  return fmt.format(value)
}
