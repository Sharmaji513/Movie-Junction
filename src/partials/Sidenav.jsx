import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineFire } from "react-icons/ai";
import { SiCodemagic } from "react-icons/si";
import { MdOutlineMovieFilter } from "react-icons/md";
import { MdTv } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { HiOutlinePhoneIncoming } from "react-icons/hi";
import { MdInfoOutline } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { GiFilmSpool } from "react-icons/gi";
function Sidenav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* //toggle Menu  */}
      <div className="md:hidden flex items-center justify-start">
        <button
          onClick={toggleMenu}
          className="text-3xl p-5 text-white focus:outline-none"
        >
          {isMenuOpen ? <IoMdClose /> : <HiMenu />}
        </button>
      </div>

      <div
        className={`md:block ${
          isMenuOpen ? "block" : "hidden"
        } md:relative md:h-[95vh] md:border-r-[0.2px] p-2 `}
      >
        <div className="flex flex-col text-xl m-5">
          {/* Logo  */}
          <div className="w-full h-full items-center flex flex-row text-center  justify-center gap-4">
            <div className="text-[3vw] text-[#bbcd56]">
              <GiFilmSpool />
            </div>

            <div className="w-full">
              <h1 className="text-[1vw]  tracking-wider font-bold  uppercase p-2  ml-[-2vw] font-cursive text-teal-100">
                Movie Junction
              </h1>
            </div>
          </div>

          {/* Nav-items  */}
          <div>
            <nav className="mt-5">
              <h1 className="text-white font-semibold text-lg p-5">
                New Feeds
              </h1>
              <Link
                to={`/trending`}
                className="hover:bg-[#6556cd] px-5 rounded-lg py-3 duration-500 flex items-center gap-2"
              >
                <AiOutlineFire />
                Trending
              </Link>
              <Link
                to={`/popular`}
                className="hover:bg-[#6556cd] px-5 rounded-lg py-3 duration-500 flex items-center gap-2"
              >
                <SiCodemagic className="mt-2" />
                Popular
              </Link>
              <Link
                to={`/movie`}
                className="hover:bg-[#6556cd] px-5 rounded-lg py-3 duration-500 flex items-center gap-2"
              >
                <MdOutlineMovieFilter />
                Movies
              </Link>
              <Link
                to={`/tv`}
                className="hover:bg-[#6556cd] px-5 rounded-lg py-3 duration-500 flex text-nowrap items-center gap-2"
              >
                <MdTv />
                Tv Shows
              </Link>
              <Link
                to={`/people`}
                className="hover:bg-[#6556cd] px-5 rounded-lg duration-500 flex items-center gap-2 md:mb-2 py-3"
              >
                <RiTeamFill className="mt-1" /> People
              </Link>
            </nav>

            <hr className="border-none h-[1px] bg-zinc-400 mt-12 mb-5" />

            <nav className="text-md">
              <h1 className="text-white font-semibold text-md md:mt-2 px-5 py-3 text-nowrap">
                Website Information
              </h1>
              <Link className="hover:bg-[#6556cd] px-5 rounded-lg py-4 duration-500 flex items-center gap-2">
                <MdInfoOutline />
                About
              </Link>
              <Link className="hover:bg-[#5142b1] px-5 rounded-lg py-4 duration-500 flex items-center gap-2">
                <HiOutlinePhoneIncoming />
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
