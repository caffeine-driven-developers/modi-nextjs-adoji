import { useRouter } from 'next/dist/client/router';
import { useMovies } from '../../src/services/movies';
import SearchedMovieCard from '../../src/components/SearchedMovieCard';

type Query = string | null;
export default function Movies() {
  const router = useRouter();
  const title = router.query.title as Query;
  const { data } = useMovies([title]);

  if (!title) {
    return <div>plaese search</div>;
  }

  if (!data) {
    return <div>loading...</div>;
  }

  if (data.Response === 'False') {
    return <div>no such movie</div>;
  }

  return (
    <div className="container">
      <h1>Search result for "{title}"</h1>
      {data.Search.map(x => (
        <SearchedMovieCard className="s-movie-card" key={x.imdbID} {...x} />
      ))}
      <style jsx global>{`
        .s-movie-card {
          margin-bottom: 1rem;
          margin-right: 1rem;
          width: 15rem;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
