import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import {
  ThemeProvider,
  createBox,
  createText,
  createRestyleComponent,
  createVariant,
  VariantProps,
  BoxProps,
} from '@shopify/restyle';

import theme, { Theme } from '../theme';
import scale from 'core/src/scale';

const Box = createBox<Theme>();

const CardRestyle = createRestyleComponent<
  VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>
>([createVariant({ themeKey: 'cardVariants' })], Box);

// type Props = {
//   image?: string | object;
//   variant: VariantProps<Theme, 'cardVariants'>;
//   // variant: any;
// };

const Card: React.FC = ({ variant, image }) => (
  <CardRestyle
    variant={variant}
    backgroundColor="purpleDark"
    style={styles.wrapper}>
    {/* <Image source={image} /> */}
    <Text>opa</Text>
  </CardRestyle>
);

const styles = StyleSheet.create({
  wrapper: {
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowRadius: scale(15),
    elevation: 10,
    borderRadius: 10,
  },
});

export { Card };
