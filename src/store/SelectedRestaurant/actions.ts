import { typedAction } from "../actionCreator";

export const addSelectedRestaurant = (restaurant: IRestaurant) => {
  return typedAction("restaurant/ADD_SELECTED_RESTAURANT", restaurant);
};

export const resetSelectedRestaurant = () => {
  return typedAction("restaurant/RESET_RESTAURANT");
};

export type RestaurantAction = ReturnType<typeof addSelectedRestaurant | typeof resetSelectedRestaurant>;

export const RestaurantActionProps = {
  addSelectedRestaurant,
  resetSelectedRestaurant,
};

export type RestaurantActionsType = typeof RestaurantActionProps;
