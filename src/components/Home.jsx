import React, { useEffect, useState } from "react";
import Sidenav from "../partials/Sidenav";
import axios from "../utils/axios";
import Header from "./Header";
import Dropdown from "../partials/Dropdown";
import Horizontalcards from "../partials/Horizontalcards";
import Topnav from "../partials/Topnav";
import Loading from "../partials/Loading";

const Home = () => {
  const [wallpaper, setwallpaper] = useState(null);

  const [trending, setTrending] = useState(null);
  const [category, setcategory] = useState("all");
  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");
      // console.log(data);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      // console.log(randomdata);
      setwallpaper(randomdata);
    } catch (error) {
      console.log(error);
    }
  };

  const GetTrending = async () => {
    try {
      let { data } = await axios.get(`/trending/${category}/day`);
      console.log(data.results);
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
    GetTrending();
  }, [category]);

  // console.log("trendin data " , trending)

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className={` h-screen overflow-auto overflow-x-hidden`}>
       <Topnav/>
        <Header data={wallpaper} />

        {/* Dropdown */}
        <div className=" flex justify-between p-2 ">
          <h1 className="text-3xl p-2 uppercase text-center font-bold text-zinc-400">
            Trendings
          </h1>
          <Dropdown
            title="filter"
            options={["tv", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>

        <Horizontalcards data={trending} />
      </div>
    </>
  ) : (
    <Loading/>
  );
};

export default Home;
