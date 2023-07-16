import { PixelRatio } from 'react-native';

const fontScale = PixelRatio.getFontScale();
export const SIZES = {
  small: 9 * fontScale,
  medium: 14 * fontScale,
  large: 18 * fontScale,
  xLarge: 24 * fontScale,
};

export const COLORS = {
  primaryColor: '#2c53f5',
  secondColor: '#5d7cf7',
  white: '#FFF',
  black: '#000',
  lightGray: '#F6F6F6',
  gray: '#6A6A6A',
  success: '#28a745',
  danger: '#dc3545',
  secondaryContainer: 'transparent',
};

export const FONTS = {
  bold: 'InterBold',
  semiBold: 'InterSemiBold',
  medium: 'InterMedium',
  regular: 'InterRegular',
  light: 'InterLight',
};
