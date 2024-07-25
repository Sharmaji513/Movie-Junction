import axios from '../utils/axios'
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdOutlineScreenSearchDesktop } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'


const topnav = () => {

    const [query , setquery] = useState("")

    const [searchMovie, setsearchMovie] = useState([])

    console.log(query);

    const GetSearchMovie = async ()=>{

        try {
            const response = await axios.get(`search/movie?query=${query}`)
            console.log(response.data.results);
            setsearchMovie(response.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        GetSearchMovie()
    },[query])


  
  return (
    <div className="relative flex items-center justify-center w-full h-[2vw] mt-5 p-2 text-white">
            {/* search input  */}
            <div className="flex items-centerbg-gray-50 border border-zinc-500 rounded-lg shadow-md p-2 w-full max-w-[35rem]">
                <input
                value={query}
                    onChange={(e) => setquery(e.target.value)}
                    type="text"
                    className="px-4 py-2 w-full focus:outline-none bg-[#0f0b20]"
                    placeholder="Search for movies, tv shows ..."
                />
                {/* cross-icon */}
                  {query.length > 0 && (
                    <i onClick={()=> setquery("")} className='text-zinc-400 text-3xl ri-close-fill '></i>
                  )}
                <button className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                    <FaSearch className="w-6 h-6" />
                </button>

             
            </div>

            {/* Search logic */}
            <div className='absolute w-[34rem] text-white h-[50vh] top-[90%] z-10 mt-5 overflow-auto'>

                
              {searchMovie.map((d,i) => (
                 <Link  key={i} className=' rounded  p-10  bg-[#0f0b20] gap-5  hover:bg-[#6556cd] duration-300 font-semibold w-full flex justify-start items-center border-b-2  border-zinc-500'>
                        <img className=' z-10 w-[10vw] h-[7vw] bg-cover '
                         src={ 
                          d.backdrop_path || d.poster_path || d.file_path ? `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path || d.file_path}`:"https://img.freepik.com/premium-vector/no-photo-available-vector-icon-default-image-symbol-picture-coming-soon-web-site-mobile-app_87543-18055.jpg"
                        } 
                        alt="" />
                        <span>{d.title} </span>
                        </Link> 
              ))}  

       


        
            </div>
        </div>
  )
}

export default topnav