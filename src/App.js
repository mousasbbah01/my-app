import "./App.css";
import Home from "./home";
import Movie from "./movie";
import Header from "./header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
