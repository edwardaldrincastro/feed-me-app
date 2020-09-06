import React, { FunctionComponent } from "react";
import { Text, TextStyle, TouchableWithoutFeedback, View, ViewStyle } from "react-native";

import { centerHV, colorOrange, fs14MedWhite1, fsAlignCenter, fsCapitalize, px, sh48, sw100, sw40, sw8 } from "../../styles";

export interface CustomButtonProps {
  buttonStyle?: ViewStyle;
  disabled?: boolean;
  onPress: () => void;
  text: string;
  textStyle?: TextStyle;
}

export interface RoundedButtonProps extends CustomButtonProps {
  radius?: number;
}

export const CustomButton: FunctionComponent<CustomButtonProps> = ({
  buttonStyle,
  disabled,
  onPress,
  text,
  textStyle,
}: CustomButtonProps) => {
  const defaultButtonStyle: ViewStyle = {
    ...centerHV,
    ...px(sw40),
    backgroundColor: colorOrange._1,
    borderRadius: sw8,
    height: sh48,
    opacity: disabled === true ? 0.5 : 1,
    ...buttonStyle,
  };

  const defaultTextStyle: TextStyle = { ...fs14MedWhite1, ...fsAlignCenter, ...fsCapitalize, ...textStyle };

  return (
    <TouchableWithoutFeedback onPress={disabled === true ? undefined : onPress}>
      <View style={defaultButtonStyle}>
        <Text style={defaultTextStyle}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export const RoundedButton: FunctionComponent<RoundedButtonProps> = ({ buttonStyle, ...props }: CustomButtonProps) => {
  const roundedButtonStyle: ViewStyle = {
    borderRadius: sw100,
    ...buttonStyle,
  };

  return <CustomButton buttonStyle={roundedButtonStyle} {...props} />;
};
