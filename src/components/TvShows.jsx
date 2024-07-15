import React, { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/Dropdown";
import Loading from "../partials/Loading";
import axios from '../utils/axios';
import Cards from "../partials/Cards";
import { useNavigate } from "react-router-dom";
// import axios from "axios";


function TvShows() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [tvShows, setTvShows] = useState([]); // Set initial state to an empty array

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

 

  const GetTvShows = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}`);
      setTvShows(data.results)

      
    } catch (error) {
      console.log("Error: ", error);
    }
  };


  useEffect(() => {
    GetTvShows()
  }, [category]);

  return tvShows?.length > 0 ? (
    <div className="w-full min-h-screen   py-3 select-auto ">
        <div className="w-full px-10 flex gap-2  items-center justify-between">
        <h1
          onClick={() => navigate(-1)}
          className="text-2xl flex  gap-5 items-center text-zinc-500 p-4 hover:text-blue-600"
        >
          <FaLongArrowAltLeft /> TvShows
        </h1>
        <Topnav/>
        <Dropdown
          title="Category"
          options={[
            "on_the_air",
            "popular",
            "top_rated",
            "airing_today",
        ]}
          func={(e) => setCategory(e.target.value)}
        />
      </div>

      <div>
        <Cards data={tvShows}  />
      </div>
   
    </div>
  ) : (
    <Loading />
  );
}

export default TvShows;
