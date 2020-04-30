import { Card, Elevation } from '@blueprintjs/core';

type SearchedMovieCardProps = {
  Title: string;
  Poster: string;
  Type: string;
  Year: string;
  imdbId: string;
  className: string;
};

export default function SearchedMovieCard(props: SearchedMovieCardProps) {
  return (
    <div className="wrapper">
      <Card className={props.className} interactive={true} elevation={Elevation.TWO}>
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
