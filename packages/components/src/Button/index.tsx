import React from 'react'

import {TouchableOpacity, View, Text} from 'react-native';
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  color,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  ColorProps
} from '@shopify/restyle';


const restyleFunctions = [spacing, border, backgroundColor, color];

type Props = SpacingProps<any> &
  BorderProps<any> &
  BackgroundColorProps<any> & {
    label: string;
    onPress: () => void;
    labelProps?:  ColorProps<any>
  };

const Button = ({onPress, label, ...rest}: Props) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <TouchableOpacity onPress={onPress}>
      <View {...props}>
        <Text {...props}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button