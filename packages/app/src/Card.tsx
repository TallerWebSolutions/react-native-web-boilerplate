import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

export type PropsCards = {
  id: string;
  title: string;
  subtitle: string;
  imageSource: string;
};

const Card: React.FC<PropsCards> = props => {
  const { title, subtitle, imageSource } = props;

  return (
    <View style={style.box}>
      <Image style={style.image} source={{ uri: imageSource }} />
      <View style={style.data}>
        <Text style={style.name}>{title}</Text>
        <Text style={style.repo}>{subtitle}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  box: {
    width: '100%',
    backgroundColor: '#333',
    padding: 20,
    flexDirection: 'row',
  },
  name: {
    color: 'white',
    fontSize: 30,
  },
  repo: {
    color: 'white',
  },
  data: {
    paddingLeft: 20,
  },
});

export default Card;
