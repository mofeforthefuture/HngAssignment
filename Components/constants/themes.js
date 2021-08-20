import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  purple: 'rgba(34, 31, 96, 1)',
  white: 'rgba(255, 255, 255, 1)',
  fade: 'rgba(255, 255, 255, 0.4)',
  black: 'rgb(0, 102, 153)',
  grey: 'rgb(166, 166, 166)',
  blue: 'rgb(0, 153, 255)',
  tabBlack: 'rgb(0, 15, 26)',
  input: 'rgba(230, 230, 230, 0.2)'

};


const Theme = { COLORS, };

export default Theme;