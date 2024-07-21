import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Horizontalcards from "../partials/Horizontalcards";

import Loading from "./Loading";

const Moviedetails = () => {
  const {pathname} = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { info } = useSelector((store) => store.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadmovie(id));

    // unmount data from redux
    return () => {
      dispatch(removemovie());
    };
  }, [id]);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen h-[100vh] px-[5%] overflow-hidden overflow-y-auto"
    >
      {/* Part 1 navigation  */}
      <nav className=" h-[10vh] w-full flex text-zinc-100 bg-transparent text-2xl top-0 gap-4  p-10">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>

        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>

        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>

        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          imdb
        </a>
      </nav>

      {/* Part 2 Poster and details */}

      <div className="w-full  flex   px-4  items-center">
        <img
          className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[50vh] object-cover "
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="relative content text-white px-10  ">
          <h1 className="text-5xl font-black ">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}

            <span className="text-2xl font-bold text-zinc-200">
              ({info.detail.release_date.split("-")[0]})
            </span>
          </h1>

          <div className="w-full flex mt-2 gap-2">
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(", ")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>
          <div className="mt-3 flex gap-3 items-center">
            <span className="bg-green-800 text-white  rounded-full  tracking-tight text-2xl  px-2 py-4">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </span>

            <h1 className="w-[60px] font-semibold text-2xl leading-2">
              User Score
            </h1>

            <ul class="flex  list-none ">
              <li
                class="!mx-0 w-9 h-9 bg-tmdb-dark-blue"
                title="Smiling face with heart eyes"
              >
                <img
                  src="https://www.themoviedb.org/assets/2/v8/1f60d-f12478ffe50d98da9d6cafbf29ef1777b8d1d2bb123224c978ca9ba4e6e6159b.svg"
                  class="w-7 h-7"
                />
              </li>
              <li class="!mx-0 w-9 h-9 bg-tmdb-dark-blue" title="Grinning face">
                <img
                  src="https://www.themoviedb.org/assets/2/v8/1f600-f53b445a86235a4ef54899ad2f1a936e3ff6d1dcdaafc9ed63d6a6070491c0a1.svg"
                  class="w-7 h-7"
                />
              </li>
              <li
                class="!mx-0 w-9 h-9 bg-tmdb-dark-blue"
                title="Smiling face with tear"
              >
                <img
                  src="https://www.themoviedb.org/assets/2/v8/1f972-53b1d0723b2bec00ada6fba7a1772b267f5a05d955b0999f66771865e59fd97b.svg"
                  class="w-7 h-7"
                />
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-2xl font-semibold italic mt-5 text-zinc-200 ">
              {info.detail.tagline}
            </h1>
            <h1 className="text-2xl mt-5">Overview</h1>
            <p>{info.detail.overview}</p>

            <h1 className="text-2xl mb-3  mt-5">Languages</h1>
            <p className="mb-10">{info.translations.join(", ")}</p>

            <Link className="p-5 bg-[#6556CD] rounded-lg">
              <i className="text-xl ri-play-fill mr-3 "></i>
              Play Trailer
            </Link>
          </div>
        </div>
      </div>


     {/* Part 3 Available on Platform */}
     <div className="w-[90%] flex flex-col gap-y-5 mt-10 justify-end items-end mx-auto ">
                {info.watchproviders && info.watchproviders.flatrate && (
                    <div className="flex gap-x-2  text-orange-500 ">
                        <h1>Available on Platfotms</h1>
                        {info.watchproviders.flatrate.map((w, i) => (
                            <img
                                key={i}
                                title={w.provider_name}
                                className="w-[5vh] h-[5vh] object-cover rounded-md"
                                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                                alt=""
                            />
                        ))}
                    </div>
                )}

                {info.watchproviders && info.watchproviders.rent && (
                    <div className="flex gap-x-5 items-center text-white">
                        <h1 className="min-h-7 border bg-white text-[#00050d] px-3 py-3 rounded-lg   font-semibold">Available on Rent</h1>
                        {info.watchproviders.rent.map((w, i) => (
                            <img
                                key={i}
                                title={w.provider_name}
                                className="w-[5vh] h-[5vh] object-cover rounded-md"
                                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                                alt=""
                            />
                        ))}
                    </div>
                )}

                {info.watchproviders && info.watchproviders.buy && (
                    <div className="flex gap-x-10 items-center text-white">
                        <h1 className="min-h-7 border bg-green-700 text-white px-3 py-3 rounded-lg   font-semibold">Available to Buy</h1>
                        {info.watchproviders.buy.map((w, i) => (
                            <img
                                key={i}
                                title={w.provider_name}
                                className="w-[5vh] h-[5vh] object-cover rounded-md"
                                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                                alt=""
                            />
                        ))}
                    </div>
                )}
            </div>





      {/* Part 4 Recommendations and Similar Stuff */}
      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
      <h1 className=" text-3xl font-bold text-white">
        Recommendations & Similar stuff
      </h1>
      <Horizontalcards
        title="movie"
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;
