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
    },
    inputContainer: {
      width: "100%",
      height: 42,
      backgroundColor: "white",
      flexDirection: "row",
      alignItems: "flex-start",
      borderRadius: 8,
      borderColor: "lightgrey",
      borderWidth: 1,
      padding: 8,
    },
    rightIcon: {
      position: "absolute",
      right: 0,
      color: "grey",
    },
  });