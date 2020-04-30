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
    <Card className={props.className} interactive={true} elevation={Elevation.TWO}>
      <h5 className="title bp3-heading">
        {props.Title} ({props.Year})
      </h5>
      <img className="img-fluid" src={props.Poster} />
      <style jsx scoped>{`
        .title {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      `}</style>
    </Card>
  );
}
