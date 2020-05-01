import { Card, Elevation } from '@blueprintjs/core';
import { useState, useCallback } from 'react';
import { SearchedMovie, useMovie } from '../services/omdb';
import { Alert } from '@blueprintjs/core';

type SearchedMovieCardProps = SearchedMovie & {};

export default function SearchedMovieCard(props: SearchedMovieCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClickCard = useCallback(() => {
    setIsModalOpen(true);
  }, []);
  const { data } = useMovie(isModalOpen ? props.imdbID : null);

  return (
    <div className="wrapper">
      <Card interactive elevation={Elevation.TWO} onClick={handleClickCard}>
        <h5 className="title bp3-heading">
          {props.Title} ({props.Year})
        </h5>
        <img className="img-fluid" src={props.Poster} />
      </Card>

      <Alert
        className="alert"
        isOpen={isModalOpen}
        canEscapeKeyCancel
        canOutsideClickCancel
        onClose={() => {
          setIsModalOpen(false);
        }}
        confirmButtonText="Close"
        style={{ width: '60vw', maxWidth: '100vw' }}
      >
        {data && (
          <div className="modal-content">
            <h1 className="bp3-heading title">
              {data.Production} - {data.Title} ({data.Year})asdfasdfasdfasdf
            </h1>
          </div>
        )}
      </Alert>

      <style jsx>{`
        .wrapper {
          margin-bottom: 1rem;
          margin-right: 1rem;
          width: 12.87rem;
          display: inline-block;
        }

        .title {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }

        .modal-content {
          width: inherit;
        }
      `}</style>
    </div>
  );
}

function ModalContent(props: any) {
  console.log('ModalContent props', props);
  return <div>hello modal content</div>;
}
