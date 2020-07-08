import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';

import { getCurrentTalleres } from 'core/src/services/talleres-service';
import theme from 'components/src/theme';
import { CardMedia, Props } from 'components/src/Card';
import { Title } from 'components/src/Title';
import { Tallerer } from 'core/src/types/tallerer';

const normalizeUsers = (users: Tallerer[]): Props[] =>
  users.map(user => ({
    id: user.login,
    subtitle: user.login,
    title: user.name,
    imageSource: user.avatar_url,
  }));

export const App: React.FC = () => {
  const [userList, setUserList] = useState<Tallerer[]>([]);

  useEffect(() => {
    getCurrentTalleres().then(setUserList);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Title>Talleres profile</Title>
        <FlatList<Props>
          data={normalizeUsers(userList)}
          renderItem={({ item }) => <CardMedia {...item} />}
          keyExtractor={({ id }) => id}
        />
      </SafeAreaView>
    </ThemeProvider>
  );
};
