import { Card, Elevation } from '@blueprintjs/core';
import { MouseEventHandler, useState, useCallback } from 'react';
import { SearchedMovie } from '../services/search';
import { Alert } from '@blueprintjs/core';

type SearchedMovieCardProps = SearchedMovie & {};

export default function SearchedMovieCard(props: SearchedMovieCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClickCard = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <div className="wrapper">
      <Card interactive elevation={Elevation.TWO} onClick={handleClickCard}>
        <h5 className="title bp3-heading">
          {props.Title} ({props.Year})
        </h5>
        <img className="img-fluid" src={props.Poster} />
      </Card>

      <Alert
        isOpen={isModalOpen}
        canEscapeKeyCancel
        canOutsideClickCancel
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Alert>

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
