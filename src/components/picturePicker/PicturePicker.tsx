import { useState } from "react";
import { ActionSheetIOS, Platform, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { ImagePicker } from "../../sdk/ImagePicker";
import { IoninconsIcon } from "../ioninconsIcon";
import { IT_ICON_PICKER } from "../../common/constants";
import { LocalImagePickerResult } from "./types";

export const PicturePicker = (props: {
  iconName: React.ComponentProps<typeof Ionicons>["name"];
  onChangeImage: (image: string) => void;
}) => {
  const [imageResult, setImageResult] = useState<LocalImagePickerResult | null>(
    null
  );

  const onPressPicker = async (): Promise<void> => {
    if (Platform.OS === "ios") {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ["Take a photo", "Choose from gallery", "Cancel"],
          cancelButtonIndex: 2,
        },
        (buttonIndex) => {
          if (buttonIndex === 0) {
            console.log("Take Photo");
            return ImagePicker.takePhoto().then((result) => {
              if (result?.cancelled === false) {
                setImageResult({ localUri: result.uri });
                props.onChangeImage(result.uri);
              }
            });
          } else if (buttonIndex === 1) {
            console.log("Choose Photo");
            return ImagePicker.pickImage().then((result) => {
              if (result?.cancelled === false) {
                setImageResult({ localUri: result.uri });
                props.onChangeImage(result.uri);
              }
            });
          } else {
            console.log("Cancel");
          }
        }
      );
    }
  };

  return (
    <Pressable
      style={imageResult ? styles.imageContainer : styles.cameraContainer}
      onPress={() => onPressPicker()}
    >
      {imageResult && (
        <Image source={{ uri: imageResult.localUri }} style={styles.picture} />
      )}
      {!imageResult && (
        <View style={styles.cameraBlock}>
          <IoninconsIcon
            name={props.iconName}
            iconStyle={styles.cameraLogo}
            size={IT_ICON_PICKER}
          />
          <Text>Add photo</Text>
        </View>
      )}
    </Pressable>
  );
};

