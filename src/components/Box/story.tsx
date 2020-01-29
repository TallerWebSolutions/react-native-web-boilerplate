import React from 'react';
import { action } from '@storybook/addon-actions';
import Box from '.';

export default {
  title: 'Box',
  component: Box,
};

export const Text = () => <Box bg="#333" color="#fff" m={2} p={4}> Hello Box </Box>