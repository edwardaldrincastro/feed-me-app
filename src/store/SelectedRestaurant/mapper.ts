import { bindActionCreators, Dispatch } from "redux";

import { RootState } from "../rootReducer";
import { RestaurantActionProps } from "./actions";

export const RestaurantMapStateToProps = (state: RootState) => ({
  selectedRestaurant: state.selectedRestaurant.selectedRestaurant,
});

export const RestaurantMapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(RestaurantActionProps, dispatch);
};

export type RestaurantStoreProps = ReturnType<typeof RestaurantMapStateToProps> & ReturnType<typeof RestaurantMapDispatchToProps>;
