import React from 'react';
import { TouchableOpacity, View, ButtonProps } from 'react-native';
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
} from '@shopify/restyle';

import { Text } from '../Text';

const restyleFunctions = [spacing, border, backgroundColor];

type Props = ButtonProps &
  SpacingProps<any> &
  BorderProps<any> &
  BackgroundColorProps<any> & {
    label: string;
    onPress: () => void;
  };

export const Button: React.FC<Props> = ({ onPress, label, ...rest }) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <TouchableOpacity onPress={onPress}>
      <View {...props}>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
