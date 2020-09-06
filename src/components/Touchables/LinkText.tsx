import React from "react";
import { Text, TextStyle } from "react-native";

import { fs14MedOrange1, fsAlignCenter } from "../../styles";

interface LinkTextProps {
  onPress?: () => void;
  style?: TextStyle;
  text: string;
}

export const LinkText = ({ onPress, style, text }: LinkTextProps) => {
  const textLinkStyle: TextStyle = { ...fs14MedOrange1, ...fsAlignCenter, ...style };

  return (
    <Text onPress={onPress} style={textLinkStyle}>
      {text}
    </Text>
  );
};
