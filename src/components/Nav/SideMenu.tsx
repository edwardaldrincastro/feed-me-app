import React, { FunctionComponent } from "react";
import { Text, View, ViewStyle } from "react-native";
import DrawerLayout from "react-native-gesture-handler/DrawerLayout";
import { useSafeArea } from "react-native-safe-area-view";

import {
  colorBlack,
  colorOrange,
  colorWhite,
  flexRow,
  fs16MedBlack2,
  fs20SemiBoldBlack2,
  fullHeight,
  px,
  sh24,
  sh32,
  sw20,
  sw304,
  sw32,
} from "../../styles";
import { IconText } from "../Touchables";
import { CustomFlexSpacer, CustomSpacer } from "../Views";

interface SideMenuProps {
  children: JSX.Element;
  setRef?: (ref: DrawerLayout | null) => void;
}

export const SideMenu: FunctionComponent<SideMenuProps> = ({ children, setRef }: SideMenuProps) => {
  const container: ViewStyle = { ...fullHeight, ...px(sw32), backgroundColor: colorWhite._1 };
  const { top, bottom } = useSafeArea();

  return (
    <DrawerLayout
      drawerWidth={sw304}
      drawerPosition="left"
      drawerType="front"
      drawerBackgroundColor={colorBlack._2_9}
      ref={setRef}
      renderNavigationView={() => {
        return (
          <View style={container}>
            <CustomSpacer space={top} />
            <CustomSpacer space={sh32} />
            <View style={flexRow}>
              <CustomFlexSpacer />
              <IconText color={colorOrange._1} name="close" iconSize={sh32} text="" textStyle={fs16MedBlack2} />
            </View>
            <CustomSpacer space={sh32} />
            <Text style={fs20SemiBoldBlack2}>Hello, John!</Text>
            <CustomSpacer space={sh32} />
            <IconText
              color={colorOrange._1}
              name="history"
              iconSize={sh24}
              spaceBetween={sw20}
              text="Order History"
              textStyle={fs16MedBlack2}
            />
            <CustomSpacer space={sh32} />
            <IconText color={colorOrange._1} name="user" iconSize={sh24} spaceBetween={sw20} text="Profile" textStyle={fs16MedBlack2} />
            <CustomSpacer space={sh32} />
            <IconText
              color={colorOrange._1}
              name="credit-card"
              iconSize={sh24}
              spaceBetween={sw20}
              text="Payment"
              textStyle={fs16MedBlack2}
            />
            <CustomSpacer space={sh32} />
            <IconText
              color={colorOrange._1}
              name="settings"
              iconSize={sh24}
              spaceBetween={sw20}
              text="Settings"
              textStyle={fs16MedBlack2}
            />
            <CustomFlexSpacer />
            <IconText color={colorOrange._1} name="logout" iconSize={sh24} spaceBetween={sw20} text="Log Out" textStyle={fs16MedBlack2} />
            <CustomSpacer space={sh32} />
            <CustomSpacer space={bottom} />
          </View>
        );
      }}>
      {children}
    </DrawerLayout>
  );
};
