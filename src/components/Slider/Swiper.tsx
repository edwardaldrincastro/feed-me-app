import ViewPager, { ViewPagerOnPageSelectedEventData } from "@react-native-community/viewpager";
import React, { Fragment, ReactNode } from "react";
import { NativeSyntheticEvent, View, ViewStyle } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";

import { centerVertical, colorWhite, flexChild, fullWidth, sh20 } from "../../styles";
import { SliderDots } from "../Views/SliderDot";

export type ViewPagerNull = ViewPager | null;

interface CustomSwiperProps {
  activeIndex: number;
  bottomContent?: ReactNode;
  dotColorActive?: string;
  dotColorInactive?: string;
  initialPage?: number;
  noDots?: number[] | "all";
  pages: ReactNode[];
  setRef?: (swipeRef: ViewPager) => void;
  scrollTo?: number;
  setActiveIndex: (index: number) => void;
  style?: ViewStyle;
}

export const CustomSwiper = ({
  activeIndex,
  bottomContent,
  dotColorActive,
  dotColorInactive,
  initialPage,
  noDots,
  pages,
  setRef,
  setActiveIndex,
  style,
}: CustomSwiperProps) => {
  const { bottom } = useSafeArea();
  const withDots: boolean = noDots !== undefined && noDots !== "all" ? !noDots.includes(activeIndex) : true;

  const defaultStyle: ViewStyle = { ...flexChild, ...style };
  const dotBottomSpace = bottom || sh20;
  const paginationStyle: ViewStyle = {
    ...centerVertical,
    ...fullWidth,
    bottom: dotBottomSpace,
    position: "absolute",
  };

  return (
    <Fragment>
      <ViewPager
        initialPage={initialPage || 0}
        style={defaultStyle}
        ref={setRef}
        onPageSelected={(event: NativeSyntheticEvent<ViewPagerOnPageSelectedEventData>) => {
          setActiveIndex(event.nativeEvent.position);
        }}>
        {pages.map((item: ReactNode, viewIndex: number) => {
          return <View key={viewIndex}>{item}</View>;
        })}
      </ViewPager>
      {noDots === "all" || withDots === false ? null : (
        <View style={paginationStyle}>
          <SliderDots
            activeIndex={activeIndex}
            colorActive={dotColorActive || colorWhite._1}
            colorInactive={dotColorInactive || colorWhite._1}
            count={pages.length}
          />
        </View>
      )}
      {bottomContent}
    </Fragment>
  );
};
