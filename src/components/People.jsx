import React, { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/Dropdown";
import Loading from "../partials/Loading";
import axios from '../utils/axios';
import Cards from "../partials/Cards";
import { useNavigate } from "react-router-dom";
// import axios from "axios";


function People() {
    const navigate = useNavigate();
    const [category,  setCategory] = useState("popular");
    const [people, setPeople] = useState([]);


  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

 

  const GetPeople = async () => {
    try {
      const { data } = await axios.get(`/person/${category}`);
      setPeople(data.results)

      
    } catch (error) {
      console.log("Error: ", error);
    }
  };


  useEffect(() => {
    GetPeople()
  }, []);

  return people?.length > 0 ? (
    <div className="w-full min-h-screen   py-3 select-auto ">
        <div className="w-full px-10 flex gap-2  items-center justify-between">
        <h1
          onClick={() => navigate(-1)}
          className="text-2xl flex  gap-5 items-center text-zinc-500 p-4 hover:text-blue-600"
        >
          <FaLongArrowAltLeft /> People
        </h1>
        <Topnav/>
      
      </div>

      <div>
        <Cards data={people} title="People" />
      </div>
   
    </div>
  ) : (
    <Loading />
  );
}

export default  People;
