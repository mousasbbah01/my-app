import "./card.scss";
function Card(props) {
  const ImgURL = () => {
    if (props.data.poster_path)
      return `https://image.tmdb.org/t/p/original${props.data.poster_path}`;
    return "https://nuft.edu.ua/assets/images/people/no-image.jpg";
  };

  return (
    <div class="card" style={{ "background-image": `url(${ImgURL()})` }}>
      <div className="text">
        <h1>{props.data.title}</h1>
        <h2>{props.data.release_date}</h2>
      </div>
    </div>
  );
}

export default Card;
