import {
  BackgroundColorProps,
  backgroundColor,
  BaseTheme,
} from '@shopify/restyle';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#fff',
  red: '#ff0000',

  // primary: {
  //   deep: '#210D26',
  //   dark: '#3A2041',
  //   main: '#8B7696',
  //   light: '#D2CEDE',
  //   clear: '#E7E4F1',
  // },

  // neutral: {
  //   deep: '#292929',
  //   dark: '#505050',
  //   main: '#747474',
  //   light: '#A9A9A9',
  //   clear: '#EEEEEE',
  // },
};

const theme = {
  colors: {
    ...palette,
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    // white: 'white',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  cardVariants: {
    primary: {
      backgroundColor: 'white',
    },
    secondary: {
      // backgroundColor: 'primaryDeep,
    },
  },
};

export type Theme = typeof theme;
export default theme;
