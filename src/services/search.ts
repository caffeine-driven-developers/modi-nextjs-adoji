import useRequest from '../hooks/useRequest';

export type SearchedMovie = { Title: string; Poster: string; Type: string; Year: string; imdbID: string };

export const useSearch = (s: string) =>
  useRequest(
    //  NOTE: don't request if s is nil
    s && {
      url: `/search?s=${s}`,
      method: 'GET',
    },
  );
