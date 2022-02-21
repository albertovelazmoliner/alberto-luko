import { StyleSheet } from 'react-native';
import { fonts } from '../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 8,
    backgroundColor: "white",
    borderRadius: 8,
    height: 270,
    maxWidth: "50%",
  },
  imageThumbnail: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 160,
    width: "100%",
    resizeMode: "cover",
  },
  name: {
    fontFamily: fonts.bold,
    fontSize: 18,
    marginTop: 16,
    marginStart: 16,
    marginEnd: 16,
    height: 50,
  },
  price: {
    marginTop: 10,
    marginStart: 16,
    marginEnd: 16,
    color: "grey",
  },
});
