import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import {
  createVariant,
  createRestyleComponent,
  VariantProps,
  createBox,
} from '@shopify/restyle';

import theme, { Theme } from '../theme';
import scale from 'core/src/scale';
import { color } from '@shopify/restyle';

const variant = createVariant<Theme>({
  themeKey: 'cardVariants',
  defaults: {
    margin: {
      phone: 's',
      tablet: 'm',
    },
    backgroundColor: 'white',
  },
});

const Box = createBox<Theme>();

const CardBasic = createRestyleComponent<
  VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>
>([variant]);

type Props = { title: string };

type CardMediaProps = VariantProps<Theme, 'cardVariants'> & Props;

const CardMedia: React.FC<CardMediaProps> = ({ variant, title }) => {
  return (
    <CardBasic
      variant={variant}
      borderWidth={1}
      borderColor="black"
      shadowColor="black"
      shadowOpacity={0.4}
      shadowRadius={scale(15)}
      elevation={10}
      borderRadius={10}>
      <Text>{title}</Text>
    </CardBasic>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowRadius: scale(15),
    elevation: 10,
    borderRadius: 10,
  },
  title: { color: 'blue' },
});

export { CardBasic, CardMedia };
