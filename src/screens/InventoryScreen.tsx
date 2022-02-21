import { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Title } from "../components/Title";
import { ValuableCard } from "../components/valuableCard";
import ValuableContext from "../context/ValuablesContext";
import { RootTabScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";

export default function InventoryScreen({
  navigation,
  route,
}: RootTabScreenProps<"Inventory">) {
  const handleAddButtonPress = () => navigation.navigate("AddItem");

  const { valuables } = useContext(ValuableContext);

  return (
    <View style={styles.container}>
      <Title onButtonPress={handleAddButtonPress}>{route.name}</Title>
      <FlatList
        data={valuables}
        renderItem={({ item }) => <ValuableCard item={item} />}
        numColumns={2}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
});
