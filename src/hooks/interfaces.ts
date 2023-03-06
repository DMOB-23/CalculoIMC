export interface UseImcResult {
  setWeight: (value: string) => void,
  setHeight: (value: string) => void,
  calculate: () => void,
  result? : number,
}