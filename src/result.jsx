import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./card";
import "./results.scss";
function Result(props) {
  const [state, setstate] = useState([]);
  useEffect(() => {
    console.log(props.searchInput);
    fetch(
      `${
        props.searchInput
          ? `https://api.themoviedb.org/3/search/movie?api_key=d8d436ca878e548c5f0a4b2514f1e60b&query=${props.searchInput}`
          : "https://api.themoviedb.org/3/movie/popular?api_key=d8d436ca878e548c5f0a4b2514f1e60b"
      }`
    ).then((res) => {
      res.json().then((data) => {
        setstate(data.results);
      });
    });
  }, [props.searchInput]);

  return (
    <div className="Result">
      {state.map((data) => (
        <Link className="link" to={`/movie/${data.id}`}>
          <Card data={data} />
        </Link>
      ))}
    </div>
  );
}

export default Result;
