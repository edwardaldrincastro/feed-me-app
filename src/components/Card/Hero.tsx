import React, { FunctionComponent } from "react";
import { ImageStyle, Text, TextStyle, TouchableWithoutFeedback, View, ViewStyle } from "react-native";

import { colorWhite, fs12RegGray3, fs14MedBlack2, px, py, sh120, sh176, sh8, sw200, sw8 } from "../../styles";
import { CustomImage } from "../Image";

interface CardHeroProps {
  imageStyle?: ImageStyle;
  imageUri: string;
  onPress?: () => void;
  style?: ViewStyle;
  subtitle: string;
  subtitleStyle?: TextStyle;
  title: string;
  titleStyle?: TextStyle;
}

export const CardHero: FunctionComponent<CardHeroProps> = ({
  imageStyle,
  imageUri,
  onPress,
  style,
  subtitle,
  subtitleStyle,
  title,
  titleStyle,
}: CardHeroProps) => {
  const cardStyle: ViewStyle = {
    backgroundColor: colorWhite._1,
    borderRadius: sw8,
    height: sh176,
    width: sw200,
    ...style,
  };

  const heroStyle: ImageStyle = { height: sh120, borderTopLeftRadius: sw8, borderTopRightRadius: sw8, ...imageStyle };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={cardStyle}>
        <CustomImage source={{ uri: imageUri }} style={heroStyle} />
        <View style={{ ...px(sw8), ...py(sh8) }}>
          <Text style={{ ...fs14MedBlack2, ...titleStyle }}>{title}</Text>
          <Text style={{ ...fs12RegGray3, ...subtitleStyle }}>{subtitle}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
