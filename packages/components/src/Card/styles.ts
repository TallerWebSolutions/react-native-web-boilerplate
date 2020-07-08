import { StyleSheet, Platform } from 'react-native';
import scale from 'core/src/utils/scale';

export default StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: scale(10),
  },
  title: {
    maxWidth: Platform.OS === 'web' ? '100%' : 230,
  },
});
