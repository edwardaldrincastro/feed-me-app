import React, { Fragment, useState } from "react";
import { Text, TextInput, TextInputProps, TextStyle, View, ViewStyle } from "react-native";

import { IcoMoon } from "../../icons";
import {
  centerVertical,
  colorGray,
  colorOrange,
  colorTransparent,
  colorWhite,
  flexChild,
  flexRow,
  fs14MedBlack2,
  px,
  sh24,
  sh4,
  sh48,
  sw14,
  sw2,
  sw6,
  sw8,
} from "../../styles";
import { CustomSpacer } from "../Views";

export interface ITextInputProps extends TextInputProps {
  borderColor?: string;
  label?: string;
  labelStyle?: TextStyle;
  leftIcon?: string;
  leftIconColor?: string;
  onPressLabel?: () => void;
  setRef?: (ref: TextInput | null) => void;
  viewStyle?: ViewStyle;
}

export const CustomTextInput = ({
  borderColor,
  label,
  labelStyle,
  leftIcon,
  leftIconColor,
  onPressLabel,
  setRef,
  viewStyle,
  ...rest
}: ITextInputProps) => {
  const [inputFocus, setInputFocus] = useState<boolean>(false);

  const customBorderColor = borderColor || colorGray._1;
  const defaultBorderColor: ViewStyle = inputFocus ? { borderColor: colorOrange._1 } : { borderColor: customBorderColor };
  const defaultBGColor: ViewStyle = inputFocus ? { backgroundColor: colorWhite._1 } : { backgroundColor: colorWhite._4 };
  const defaultLabelStyle: TextStyle = { ...fs14MedBlack2, ...labelStyle };
  const textInputStyle: ViewStyle = {
    ...centerVertical,
    ...flexRow,
    ...px(sw14),
    ...defaultBorderColor,
    ...defaultBGColor,
    borderWidth: sw2,
    borderRadius: sw6,
    ...viewStyle,
  };
  const textStyle: TextStyle = { ...flexChild, ...fs14MedBlack2, height: sh48 };

  const handleFocus = () => {
    setInputFocus(true);
  };

  const handleBlur = () => {
    setInputFocus(false);
  };

  return (
    <Fragment>
      {label === undefined ? null : (
        <Fragment>
          <Text onPress={onPressLabel} style={defaultLabelStyle}>
            {label}
          </Text>
          <CustomSpacer space={sh4} />
        </Fragment>
      )}
      <View style={textInputStyle}>
        {leftIcon !== undefined ? (
          <Fragment>
            <IcoMoon color={leftIconColor || colorWhite._1} name={leftIcon} size={sh24} />
            <CustomSpacer isHorizontal={true} space={sw8} />
          </Fragment>
        ) : null}
        <TextInput
          ref={setRef}
          onBlur={handleBlur}
          onFocus={handleFocus}
          style={textStyle}
          placeholderTextColor={colorGray._3}
          underlineColorAndroid={colorTransparent}
          {...rest}
        />
      </View>
    </Fragment>
  );
};
