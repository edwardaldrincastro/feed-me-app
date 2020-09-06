import React, { Fragment, FunctionComponent, ReactNode, useState } from "react";
import { StatusBar, View, ViewStyle } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";

import { LocalAssets } from "../assets/LocalAssets";
import { CustomButton, CustomSpacer, CustomSwiper, FlexBackgroundImage } from "../components";
import { Language } from "../constants";
import { fullWidth, px, sh20, sw24 } from "../styles";

const { ONBOARDING } = Language.PAGE;
interface OnboardingPageProps {
  navigation: IStackNavigationProp;
}
export const OnboardingPage: FunctionComponent<OnboardingPageProps> = ({ navigation }: OnboardingPageProps) => {
  const { bottom } = useSafeArea();
  const [index, setIndex] = useState(0);

  const handlePressGetStarted = () => {
    navigation.navigate("SignUp");
  };

  const views: ReactNode[] = [
    <FlexBackgroundImage heading={ONBOARDING.HEADING_PAGE_1} imageSource={LocalAssets.onboarding.page1} />,
    <FlexBackgroundImage heading={ONBOARDING.HEADING_PAGE_2} imageSource={LocalAssets.onboarding.page2} />,
    <FlexBackgroundImage heading={ONBOARDING.HEADING_PAGE_3} imageSource={LocalAssets.onboarding.page3} />,
  ];

  const buttonContainer: ViewStyle = { ...fullWidth, ...px(sw24), position: "absolute", bottom: 0 };

  const bottomContent =
    index === 2 ? (
      <View style={buttonContainer}>
        <CustomButton onPress={handlePressGetStarted} text={ONBOARDING.BUTTON_STARTED} />
        <CustomSpacer space={bottom || sh20} />
      </View>
    ) : null;

  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <CustomSwiper activeIndex={index} bottomContent={bottomContent} noDots={[2]} pages={views} setActiveIndex={setIndex} />
    </Fragment>
  );
};
