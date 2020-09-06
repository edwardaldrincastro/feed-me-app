import React, { Fragment, FunctionComponent, useState } from "react";
import { Alert, NativeScrollEvent, NativeSyntheticEvent, ScrollView, Text, View, ViewStyle } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import SafeAreaView from "react-native-safe-area-view";
import { connect } from "react-redux";

import { CustomHeader, CustomImage, CustomSpacer, FoodBasket, IconButton, IconText } from "../components";
import { FoodList } from "../components/List";
import { Language } from "../constants";
import { RestaurantMapDispatchToProps, RestaurantMapStateToProps, RestaurantStoreProps } from "../store";
import {
  borderBottomGray2,
  centerVertical,
  colorBlack,
  colorTransparent,
  colorWhite,
  flexChild,
  flexGrow,
  flexRow,
  fs14MedBlack2,
  fs16MedBlack2,
  fsUnderline,
  fullWidth,
  px,
  sh16,
  sh24,
  sh240,
  sh40,
  sh80,
  sw16,
  sw20,
} from "../styles";

interface RestaurantPageProps extends RestaurantStoreProps {
  navigation: IStackNavigationProp;
}

const { RESTAURANT } = Language.PAGE;

const RestaurantComponent: FunctionComponent<RestaurantPageProps> = ({ navigation, selectedRestaurant }: RestaurantPageProps) => {
  const { top } = useSafeArea();
  const [selectedFood, setSelectedFood] = useState<IRestaurantFood[]>([]);
  const [showHeader, setShowHeader] = useState<boolean>(false);

  const { categories, image, menu, address, currency, name } = selectedRestaurant!;

  const handleSelectFood = (food: IRestaurantFood) => {
    const tempFood: IRestaurantFood[] = [...selectedFood];
    tempFood.push(food);
    setSelectedFood(tempFood);
  };

  const handleShowMap = () => {
    Alert.alert(address!);
  };

  const handleViewBasket = () => {
    Alert.alert("View");
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    if (scrollPosition > 160 && !showHeader) {
      setShowHeader(true);
    }

    if (scrollPosition < 160 && showHeader) {
      setShowHeader(false);
    }
  };

  const safeAreaColor = selectedFood.length !== 0 ? { backgroundColor: colorWhite._1 } : { backgroundColor: colorWhite._2 };

  const headerColor = showHeader ? { backgroundColor: colorWhite._1 } : { backgroundColor: colorTransparent };
  const headerStyle: ViewStyle = { position: "absolute", ...fullWidth, ...headerColor };
  const headerTitle = showHeader ? name : undefined;

  const labelCategories = categories.join(", ");
  const numberOfItems = `x${selectedFood.length}`;
  const totalAmount =
    selectedFood.length !== 0 &&
    selectedFood
      .map((food: IRestaurantFood) => food.discountedPrice)
      .reduce((amountSum: number, currentAmount: number) => amountSum + currentAmount);

  const amountLabel = `${currency}${totalAmount}`;

  return (
    <SafeAreaView forceInset={{ top: "never" }} style={{ ...flexChild, ...safeAreaColor }}>
      <Fragment>
        <View style={{ ...flexChild, backgroundColor: colorWhite._2 }}>
          <ScrollView scrollEventThrottle={8} onScroll={handleScroll} contentContainerStyle={flexGrow} showsVerticalScrollIndicator={false}>
            <CustomImage source={{ uri: image }} style={{ ...fullWidth, height: sh240 }} />
            <CustomSpacer space={sh16} />
            <View style={px(sw20)}>
              <Text style={fs16MedBlack2}>{name}</Text>
              <Text style={fs14MedBlack2}>{labelCategories}</Text>
              <IconText
                name="navigate"
                onPress={handleShowMap}
                text={RESTAURANT.LINK_SHOW}
                textStyle={{ ...fs14MedBlack2, ...fsUnderline }}
              />
            </View>
            <CustomSpacer space={sh16} />
            <View style={borderBottomGray2} />
            <CustomSpacer space={sh16} />
            {menu!.map((item: IRestaurantMenu, index: number) => {
              return <FoodList data={item} key={index} onPress={handleSelectFood} />;
            })}

            {selectedFood.length !== 0 ? <CustomSpacer space={sh80} /> : null}
          </ScrollView>
        </View>
        <View style={headerStyle}>
          <CustomSpacer space={top} />
          {showHeader ? (
            <CustomHeader theme={showHeader ? "light" : undefined} title={headerTitle} style={{ height: sh40, ...headerColor }} />
          ) : (
            <View style={{ ...centerVertical, ...flexRow, height: sh40 }}>
              <CustomSpacer isHorizontal={true} space={sw16} />
              <IconButton name="caret-left" onPress={handleBack} size={sh24} style={{ backgroundColor: colorBlack._2_9 }} />
            </View>
          )}
        </View>
        {selectedFood.length !== 0 ? <FoodBasket amount={amountLabel} numberOfItems={numberOfItems} onPress={handleViewBasket} /> : null}
      </Fragment>
    </SafeAreaView>
  );
};

export const RestaurantPage = connect(RestaurantMapStateToProps, RestaurantMapDispatchToProps)(RestaurantComponent);
