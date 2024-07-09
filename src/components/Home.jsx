import React, { useEffect, useState } from "react";
import Sidenav from "../partials/Sidenav";
import axios from "../utils/axios";
import Header from "./Header";

const Home = () => {
  const [wallpaper, setwallpaper] = useState(null);

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");
      // console.log(data);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      console.log(randomdata);
      setwallpaper(randomdata);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
  }, []);

  return wallpaper ? (
    <>
      <Sidenav />
      <div className={` h-full overflow-auto overflow-x-hidden`}>
        <Header data={wallpaper} />
      </div>
    </>
  ) : (
    <h1>Loading..</h1>
  );
};

export default Home;
