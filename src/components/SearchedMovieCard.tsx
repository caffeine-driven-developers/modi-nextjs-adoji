import { Card, Elevation } from '@blueprintjs/core';
import { MouseEventHandler } from 'react';
import { SearchedMovie } from '../services/search';

type SearchedMovieCardProps = SearchedMovie & {
  onClick: MouseEventHandler;
};

export default function SearchedMovieCard(props: SearchedMovieCardProps) {
  return (
    <div className="wrapper">
      <Card interactive elevation={Elevation.TWO} onClick={props.onClick}>
        <h5 className="title bp3-heading">
          {props.Title} ({props.Year})
        </h5>
        <img className="img-fluid" src={props.Poster} />
      </Card>

      <style jsx>{`
        .wrapper {
          margin-bottom: 1rem;
          margin-right: 1rem;
          width: 15rem;
          display: inline-block;
        }

        .title {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}
