import useRequest from '../hooks/useRequest';

export type SearchedMovie = { Title: string; Poster: string; Type: string; Year: string; imdbID: string };

export type Movie = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};

type Rating = {
  Source: string;
  Value: string;
};

export const useSearch = (s: string) =>
  useRequest(
    //  NOTE: don't request if s is nil
    s && {
      url: `/search?s=${s}`,
      method: 'GET',
    },
  );

export const useMovie = (imdbID: string) =>
  useRequest<Movie>(
    imdbID && {
      url: `/movies/${imdbID}`,
      method: 'GET',
    },
  );
