import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
export const freePlan = [
  { key: "Trial 7 days" },
  { key: "Main Kits Included" },
  { key: "Support" }
];
export const upgradePlan = [
  { key: "Unlimited Access" },
  { key: "All Kits Included" },
  { key: "IOS Support" }
];