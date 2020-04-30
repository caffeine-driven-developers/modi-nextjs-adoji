import useRequest from '../hooks/useRequest';

export const useSearch = (s: string) =>
  useRequest(
    //  NOTE: don't request if s is nil
    s && {
      url: `/search?s=${s}`,
      method: 'GET',
    },
  );
