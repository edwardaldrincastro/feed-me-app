import * as React from "react";
import { FunctionComponent, useState } from "react";

import { RegisterName } from "./Name";
import { RegisterPassword } from "./Password";

interface RegistrationPageProps {
  navigation: IStackNavigationProp;
}
export const RegistrationPage: FunctionComponent<RegistrationPageProps> = ({ navigation }: RegistrationPageProps) => {
  const [page, setPage] = useState(0);
  const [inputGivenName, setInputGivenName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");

  const handleBackButton = () => {
    if (page === 0) {
      return navigation.goBack();
    }
    setInputPassword("");
    setInputConfirmPassword("");
    return setPage(0);
  };
  const handleContinue = () => {
    setPage(1);
  };
  const handleCreateAccount = () => {
    navigation.navigate("Dashboard");
  };

  const content =
    page === 0 ? (
      <RegisterName
        buttonDisabled={inputGivenName === "" || inputLastName === ""}
        handleBackButton={handleBackButton}
        handleButtonPress={handleContinue}
        inputGivenName={inputGivenName}
        inputLastName={inputLastName}
        setInputGivenName={setInputGivenName}
        setInputLastName={setInputLastName}
      />
    ) : (
      <RegisterPassword
        buttonDisabled={
          inputGivenName === "" ||
          inputLastName === "" ||
          inputPassword === "" ||
          inputConfirmPassword === "" ||
          inputPassword !== inputConfirmPassword
        }
        handleBackButton={handleBackButton}
        handleButtonPress={handleCreateAccount}
        inputPassword={inputPassword}
        inputConfirmPassword={inputConfirmPassword}
        setInputPassword={setInputPassword}
        setInputConfirmPassword={setInputConfirmPassword}
      />
    );

  return content;
};
