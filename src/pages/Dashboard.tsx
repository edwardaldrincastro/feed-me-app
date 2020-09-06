import React, { Fragment, FunctionComponent, useEffect, useState } from "react";
import { ScrollView, Text, View, ViewStyle } from "react-native";
import DrawerLayout from "react-native-gesture-handler/DrawerLayout";
import { connect } from "react-redux";

import { CardHero, CustomHeader, CustomSpacer, CustomTextInput, SafeAreaPage, SideMenu } from "../components";
import { Language } from "../constants";
import { SAMPLE_RESTAURANTS } from "../mocks";
import { RestaurantMapDispatchToProps, RestaurantMapStateToProps, RestaurantStoreProps } from "../store";
import {
  colorGray,
  colorOrange,
  colorWhite,
  flexChild,
  flexGrow,
  fs16SemiBoldBlack2,
  fullHeight,
  fullWidth,
  px,
  py,
  sh16,
  sh176,
  sh20,
  sh240,
  sw16,
  sw20,
  sw8,
} from "../styles";

const { DASHBOARD } = Language.PAGE;
interface DashboardPageProps extends RestaurantStoreProps {
  navigation: IStackNavigationProp;
}

const DashboardComponent: FunctionComponent<DashboardPageProps> = (props: DashboardPageProps) => {
  const { navigation } = props;
  const [restaurantsNearby, setRestaurantsNearby] = useState<IRestaurant[]>([]);
  const [allRestaurants, setAllRestaurants] = useState<IRestaurant[]>([]);
  const [sideMenu, setSideMenu] = useState<DrawerLayout | null>(null);
  const handleMenu = () => {
    if (sideMenu !== null) {
      sideMenu.openDrawer();
    }
  };
  const handleCart = () => {};
  const handleSelectRestaurant = (restaurant: IRestaurant) => {
    props.addSelectedRestaurant(restaurant);
    navigation.navigate("Restaurant");
  };

  const container: ViewStyle = { ...flexChild, backgroundColor: colorWhite._2 };

  useEffect(() => {
    setRestaurantsNearby(SAMPLE_RESTAURANTS);
    setAllRestaurants(SAMPLE_RESTAURANTS);
  }, []);

  return (
    <Fragment>
      <SideMenu setRef={setSideMenu}>
        <SafeAreaPage bottomBackgroundColor={colorWhite._2} topBackgroundColor={colorOrange._1}>
          <CustomHeader leftIcon="menu" leftIconPress={handleMenu} rightIcon="shopping-bag" rightIconPress={handleCart} />
          <View style={container}>
            <ScrollView contentContainerStyle={flexGrow} showsVerticalScrollIndicator={false}>
              <View style={flexChild}>
                <View style={{ ...px(sw20), ...py(sh16) }}>
                  <CustomTextInput
                    borderColor={colorWhite._4}
                    leftIcon="search"
                    leftIconColor={colorGray._3}
                    placeholder={DASHBOARD.PLACEHOLDER_SEARCH}
                  />
                </View>
                <Text style={{ ...fs16SemiBoldBlack2, ...px(sw20) }}>{DASHBOARD.LABEL_NEAR}</Text>
                <CustomSpacer space={sh16} />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <CustomSpacer isHorizontal={true} space={sw20} />
                  {restaurantsNearby.map((restaurant: IRestaurant, index: number) => {
                    const categories = restaurant.categories.join(", ");

                    const handleSelect = () => {
                      handleSelectRestaurant(restaurant);
                    };

                    const spaceBetween = index === restaurantsNearby.length - 1 ? sw20 : sw16;

                    return (
                      <Fragment key={index}>
                        <CardHero imageUri={restaurant.image} onPress={handleSelect} title={restaurant.name} subtitle={categories} />
                        <CustomSpacer isHorizontal={true} space={spaceBetween} />
                      </Fragment>
                    );
                  })}
                </ScrollView>
              </View>
              <View style={{ ...fullHeight, ...px(sw20) }}>
                <Text style={{ ...fs16SemiBoldBlack2, ...py(sh16) }}>{DASHBOARD.LABEL_ALL}</Text>
                {allRestaurants.map((restaurant: IRestaurant, index: number) => {
                  const categories = restaurant.categories.join(", ");
                  const spaceBetween = index === restaurantsNearby.length - 1 ? sh20 : sh16;

                  const handleSelect = () => {
                    handleSelectRestaurant(restaurant);
                  };

                  const cardStyle: ViewStyle = {
                    ...fullWidth,
                    borderRadius: sw8,
                    height: sh240,
                    backgroundColor: colorWhite._1,
                  };

                  return (
                    <Fragment key={index}>
                      <CardHero
                        imageStyle={{ height: sh176 }}
                        imageUri={restaurant.image}
                        key={index}
                        onPress={handleSelect}
                        style={cardStyle}
                        subtitle={categories}
                        title={restaurant.name}
                      />
                      <CustomSpacer space={spaceBetween} />
                    </Fragment>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </SafeAreaPage>
      </SideMenu>
    </Fragment>
  );
};

export const DashboardPage = connect(RestaurantMapStateToProps, RestaurantMapDispatchToProps)(DashboardComponent);
