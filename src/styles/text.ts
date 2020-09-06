import { TextStyle } from "react-native";

import { PoppinsBold, PoppinsMedium, PoppinsRegular, PoppinsSemiBold } from "../constants";
import { colorBlack, colorGray, colorGreen, colorOrange, colorWhite } from "./colors";
import { sh12, sh14, sh16, sh20, sh24, sh40 } from "./sizes";

export const fsAlignCenter: TextStyle = { textAlign: "center" };

export const fsCapitalize: TextStyle = {
  textTransform: "capitalize",
};

export const fsLineThrough: TextStyle = {
  textDecorationLine: "line-through",
};

export const fsUnderline: TextStyle = {
  textDecorationLine: "underline",
};

export const fs12MedBlack2: TextStyle = {
  color: colorBlack._2,
  fontFamily: PoppinsMedium,
  fontSize: sh12,
};

export const fs12MedGreen1: TextStyle = {
  color: colorGreen._1,
  fontFamily: PoppinsMedium,
  fontSize: sh12,
};

export const fs12RegGray3: TextStyle = {
  color: colorGray._3,
  fontFamily: PoppinsRegular,
  fontSize: sh12,
};

export const fs14MedBlack2: TextStyle = {
  color: colorBlack._2,
  fontFamily: PoppinsMedium,
  fontSize: sh14,
};

export const fs14MedGray3: TextStyle = {
  color: colorGray._3,
  fontFamily: PoppinsMedium,
  fontSize: sh14,
};

export const fs14MedOrange1: TextStyle = {
  color: colorOrange._1,
  fontFamily: PoppinsMedium,
  fontSize: sh14,
};

export const fs14MedWhite1: TextStyle = {
  color: colorWhite._1,
  fontFamily: PoppinsMedium,
  fontSize: sh14,
};

export const fs14SemiBoldBlack2: TextStyle = {
  color: colorBlack._2,
  fontFamily: PoppinsSemiBold,
  fontSize: sh14,
};

export const fs14SemiBoldWhite1: TextStyle = {
  color: colorWhite._1,
  fontFamily: PoppinsSemiBold,
  fontSize: sh14,
};

export const fs16MedBlack2: TextStyle = {
  color: colorBlack._2,
  fontFamily: PoppinsMedium,
  fontSize: sh16,
};

export const fs16SemiBoldBlack2: TextStyle = {
  color: colorBlack._2,
  fontFamily: PoppinsSemiBold,
  fontSize: sh16,
};

export const fs20SemiBoldBlack2: TextStyle = {
  color: colorBlack._2,
  fontFamily: PoppinsSemiBold,
  fontSize: sh20,
};

export const fs24BoldBlack2: TextStyle = {
  color: colorBlack._2,
  fontFamily: PoppinsBold,
  fontSize: sh24,
};

export const fs40BoldWhite1: TextStyle = {
  color: colorWhite._1,
  fontFamily: PoppinsBold,
  fontSize: sh40,
};
