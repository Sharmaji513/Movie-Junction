import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data , title }) => {
  console.log(title)
  // console.log("card", data);
  return (
    <div className=" bg-[#0f0b20] w-[100vw] flex flex-wrap justify-center mt-10">
      {data?.map((d, i) => (
        <Link to={`/${d.media_type || title}/details/${d.id}`} key={i} className="relative w-[22vw] h-[39vw] m-2">
        
          <img
            className="w-full h-[90%] object-cover shadow-lg shadow-black"
            src={`https://image.tmdb.org/t/p/original/${
              d?.backdrop_path || d?.poster_path || d?.profile_path
            }`}
            alt=""
          />
          <h1 className="text-xl  text-zinc-400 font-semibold p-2 mb-10 text-center">{d.titel || d.original_name || d.original_title}</h1>
          {d.vote_average && <div className="text-white w-[7vh] h-[7vh] flex items-center justify-center bg-yellow-600 absolute bottom-[93%] -right-2 rounded-full ">{(d.vote_average * 10).toFixed()} <sup>%</sup></div>}
        
        </Link>
      ))}
    </div>
  );
};

export default Cards;
