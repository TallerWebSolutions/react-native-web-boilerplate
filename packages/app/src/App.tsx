import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import Card from './Card';
import { users as mock } from './mocked';
import { PropsCards } from './Card';

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

const normalizeUsers = (users: User[]): PropsCards[] =>
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
    <FlatList<PropsCards>
      data={normalizeUsers(userList)}
      renderItem={({ item }) => <Card {...item} />}
      keyExtractor={({ id }) => id}
    />
  );
};
