import React from "react";
import { Text, TextStyle, TouchableWithoutFeedback, View, ViewStyle } from "react-native";

import { IcoMoon } from "../../icons";
import { centerVertical, colorBlack, flexRow, fs14MedBlack2, sh16, sw8 } from "../../styles";
import { CustomSpacer } from "../Views";

interface IconTextProps {
  color?: string;
  iconPosition?: "left" | "right";
  iconSize?: number;
  name: string;
  onPress?: () => void;
  spaceBetween?: number;
  style?: ViewStyle;
  text: string;
  textStyle?: TextStyle;
}

export const IconText = ({ color, iconPosition, iconSize, name, onPress, spaceBetween, style, text, textStyle }: IconTextProps) => {
  const flexDirection: ViewStyle = iconPosition === "right" ? { flexDirection: "row-reverse" } : flexRow;

  const defaultButtonStyle: ViewStyle = {
    ...centerVertical,
    ...flexDirection,
    ...style,
  };
  const textColor = color ? { color: color } : {};
  const defaultTextStyle: TextStyle = {
    ...fs14MedBlack2,
    ...textColor,
    ...textStyle,
  };

  const defaultSpaceBetween = spaceBetween !== undefined ? spaceBetween : sw8;
  const defaultSize = iconSize !== undefined ? iconSize : sh16;
  const defaultColor = color !== undefined ? color : colorBlack._2;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={defaultButtonStyle}>
        <IcoMoon color={defaultColor} name={name} size={defaultSize} />
        <CustomSpacer isHorizontal={true} space={defaultSpaceBetween} />
        <Text style={defaultTextStyle}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
