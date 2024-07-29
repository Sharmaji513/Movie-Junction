import React, { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/Dropdown";
import Loading from "../partials/Loading";
import axios from '../utils/axios';
import Cards from "../partials/Cards";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const Popular = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");

  const [popular, setPopular] = useState([]); // Set initial state to an empty array

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };


  const GetPopular = async () => {
    try {
     
      const { data } = await axios.get(`${category}/popular`);
      setPopular(data.results);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetPopular();
  }, [category]);

  return popular?.length > 0 ? (
    <div className="w-screen h-screen py-3 ">
      {/* back button  */}
      <div className="w-full px-10 flex gap-2  items-center justify-between">
        <h1
          onClick={() => navigate(-1)}
          className="text-2xl flex  gap-5 items-center text-zinc-500 p-4 hover:text-blue-600"
        >
          <FaLongArrowAltLeft /> Popular
        </h1>
        <Topnav />
        <Dropdown
          title={`Category`}
          options={["movie", "tv"]}
          func={handleCategoryChange}
        />
      </div>

      <div>
        <Cards data={popular} title={category} />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;
