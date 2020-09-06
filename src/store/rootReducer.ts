import { combineReducers } from "redux";

import { selectedRestaurantReducer } from "./SelectedRestaurant";

export const rootReducer = combineReducers({
  selectedRestaurant: selectedRestaurantReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
