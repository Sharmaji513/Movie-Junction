import React from "react";
import { Link } from "react-router-dom";


const Horizontalcards = ({ data = [], title }) => {
  return (
    <>
      <div className="w-full   p-5 flex flex-row gap-3 px-2 overflow-x-auto ">
        {data.map((d, i) => (
          <div key={i} className="min-w-[25%] w-[20vw] h-[45vh]  mr-3  ">
            <Link to={`/${d.media_type || title}/details/${d.id}`}>
            <img className="w-full h-[70%] object-cover  cursor-pointer"
              src={ 
                d.backdrop_path || d.poster_path || d.file_path ? `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path || d.file_path}`:"https://img.freepik.com/premium-vector/no-photo-available-vector-icon-default-image-symbol-picture-coming-soon-web-site-mobile-app_87543-18055.jpg"
              }
             
            />
            </Link>
          
            <h1 className="text-xl font-bold text-white mt-2">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            <p className="mt-2 mb-3 text-white">
              {d.overview.slice(0, 50)}...
              <Link
                to={`/${d.media_type || title}/details/${d.id}`}
                className="text-blue-400"
              >
                more
              </Link>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Horizontalcards;