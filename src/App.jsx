import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import Trending from "./components/Trending";
import Loading from "./partials/Loading";


function App() {
  return (
    <div className="w-screen  bg-[#0f0b20]  flex text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/loading" element={<Loading/>} />

      </Routes>
    </div>
  );
}

export default App;
