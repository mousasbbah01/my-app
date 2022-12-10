import { useState } from "react";
import "./search.scss";

function Search(props) {
  const [state, setState] = useState();

  const onChangeHandler = (e) => {
    e.preventDefault();
    setState(e.target.value);
    props.getSearchInput(e.target.value);
  };

  return (
    <div className="Search">
      <label>
        Search
        <input type="text" value={state} onChange={onChangeHandler} />
      </label>
    </div>
  );
}

export default Search;
