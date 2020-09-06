import React, { FunctionComponent, ReactNode } from "react";
import { ScrollView, Text, TouchableWithoutFeedback, View, ViewStyle } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";

import { IcoMoon } from "../../icons";
import {
  colorBlack,
  flexChild,
  flexGrow,
  flexRow,
  fs14MedBlack2,
  fs24BoldBlack2,
  px,
  sh16,
  sh24,
  sh32,
  sh56,
  sh8,
  sw24,
} from "../../styles";
import { CustomButton } from "../Touchables";
import { CustomFlexSpacer, CustomSpacer } from "../Views";

export interface ContentPageProps {
  backButton?: boolean;
  buttonDisabled?: boolean;
  buttonText?: string;
  children?: ReactNode;
  handleBackButton?: () => void;
  handleOnPressButton?: () => void;
  heading?: string;
  noScroll?: boolean;
  spaceToBottom?: number;
  spaceToButton?: number;
  style?: ViewStyle;
  subheading?: string;
  subtitle?: string;
}

export const ContentPage: FunctionComponent<ContentPageProps> = ({
  backButton,
  handleBackButton,
  buttonDisabled,
  buttonText,
  children,
  handleOnPressButton,
  heading,
  noScroll,
  spaceToBottom,
  spaceToButton,
  style,
  subheading,
}: ContentPageProps) => {
  const { bottom } = useSafeArea();

  const container: ViewStyle = { ...px(sw24), ...flexChild, ...style };
  const bottomSpace = bottom === 0;

  return (
    <ScrollView
      bounces={false}
      contentContainerStyle={flexGrow}
      keyboardShouldPersistTaps="handled"
      scrollEnabled={!noScroll}
      showsVerticalScrollIndicator={false}>
      <View style={container}>
        <CustomSpacer space={sh32} />
        <View style={{ ...flexRow, height: sh24 }}>
          {backButton === true ? (
            <TouchableWithoutFeedback onPress={handleBackButton}>
              <IcoMoon name="caret-left" color={colorBlack._2} size={sh24} />
            </TouchableWithoutFeedback>
          ) : null}
        </View>
        <CustomSpacer space={sh56} />
        <Text style={fs24BoldBlack2}>{heading}</Text>
        <Text style={fs14MedBlack2}>{subheading}</Text>
        <CustomSpacer space={sh8} />
        {children}
        <CustomSpacer space={sh16} />
        {spaceToButton !== undefined ? <CustomSpacer space={spaceToButton} /> : <CustomFlexSpacer />}
        {buttonText !== undefined && handleOnPressButton !== undefined ? (
          <CustomButton disabled={buttonDisabled} onPress={handleOnPressButton} text={buttonText} />
        ) : null}
        {bottomSpace ? <CustomSpacer space={spaceToBottom || sh24} /> : null}
      </View>
    </ScrollView>
  );
};
