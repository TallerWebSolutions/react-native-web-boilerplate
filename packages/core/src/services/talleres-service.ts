import { users } from './mocked';
import { CURRENT_TALLERES, GITHUB_BASE_URL_API } from '../configs/constants';
import { Tallerer } from '../types/tallerer';

export const getCurrentTalleres = async (): Promise<Tallerer[]> => {
  try {
    const promises = await Promise.all(
      CURRENT_TALLERES.map(
        async username =>
          await fetch(GITHUB_BASE_URL_API + `/users/${username}`),
      ),
    );

    if (!promises[0].ok) throw new Error();

    return Promise.all(promises.map(u => u.json()));
  } catch (error) {
    return users as Tallerer[];
  }
};
