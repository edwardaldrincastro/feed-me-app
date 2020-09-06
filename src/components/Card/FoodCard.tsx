import React, { Fragment, FunctionComponent } from "react";
import { ImageStyle, Text, TouchableWithoutFeedback, View, ViewStyle } from "react-native";

import {
  borderBottomGray2,
  colorWhite,
  flexChild,
  flexRow,
  fs12MedBlack2,
  fs12MedGreen1,
  fs14MedGray3,
  fs14SemiBoldBlack2,
  fsLineThrough,
  fullWidth,
  px,
  py,
  sh112,
  sh16,
  sw16,
  sw20,
  sw4,
  sw8,
  sw80,
} from "../../styles";
import { CustomImage } from "../Image";
import { CustomFlexSpacer, CustomSpacer } from "../Views";

interface FoodCardProps {
  data: IRestaurantFood;
  imageStyle?: ImageStyle;
  onPress?: (food: IRestaurantFood) => void;
  style?: ViewStyle;
}

export const FoodCard: FunctionComponent<FoodCardProps> = ({ data, imageStyle, onPress, style }: FoodCardProps) => {
  const { available, currency, description, discountedPrice, image, name, originalPrice } = data;

  const cardStyle: ViewStyle = {
    ...flexRow,
    ...fullWidth,
    ...px(sw20),
    ...py(sh16),
    backgroundColor: colorWhite._2,
    height: sh112,
    ...style,
  };

  const heroStyle: ImageStyle = { height: sw80, width: sw80, borderRadius: sw8, ...imageStyle };

  const oldPrice = `${currency}${originalPrice}`;
  const newPrice = `${currency}${discountedPrice}`;
  const availableItems = `${available} available`;

  const handlePress = () => {
    if (onPress) {
      onPress(data);
    }
  };

  return (
    <Fragment>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={cardStyle}>
          <CustomImage source={{ uri: image }} style={heroStyle} />
          <CustomSpacer isHorizontal={true} space={sw16} />
          <View style={flexChild}>
            <Text numberOfLines={2} style={fs14SemiBoldBlack2}>
              {name}
            </Text>
            <Text numberOfLines={2} style={fs12MedBlack2}>
              {description}
            </Text>
          </View>
          <CustomSpacer isHorizontal={true} space={sw8} />
          <View>
            <View style={flexRow}>
              <Text style={{ ...fs14MedGray3, ...fsLineThrough }}>{oldPrice}</Text>
              <CustomSpacer isHorizontal={true} space={sw4} />
              <Text style={fs14SemiBoldBlack2}>{newPrice}</Text>
            </View>
            <CustomFlexSpacer />
            <Text style={fs12MedGreen1}>{availableItems}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={borderBottomGray2} />
    </Fragment>
  );
};
