import { useState } from "react";
import { View } from "react-native";
import { InputText } from "../inputText/InputText";
import { InputTextArea } from "../inputTextArea/InputTextArea";
import { PicturePicker } from "../picturePicker/PicturePicker";

export const ValuableForm = (props: {
  onChangeName: (name: string) => void;
  onChangeDescription: (description: string) => void;
  onChangePhoto: (image: string) => void;
  onChangePrice: (price: string) => void;
}) => {
  return (
    <View>
      <PicturePicker
        iconName="camera-sharp"
        onChangeImage={props.onChangePhoto}
      />
      <InputText
        label="Name"
        placeholder="Bracelet"
        onChangeText={props.onChangeName}
      />
      <InputText
        label="Value"
        placeholder="700"
        rightIcon="logo-euro"
        keyboardType="number-pad"
        onChangeText={props.onChangePrice}
      />
      <InputTextArea
        label="Description"
        placeholder="Optional"
        onChangeText={props.onChangeDescription}
      />
    </View>
  );
};
