import { useRouter } from 'next/dist/client/router';
import { useMovies } from '../../src/services/movies';

type Query = string | null;
export default function Movies() {
  const router = useRouter();
  const title = router.query.title as Query;
  if (!title) {
    return <div>plaese search</div>;
  }

  const { data } = useMovies([title]);
  if (!data) {
    return <div>loading...</div>;
  }

  if (data.Response === 'False') {
    return <div>no such movie</div>;
  }

  return (
    <div className="container">
      {data.Search.map(x => (
        <p key={x.imdbID}>{x.Title}</p>
      ))}
    </div>
  );
}
