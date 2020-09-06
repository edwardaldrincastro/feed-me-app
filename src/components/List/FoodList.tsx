import React, { FunctionComponent } from "react";
import { Text, TextStyle, View, ViewStyle } from "react-native";

import { fs16MedBlack2, px, sh16, sw20 } from "../../styles";
import { FoodCard } from "../Card";
import { CustomSpacer } from "../Views";

interface FoodListProps {
  data: IRestaurantMenu;
  onPress: (food: IRestaurantFood) => void;
  style?: ViewStyle;
  titleStyle?: TextStyle;
}

export const FoodList: FunctionComponent<FoodListProps> = ({ data, onPress, style, titleStyle }: FoodListProps) => {
  const { category, foods } = data;

  const handlePress = (food: IRestaurantFood) => {
    onPress(food);
  };

  return (
    <View style={style}>
      <Text style={{ ...fs16MedBlack2, ...px(sw20), ...titleStyle }}>{category}</Text>
      {foods.map((food: IRestaurantFood, index: number) => {
        return <FoodCard data={food} key={index} onPress={handlePress} />;
      })}
      <CustomSpacer space={sh16} />
    </View>
  );
};
