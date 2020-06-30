import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';

import theme from 'components/src/theme';
import { CardMedia, Props } from 'components/src/Card';
import { Title } from 'components/src/Title';
import { users as mock } from './mocked';

type User = {
  avatar_url: string;
  name: string;
  login: string;
};

const tallerUserList = [
  'dersonsena',
  'arthuralmeidap',
  'alyoshas',
  'lhguerra',
  'guilhermedeoliveira',
  'selhar',
  'delete',
  'rrmontuan',
  'marcosvlehmkuhl',
];

const normalizeUsers = (users: User[]): Props[] =>
  users.map(user => ({
    id: user.login,
    subtitle: user.login,
    title: user.name,
    imageSource: user.avatar_url,
  }));

export const App: React.FC = () => {
  const apiUrl = 'https://api.github.com';
  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    const getUser = async () => {
      const promises = tallerUserList.map(async username =>
        (await fetch(apiUrl + `/users/${username}`)).json(),
      );

      try {
        setUserList(await Promise.all(promises));
      } catch (error) {
        setUserList(mock as User[]);
      }
    };

    getUser();
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
