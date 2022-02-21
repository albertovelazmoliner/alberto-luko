import { Ionicons } from "@expo/vector-icons";
import { StyleProp, TextStyle, View } from "react-native";

export function IoninconsIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  iconStyle: StyleProp<TextStyle>;
  size: number;
}) {
  return (
    <View>
      <Ionicons size={props.size} name={props.name} style={props.iconStyle} />
    </View>
  );
}
