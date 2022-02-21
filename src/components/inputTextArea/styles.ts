import { StyleSheet } from 'react-native';
import { fonts } from '../../theme/fonts';

export const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.bold,
    fontSize: 12,
    lineHeight: 24,
  },
  input: {
    fontSize: 18,
    width: "100%",
    height: 100,
  },
  inputContainer: {
    width: "100%",
    height: 150,
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius: 8,
    borderColor: "lightgrey",
    borderWidth: 1,
    padding: 8,
  },
});