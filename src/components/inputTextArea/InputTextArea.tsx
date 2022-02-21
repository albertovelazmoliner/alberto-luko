import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export const InputTextArea = (props: {
  label: string;
  placeholder: string;
  onButtonPress?: () => void;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions | "default";
}) => {
  return (
    <View>
      <Text style={styles.title}>{props.label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType={props.keyboardType}
          style={styles.input}
          placeholder={props.placeholder}
          multiline={true}
          numberOfLines={6}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );
};
