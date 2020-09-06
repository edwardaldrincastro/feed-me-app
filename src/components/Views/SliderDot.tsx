import React, { Fragment, FunctionComponent } from "react";
import { View, ViewStyle } from "react-native";

import { flexRow, sw8 } from "../../styles";
import { CustomSpacer } from "./Spacer";

export interface SliderDotProps {
  colorActive: string;
  colorInactive: string;
  isActive: boolean;
}

export const SliderDot: FunctionComponent<SliderDotProps> = (props: SliderDotProps) => {
  const { colorActive, colorInactive, isActive } = props;

  const dotStyle: ViewStyle = {
    borderRadius: 4,
    height: 6,
    width: 6,
  };
  const styleActive: ViewStyle = {
    ...dotStyle,
    backgroundColor: colorActive,
  };

  const styleInactive: ViewStyle = {
    ...dotStyle,
    backgroundColor: colorInactive,
    opacity: 0.4,
  };

  return <View style={isActive ? styleActive : styleInactive} />;
};

export interface SliderDotsProps {
  activeIndex: number;
  colorActive: string;
  colorInactive: string;
  count: number;
}

export const SliderDots: FunctionComponent<SliderDotsProps> = (props: SliderDotsProps) => {
  const { activeIndex, colorActive, colorInactive, count } = props;
  const holder: number[] = [];
  for (let index = 0; index < count; index++) {
    holder.push(index);
  }

  return (
    <View style={flexRow}>
      {holder.map((index: number) => {
        return (
          <Fragment key={index}>
            {index === 0 ? null : <CustomSpacer space={sw8} isHorizontal={true} />}
            <SliderDot colorActive={colorActive} colorInactive={colorInactive} isActive={activeIndex === index} />
          </Fragment>
        );
      })}
    </View>
  );
};
