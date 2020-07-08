import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 414;
const guidelineBaseHeight = 896;

const scale = (size: number): number => {
  if (!size) throw new Error('Size is required!');
  return (width / guidelineBaseWidth) * size;
};

export default scale;
