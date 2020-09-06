import * as React from "react";
import { FunctionComponent, useState } from "react";
import { Alert, Text, View, ViewStyle } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeArea } from "react-native-safe-area-context";

import { CustomButton, CustomFlexSpacer, CustomSpacer, CustomTextInput, IconText, LinkText, SafeAreaPage } from "../components";
import { Language } from "../constants";
import {
  centerHV,
  colorWhite,
  flexChild,
  flexGrow,
  flexRowCC,
  fs14MedBlack2,
  fs24BoldBlack2,
  fsAlignCenter,
  px,
  sh16,
  sh20,
  sh24,
  sh48,
  sh56,
  sw16,
  sw24,
  sw4,
  sw40,
  sw8,
} from "../styles";

const { SIGN_UP } = Language.PAGE;

interface SignUpPageProps {
  navigation: IStackNavigationProp;
}

export const SignUpPage: FunctionComponent<SignUpPageProps> = ({ navigation }: SignUpPageProps) => {
  const { bottom } = useSafeArea();
  const [inputEmail, setInputEmail] = useState<string>("");

  const handleButtonPress = () => {
    navigation.navigate("Registration");
  };

  const handleSignIn = () => {
    navigation.navigate("Login");
  };

  const handlePressFacebook = () => {
    Alert.alert("Facebook");
  };

  const handlePressGoogle = () => {
    Alert.alert("Google");
  };

  const defaultButtonStyle: ViewStyle = {
    ...px(sw40),
    ...centerHV,
    backgroundColor: colorWhite._1,
    borderRadius: sw8,
    borderWidth: 1,
    height: sh48,
  };

  const bottomSpace = bottom !== 0 ? 0 : sh20;

  return (
    <SafeAreaPage>
      <ScrollView
        bounces={false}
        contentContainerStyle={flexGrow}
        keyboardShouldPersistTaps="handled"
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}>
        <View style={{ ...px(sw24), ...flexChild }}>
          <CustomSpacer space={sh56} />
          <Text style={fs24BoldBlack2}>{SIGN_UP.HEADING}</Text>
          <Text style={fs14MedBlack2}>{SIGN_UP.SUBHEADING}</Text>
          <CustomSpacer space={sh56} />
          <CustomTextInput
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder={SIGN_UP.INPUT_EMAIL_PLACEHOLDER}
            onChangeText={setInputEmail}
            value={inputEmail}
          />
          <CustomSpacer space={sh16} />
          <CustomButton disabled={inputEmail === ""} onPress={handleButtonPress} text={SIGN_UP.BUTTON_CONTINUE} />
          <CustomSpacer space={sh24} />
          <Text style={{ ...fs14MedBlack2, ...fsAlignCenter }}>{SIGN_UP.LABEL_OR}</Text>
          <CustomSpacer space={sh24} />
          <IconText
            spaceBetween={sw16}
            iconSize={sh20}
            name="logo-facebook"
            onPress={handlePressFacebook}
            style={defaultButtonStyle}
            text={SIGN_UP.BUTTON_FACEBOOK}
          />
          <CustomSpacer space={sh16} />
          <IconText
            spaceBetween={sw16}
            iconSize={sh20}
            name="logo-google"
            onPress={handlePressGoogle}
            style={defaultButtonStyle}
            text={SIGN_UP.BUTTON_GOOGLE}
          />
          <CustomFlexSpacer />
          <View style={flexRowCC}>
            <Text style={fs14MedBlack2}>{SIGN_UP.LABEL_ALREADY}</Text>
            <CustomSpacer isHorizontal={true} space={sw4} />
            <LinkText onPress={handleSignIn} text={SIGN_UP.LABEL_SIGN_IN} />
          </View>
          <CustomSpacer space={bottomSpace} />
        </View>
      </ScrollView>
    </SafeAreaPage>
  );
};
