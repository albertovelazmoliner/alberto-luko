import { Image, StyleSheet, Text, View } from "react-native";
import { Valuable } from "../../domain";
import { styles } from "./styles";

export const ValuableCard = (props: { item: Valuable }) => {
  const { item } = props;
  const localeCurrency = new Intl.NumberFormat().format(item.purchasePrice);
  return (
    <View style={styles.container}>
      <Image style={styles.imageThumbnail} source={{ uri: item.photo }} />
      <Text lineBreakMode="tail" numberOfLines={2} style={styles.name}>
        {item.name}
      </Text>
      <Text style={styles.price}>{`€${localeCurrency}`}</Text>
    </View>
  );
};
