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

const { LOGIN } = Language.PAGE;

interface LoginPageProps {
  navigation: IStackNavigationProp;
}

export const LoginPage: FunctionComponent<LoginPageProps> = ({ navigation }: LoginPageProps) => {
  const { bottom } = useSafeArea();
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");

  const handleButtonPress = () => {
    navigation.navigate("Dashboard");
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  const handlePressFacebook = () => {
    navigation.navigate("Dashboard");
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
          <Text style={fs24BoldBlack2}>{LOGIN.HEADING}</Text>
          <Text style={fs14MedBlack2}>{LOGIN.SUBHEADING}</Text>
          <CustomSpacer space={sh56} />
          <CustomTextInput
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder={LOGIN.INPUT_EMAIL_PLACEHOLDER}
            onChangeText={setInputEmail}
            value={inputEmail}
          />
          <CustomSpacer space={sh16} />
          <CustomTextInput
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder={LOGIN.INPUT_PASSWORD_PLACEHOLDER}
            onChangeText={setInputPassword}
            value={inputPassword}
          />
          <CustomSpacer space={sh16} />
          <CustomButton disabled={inputEmail === "" || inputPassword === ""} onPress={handleButtonPress} text={LOGIN.BUTTON_LOGIN} />
          <CustomSpacer space={sh24} />
          <Text style={{ ...fs14MedBlack2, ...fsAlignCenter }}>{LOGIN.LABEL_OR}</Text>
          <CustomSpacer space={sh24} />
          <IconText
            spaceBetween={sw16}
            iconSize={sh20}
            name="logo-facebook"
            onPress={handlePressFacebook}
            style={defaultButtonStyle}
            text={LOGIN.BUTTON_FACEBOOK}
          />
          <CustomSpacer space={sh16} />
          <IconText
            spaceBetween={sw16}
            iconSize={sh20}
            name="logo-google"
            onPress={handlePressGoogle}
            style={defaultButtonStyle}
            text={LOGIN.BUTTON_GOOGLE}
          />
          <CustomFlexSpacer />
          <View style={flexRowCC}>
            <Text style={fs14MedBlack2}>{LOGIN.LABEL_NO_ACCOUNT}</Text>
            <CustomSpacer isHorizontal={true} space={sw4} />
            <LinkText onPress={handleSignUp} text={LOGIN.LABEL_SIGN_UP} />
          </View>
          <CustomSpacer space={bottomSpace} />
        </View>
      </ScrollView>
    </SafeAreaPage>
  );
};
