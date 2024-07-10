import React from "react";
import { GrAnnounce } from "react-icons/gr";
import { MdMovieFilter } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
//   console.log(data);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7),rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path}) `,
        objectFit: "cover",
        backgroundPosition: "center",
        backgroundSize: "cover",
        scale: "0.9",
        backgroundRepeat: "no-repeat",

      }}
      className="w-[90vw] flex flex-col justify-end items-start ml-[-60px] p-[10%]"
    >
     
     <div>
     <h1 className="w-[100%] text-5xl font-black text-white">{data.name ||data.title || data.original_name || data.original_title}</h1>
     <p className="w-[80%] mt-3 mb-3">
        {data.overview.slice(0,200)}...
        <Link to={`/${data.media_type || title}/details/${data.id}`} className="text-blue-400">more</Link>
    </p>

    <p className="flex items-center gap-5 text-lg">
          <span className="flex gap-2 items-center">
            <GrAnnounce className="text-yellow-500 " />
            {data.release_date || "no information"}
          </span>
          <span className="flex gap-2 items-center">
          <MdMovieFilter className="mt-1 text-green-500 " />
            {data.media_type.toUpperCase()}
          </span>
        </p>
        
     </div>
        
     <Link to={`/${data.media_type || title}/datails/${data.id}/trailer`} className="bg-[#6556cd] px-7 py-3 rounded-md mt-5">Watch Trailer</Link>
    </div>
  );
};

export default Header;
