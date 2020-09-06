import { SAMPLE_MENU_1, SAMPLE_MENU_2 } from "./menu";

export const SAMPLE_RESTAURANT_1: IRestaurant = {
  name: "Domino's Pizza",
  menu: [SAMPLE_MENU_1, SAMPLE_MENU_2, SAMPLE_MENU_1, SAMPLE_MENU_2],
  address: "asd",
  currency: "$",
  categories: ["Pizza", "Pasta"],
  image:
    "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80",
};

export const SAMPLE_RESTAURANT_2: IRestaurant = {
  name: "Pizza Hub",
  menu: [SAMPLE_MENU_1, SAMPLE_MENU_2],
  currency: "$",
  address: "asd",
  categories: ["Pizza"],
  image:
    "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=866&q=80",
};

export const SAMPLE_RESTAURANT_3: IRestaurant = {
  name: "Burger Joint",
  menu: [SAMPLE_MENU_1, SAMPLE_MENU_2],
  currency: "$",
  address: "asd",
  categories: ["Burger"],
  image:
    "https://images.unsplash.com/photo-1477617722074-45613a51bf6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
};

export const SAMPLE_RESTAURANTS: IRestaurant[] = [
  SAMPLE_RESTAURANT_1,
  SAMPLE_RESTAURANT_2,
  SAMPLE_RESTAURANT_3,
  SAMPLE_RESTAURANT_2,
  SAMPLE_RESTAURANT_1,
  SAMPLE_RESTAURANT_3,
  SAMPLE_RESTAURANT_1,
  SAMPLE_RESTAURANT_3,
  SAMPLE_RESTAURANT_3,
  SAMPLE_RESTAURANT_1,
  SAMPLE_RESTAURANT_2,
];
