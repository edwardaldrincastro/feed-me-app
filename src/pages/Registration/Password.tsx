import React, { useState } from "react";
import { Text, View } from "react-native";

import { ContentPage, CustomFlexSpacer, CustomSpacer, CustomTextInput, SafeAreaPage } from "../../components";
import { Language } from "../../constants";
import { flexRow, fs14MedBlack2, sh16, sh40 } from "../../styles";

const { HEADING_SECURED, SUBHEADING_SECURED, BUTTON_CREATE, INPUT_CONFIRM_PASSWORD, INPUT_PASSWORD } = Language.PAGE.REGISTRATION;

interface RegisterPasswordProps {
  buttonDisabled: boolean;
  handleBackButton: () => void;
  handleButtonPress: () => void;
  inputPassword: string;
  inputConfirmPassword: string;
  setInputPassword: (value: string) => void;
  setInputConfirmPassword: (value: string) => void;
}

export const RegisterPassword = ({
  buttonDisabled,
  handleBackButton,
  handleButtonPress,
  inputPassword,
  inputConfirmPassword,
  setInputPassword,
  setInputConfirmPassword,
}: RegisterPasswordProps) => {
  const [showPassword, setShowPassword] = useState(true);
  const passwordSecured = showPassword ? "Show Password" : "Hide Password";

  const handlePasswordSecured = () => setShowPassword(!showPassword);

  return (
    <SafeAreaPage>
      <ContentPage
        backButton={true}
        handleBackButton={handleBackButton}
        handleOnPressButton={handleButtonPress}
        buttonDisabled={buttonDisabled}
        buttonText={BUTTON_CREATE}
        heading={HEADING_SECURED}
        subheading={SUBHEADING_SECURED}>
        <CustomSpacer space={sh40} />
        <CustomTextInput
          autoCapitalize="none"
          label={INPUT_PASSWORD}
          onChangeText={setInputPassword}
          secureTextEntry={showPassword}
          value={inputPassword}
        />
        <CustomSpacer space={sh16} />
        <CustomTextInput
          autoCapitalize="none"
          label={INPUT_CONFIRM_PASSWORD}
          onChangeText={setInputConfirmPassword}
          secureTextEntry={showPassword}
          value={inputConfirmPassword}
        />
        <CustomSpacer space={sh16} />
        <View style={flexRow}>
          <CustomFlexSpacer />
          <Text onPress={handlePasswordSecured} style={fs14MedBlack2}>
            {passwordSecured}
          </Text>
        </View>
      </ContentPage>
    </SafeAreaPage>
  );
};
