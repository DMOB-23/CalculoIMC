import { StyleSheet } from "react-native";

const imcStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },

  input: {
    borderWidth: 1,
    fontSize: 14,
    borderColor: '#dedede',
    paddingStart: 8,
    borderRadius: 8,
    marginBottom: 16,
  },

  resultContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },

  result: {
    alignItems: 'center'
  },

  textLarge: {
    fontSize: 24,
  },

  textHuge: {
    fontSize: 128,
    includeFontPadding: false,
  },
})

export default imcStyles