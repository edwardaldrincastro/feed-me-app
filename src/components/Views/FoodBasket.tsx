import React, { FunctionComponent } from "react";
import { Text, TouchableWithoutFeedback, View, ViewStyle } from "react-native";
import { useSafeArea } from "react-native-safe-area-view";

import { Language } from "../../constants";
import { IcoMoon } from "../../icons";
import {
  centerVertical,
  colorOrange,
  colorWhite,
  flexRow,
  fs14MedWhite1,
  fullWidth,
  px,
  py,
  sh24,
  sh48,
  sh8,
  sw16,
  sw20,
  sw4,
  sw8,
} from "../../styles";
import { CustomFlexSpacer, CustomSpacer } from "./Spacer";

const { RESTAURANT } = Language.PAGE;
export interface FoodBasketProps {
  amount: string;
  numberOfItems: string;
  onPress: () => void;
}

export const FoodBasket: FunctionComponent<FoodBasketProps> = ({ amount, numberOfItems, onPress }: FoodBasketProps) => {
  const { bottom } = useSafeArea();
  const buttonStyle: ViewStyle = {
    ...centerVertical,
    ...flexRow,
    ...px(sw16),
    backgroundColor: colorOrange._1,
    borderRadius: sw8,
    height: sh48,
  };

  const container: ViewStyle = {
    ...fullWidth,
    ...px(sw20),
    ...py(sh8),
    position: "absolute",
    backgroundColor: colorWhite._1,
    bottom: bottom,
  };

  return (
    <View style={container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={buttonStyle}>
          <IcoMoon color={colorWhite._1} name="shopping-bag" size={sh24} />
          <CustomSpacer isHorizontal={true} space={sw4} />
          <Text style={fs14MedWhite1}>{numberOfItems}</Text>
          <CustomSpacer isHorizontal={true} space={sw16} />
          <Text style={fs14MedWhite1}>{RESTAURANT.BUTTON_VIEW}</Text>
          <CustomFlexSpacer />
          <Text style={fs14MedWhite1}>{amount}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
