import React from 'react'
import {Text as TextNative, TextProps} from 'react-native';
import { useRestyle,  color, ColorProps } from '@shopify/restyle';

const restyleFunctions = [color];

type Props = ColorProps<any> & TextProps

export const Text: React.FC<Props> = ({children, ...rest}) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
        <TextNative {...props}>{children}</TextNative>
  );
};