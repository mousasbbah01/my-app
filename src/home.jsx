import { React, useState } from "react";
import Result from "./result";
import Search from "./search";
import "./home.scss";

function Home() {
  const [state, setstate] = useState();

  const getSearchInput = (input) => {
    setstate(input);
  };

  return (
    <div className="Home_Page">
      <Search getSearchInput={getSearchInput} />
      <Result searchInput={state} />
    </div>
  );
}

export default Home;
