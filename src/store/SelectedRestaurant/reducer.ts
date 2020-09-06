import { RestaurantAction } from "./actions";
import { selectedRestaurantInitialState, SelectedRestaurantState } from "./state";

export function selectedRestaurantReducer(state = selectedRestaurantInitialState, action: RestaurantAction): SelectedRestaurantState {
  switch (action.type) {
    case "restaurant/ADD_SELECTED_RESTAURANT":
      return {
        ...state,
        selectedRestaurant: action.payload,
      };

    case "restaurant/RESET_RESTAURANT":
      return {
        ...state,
        selectedRestaurant: undefined,
      };

    default:
      return state;
  }
}
