import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  cameraContainer: {
    alignContent: "center",
    borderRadius: 100,
    borderColor: "lightgrey",
    borderStyle: "dashed",
    borderWidth: 2,
    marginBottom: 10,
    marginTop: 10,
    marginStart: "auto",
    marginEnd: "auto",
    height: 140,
    width: 140,
  },
  imageContainer: {
    marginBottom: 10,
    marginTop: 10,
    marginStart: "auto",
    marginEnd: "auto",
    borderRadius: 100,
    borderColor: "lightgrey",
  },
  cameraLogo: {
    color: colors.mainBlue,
  },
  cameraBlock: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    height: 140,
    width: 140,
  },
  picture: {
    width: 140,
    height: 140,
    alignContent: "center",
    borderRadius: 100,
  },
});
