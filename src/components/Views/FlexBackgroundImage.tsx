import React, { Fragment } from "react";
import { Text, TextStyle, View, ViewStyle } from "react-native";
import { Source } from "react-native-fast-image";

import { flexChild, fs40BoldWhite1, fullHW, fullWidth, px, sh120, sw20 } from "../../styles";
import { CustomImage } from "../Image";
import { CustomSpacer } from "./Spacer";

interface FlexBackgroundImageProps {
  heading: string;
  imageSource: Source;
}

export const FlexBackgroundImage = ({ imageSource, heading }: FlexBackgroundImageProps) => {
  const absoluteContainer: ViewStyle = { position: "absolute", ...fullHW };
  const headingStyle: TextStyle = { ...fs40BoldWhite1, letterSpacing: -0.2 };

  return (
    <Fragment>
      <CustomImage source={imageSource} style={{ ...flexChild, ...fullWidth }} />
      <View style={absoluteContainer}>
        <View style={px(sw20)}>
          <CustomSpacer space={sh120} />
          <Text style={headingStyle}>{heading}</Text>
        </View>
      </View>
    </Fragment>
  );
};
