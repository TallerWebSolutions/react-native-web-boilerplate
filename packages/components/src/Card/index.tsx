import React from 'react';
import { Image } from 'react-native';
import {
  createVariant,
  createRestyleComponent,
  VariantProps,
  createBox,
  createText,
} from '@shopify/restyle';

import { Theme } from '../theme';
import styles from './styles';

const variant = createVariant<Theme>({
  themeKey: 'cardVariants',
  defaults: {
    margin: {
      phone: 's',
      tablet: 'm',
    },
  },
});

const Box = createBox<Theme>();
const Text = createText<Theme>();

export type Props = {
  id: string;
  title: string;
  subtitle: string;
  imageSource: string;
};

type BasicCardProps = VariantProps<Theme, 'cardVariants'> &
  React.ComponentProps<typeof Box>;

const CardBasic = createRestyleComponent<BasicCardProps>([variant]);

type CardMediaProps = VariantProps<Theme, 'cardVariants'> & Props;

const CardMedia: React.FC<CardMediaProps> = ({
  variant = 'primary',
  title,
  subtitle,
  id,
  imageSource,
}) => {
  return (
    <CardBasic variant={variant}>
      <Box padding="l" flexDirection="row" style={styles.box}>
        <Image style={styles.image} source={{ uri: imageSource }} />
        <Box paddingLeft="l">
          <Text
            style={styles.title}
            marginBottom="s"
            fontSize={30}
            color="primaryDark"
            numberOfLines={1}>
            {title}
          </Text>
          <Text color="primaryMain" fontSize={18}>
            {subtitle}
          </Text>
        </Box>
      </Box>
    </CardBasic>
  );
};

export { CardBasic, CardMedia };
