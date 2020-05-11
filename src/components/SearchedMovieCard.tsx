import { useState, useCallback } from 'react';
import { SearchedMovie, useMovie } from '../services/omdb';
import { Modal, Card } from 'antd';

type SearchedMovieCardProps = SearchedMovie & {};

export default function SearchedMovieCard(props: SearchedMovieCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClickCard = useCallback(() => {
    setIsModalOpen(true);
  }, []);
  const { data } = useMovie(isModalOpen ? props.imdbID : null);

  return (
    <div className="wrapper">
      <Card onClick={handleClickCard} hoverable cover={<img className="img-fluid" src={props.Poster} />}>
        <Card.Meta title={`${props.Title} (${props.Year})`}></Card.Meta>
      </Card>

      {data && (
        <Modal
          title={`${data.Production} - ${data.Title} (${data.Year})`}
          visible={isModalOpen}
          maskClosable={true}
          okText="Add to list"
          onOk={() => {
            // TODO:
            console.log('added!');
            setIsModalOpen(false);
          }}
          onCancel={() => {
            setIsModalOpen(false);
          }}
        >
          hello modal
        </Modal>
      )}

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
