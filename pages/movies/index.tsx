import { useRouter } from 'next/dist/client/router';
import { useSearch, SearchedMovie } from '../../src/services/omdb';
import SearchedMovieCard from '../../src/components/SearchedMovieCard';
import { Spin } from 'antd';

type Query = string | null;
export default function Movies() {
  const router = useRouter();
  const s = router.query.search as Query;
  const { data } = useSearch(s);

  if (!s) {
    if ((global as any).document) {
      const navbarSearchInputElement = document.getElementById('navbar_search_input');
      if (navbarSearchInputElement) {
        setTimeout(() => {
          navbarSearchInputElement.focus(); // NOTE: to avoid unstable update
        }, 50);
      }
    }

    return (
      <div className="wrapper">
        <h3 className="bp3-heading">Search movie title looking for ^</h3>

        <style jsx>{`
          .wrapper {
            padding-top: 0.5rem;
            padding-right: 4rem;
            padding-left: 4rem;
            float: right;
            width: 27rem;
            background-color: lightgray;
            border-bottom-left-radius: 5px;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="wrapper">
        <Spin size="large" />
        <style jsx>{`
          .wrapper {
            padding-top: 30vh;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }

  if (data.Response === 'False') {
    return (
      <div className="wrapper">
        <h2>Movie "{s}" Not Found</h2>
        <p>Try another title</p>
        <style jsx>{`
          .wrapper {
            padding-top: 30vh;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Search result for "{s}"</h1>
      {data.Search.map((x: SearchedMovie) => (
        <SearchedMovieCard key={x.imdbID} {...x} />
      ))}
    </div>
  );
}
