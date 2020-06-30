import React from 'react';
import { createText } from '@shopify/restyle';

import { Theme } from '../theme';

const Text = createText<Theme>();

export const Title: React.FC = ({ children }) => (
  <Text fontSize={32} color="primaryDeep" fontWeight="bold" margin="l">
    {children}
  </Text>
);
