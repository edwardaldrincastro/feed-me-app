import { useNavigation } from "@react-navigation/native";
import React, { FunctionComponent } from "react";
import { Text, TextStyle, View, ViewStyle } from "react-native";

import { IcoMoon } from "../../icons";
import { centerVertical, colorBlack, colorOrange, colorWhite, flexRow, fs14SemiBoldWhite1, sh24, sh40, sw20, sw32 } from "../../styles";
import { CustomFlexSpacer, CustomSpacer } from "../Views";

interface CustomHeaderProps {
  leftIcon?: string;
  leftIconPress?: () => void;
  noBackButton?: boolean;
  rightIcon?: string;
  rightIconPress?: () => void;
  style?: ViewStyle;
  theme?: "dark" | "light";
  title?: string;
  titleStyle?: TextStyle;
}

export const CustomHeader: FunctionComponent<CustomHeaderProps> = ({
  leftIcon,
  leftIconPress,
  noBackButton,
  rightIcon,
  rightIconPress,
  style,
  theme,
  title,
  titleStyle,
}: CustomHeaderProps) => {
  const { goBack } = useNavigation();

  const handleBackButton = () => {
    if (leftIconPress) {
      return leftIconPress();
    }
    return goBack();
  };

  let backgroundColor = colorOrange._1;
  let textColor = colorWhite._1;

  if (theme === "dark") {
    textColor = colorWhite._1;
    backgroundColor = colorBlack._1;
  }
  if (theme === "light") {
    textColor = colorBlack._1;
    backgroundColor = colorWhite._1;
  }
  const container: ViewStyle = { ...centerVertical, ...flexRow, backgroundColor: backgroundColor, height: sh40, ...style };
  const backIcon = noBackButton === true ? undefined : "caret-left";
  const defaultLeftIcon = leftIcon !== undefined ? leftIcon : backIcon;
  const sideContainer: ViewStyle = { ...centerVertical, ...flexRow, width: sw32 };

  return (
    <View style={container}>
      <CustomSpacer isHorizontal={true} space={sw20} />
      <View style={sideContainer}>
        {defaultLeftIcon !== undefined ? <IcoMoon color={textColor} name={defaultLeftIcon} onPress={handleBackButton} size={sh24} /> : null}
      </View>
      <CustomFlexSpacer />
      <Text style={{ ...fs14SemiBoldWhite1, color: textColor, ...titleStyle }}>{title}</Text>
      <CustomFlexSpacer />
      <View style={sideContainer}>
        <CustomFlexSpacer />
        {rightIcon !== undefined ? <IcoMoon color={textColor} name={rightIcon} onPress={rightIconPress} size={sh24} /> : null}
      </View>
      <CustomSpacer isHorizontal={true} space={sw20} />
    </View>
  );
};
