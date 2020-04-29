import useRequest from '../hooks/useRequest';

export const useMovies = (movieIds: string[]) => {
  return useRequest({
    url: `/search?s=${movieIds[0]}`,
    method: 'GET',
  });
};
