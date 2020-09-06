import React, { FunctionComponent } from "react";
import FastImage, { FastImageProps } from "react-native-fast-image";

interface CustomImageProps extends FastImageProps {}

export const CustomImage: FunctionComponent<CustomImageProps> = (props: CustomImageProps) => {
  return <FastImage {...props} />;
};
