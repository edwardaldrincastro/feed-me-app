import * as React from "react";

import { CustomSpacer, CustomTextInput, SafeAreaPage } from "../../components";
import { ContentPage } from "../../components/CommonPages/ContentPage";
import { Language } from "../../constants";
import { sh16, sh40 } from "../../styles";

const { HEADING_INTRODUCTION, SUBHEADING_INTRODUCTION, BUTTON_CONTINUE, INPUT_GIVEN_NAME, INPUT_LAST_NAME } = Language.PAGE.REGISTRATION;

interface RegisterNameProps {
  buttonDisabled: boolean;
  handleBackButton: () => void;
  handleButtonPress: () => void;
  inputGivenName: string;
  inputLastName: string;
  setInputGivenName: (value: string) => void;
  setInputLastName: (value: string) => void;
}

export const RegisterName = ({
  buttonDisabled,
  handleBackButton,
  handleButtonPress,
  inputGivenName,
  inputLastName,
  setInputGivenName,
  setInputLastName,
}: RegisterNameProps) => {
  return (
    <SafeAreaPage>
      <ContentPage
        handleOnPressButton={handleButtonPress}
        backButton={true}
        handleBackButton={handleBackButton}
        buttonDisabled={buttonDisabled}
        buttonText={BUTTON_CONTINUE}
        heading={HEADING_INTRODUCTION}
        subheading={SUBHEADING_INTRODUCTION}>
        <CustomSpacer space={sh40} />
        <CustomTextInput label={INPUT_LAST_NAME} onChangeText={setInputLastName} value={inputLastName} />
        <CustomSpacer space={sh16} />
        <CustomTextInput label={INPUT_GIVEN_NAME} onChangeText={setInputGivenName} value={inputGivenName} />
        <CustomSpacer space={sh16} />
      </ContentPage>
    </SafeAreaPage>
  );
};
