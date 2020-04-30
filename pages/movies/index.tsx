import { useRouter } from 'next/dist/client/router';
import { useSearch } from '../../src/services/search';
import SearchedMovieCard from '../../src/components/SearchedMovieCard';
import { Callout, Icon, Spinner } from '@blueprintjs/core';

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
        <h3 className="bp3-heading">
          Search movie title looking for <Icon style={{ paddingBottom: 4 }} icon="arrow-up" />
        </h3>

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
        <Spinner intent="primary" />
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
    return <div>no such movie</div>;
  }

  return (
    <div className="container">
      <h1>Search result for "{s}"</h1>
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
