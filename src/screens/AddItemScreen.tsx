import { Alert, StyleSheet, View } from "react-native";
import { ValuableForm } from "../components/valuableForm";

import Button from "../components/Button";
import { RootTabScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";
import { useValuables } from "../hooks";
import { useEffect, useState } from "react";

export default function AddItemScreen({
  navigation,
}: RootTabScreenProps<"AddItemScreen">) {
  const { addValuable } = useValuables();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const [addButtonDisabled, setAddButtonDisabled] = useState(true);

  useEffect(() => {
    if (name.length > 0 && image.length > 0 && price !== null) {
      setAddButtonDisabled(false);
    } else {
      setAddButtonDisabled(true);
    }
  }, [name, image, price]);

  const showAlert = (message: string) =>
    Alert.alert(
      "Action failed",
      message,
      [
        {
          text: "Ok",
          style: "default",
        },
      ]
    );

  const addValuableHandler = () => {
    try {
      addValuable(name, price, description, image);
      navigation.goBack();
    } catch (err: any) {
      showAlert(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button
          title="Add"
          disabled={addButtonDisabled}
          onPress={addValuableHandler}
        />
      </View>
      <ValuableForm
        onChangeName={(name: string) => setName(name)}
        onChangeDescription={(description: string) =>
          setDescription(description)
        }
        onChangePhoto={(image: string) => setImage(image)}
        onChangePrice={(price: string) => setPrice(price)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
    paddingTop: 10,
  },
  buttonsContainer: {
    width: "100%",
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
});
