import { Ionicons } from "@expo/vector-icons";
import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { IoninconsIcon } from "../ioninconsIcon";
import { IT_ICON_SIZE } from "../../common/constants";

export const InputText = (props: {
  label: string;
  placeholder: string;
  onChangeText?: (text: string) => void;
  rightIcon?: React.ComponentProps<typeof Ionicons>["name"];
  onButtonPress?: () => void;
  keyboardType?: KeyboardTypeOptions | "default";
}) => {
  return (
    <View>
      <Text style={styles.title}>{props.label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={props.placeholder}
          clearButtonMode={props.rightIcon ? "never" : "while-editing"}
          keyboardType={props.keyboardType}
          onChangeText={props.onChangeText}
        />
        {props.rightIcon && (
          <IoninconsIcon
            name={props.rightIcon}
            iconStyle={styles.rightIcon}
            size={IT_ICON_SIZE}
          />
        )}
      </View>
    </View>
  );
};
