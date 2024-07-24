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
import Tvdetails from "./partials/Tvdetails";
import NotFound from "./components/NotFound";
import PersonDetails from "./partials/PersonDetails";


function App() {
  return (
    <div className="w-screen  bg-[#0f0b20]  flex text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />

        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/details/:id" element={<Moviedetails/>}></Route>

        <Route path="/tv" element={<TvShows/>} />
        <Route path="/tv/details/:id" element={<Tvdetails />}></Route>



        <Route path="/people" element={<People/>} />
        <Route path="/people/details/:id" element={<PersonDetails/>}></Route>

        <Route path="/loading" element={<Loading/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
