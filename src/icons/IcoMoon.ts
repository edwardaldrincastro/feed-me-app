import { createIconSetFromIcoMoon } from "react-native-vector-icons";

import { IcoMoonSelection } from "./IcoMoonSelection";

export const IcoMoon = createIconSetFromIcoMoon(IcoMoonSelection, "feedme_icomoon", "feedme_icomoon.ttf");

export const listIconNames = () => {
  return IcoMoonSelection.icons.map((icon) => icon.properties.name);
};
