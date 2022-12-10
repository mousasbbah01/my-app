import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./movie.scss";

function Movie() {
  const params = useParams();
  const [state, setstate] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=d8d436ca878e548c5f0a4b2514f1e60b&language=en-US`
    ).then((res) => {
      res.json().then((data) => {
        setstate(data);
      });
    });
  }, []);

  return (
    <div className="movie">
      <div className="left">
        <img
          src={`https://image.tmdb.org/t/p/original${state?.backdrop_path}`}
          alt=""
        />
      </div>
      <div className="right">
        <h1>{state.title}</h1>
        <h3>{state.release_date}</h3>
        <p>{state.overview}</p>
        <ul>
          <li>Vote Average: {state.vote_average}</li>
          <li>Vote Count: {state.vote_count}</li>
          <li>Popularity: {state.popularity}</li>
        </ul>
      </div>
    </div>
  );
}

export default Movie;
