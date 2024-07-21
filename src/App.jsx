import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import Trending from "./components/Trending";
import Loading from "./partials/Loading";
import TvShows from "./components/TvShows";
import People from "./components/People";
import Moviedetails from "./partials/Moviedetails";


function App() {
  return (
    <div className="w-screen  bg-[#0f0b20]  flex text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/tv" element={<TvShows/>} />
        <Route path="/people" element={<People/>} />
        <Route path="/loading" element={<Loading/>} />
        <Route path="/movie/details/:id" element={<Moviedetails/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
