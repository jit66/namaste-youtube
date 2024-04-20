import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion , setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
   
  const timer =   setTimeout(() => {
    if(searchCache[searchQuery]){
      setSuggestions(searchCache[searchQuery])
    }else {
      getSearchSuggestions()
    }
  },200);

  return () => {
    clearTimeout(timer);
  }
  }, [searchQuery]);

  const getSearchSuggestions = async() => {
    // console.log("api",searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery)
    const json = await data.json();
    setSuggestions(json[1])
    // console.log(json)

    //update cache

    dispatch(
      cacheResults({
      [searchQuery] : (json[1])
    }));
  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 m-1  first-letter:justify-center shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-5 cursor-pointer"
          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-5 mx-1"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="youtube-logo"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
        <input
          className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full "
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={()=> setShowSuggestions(true)}
          onBlur={()=> setShowSuggestions(false)}
        />
        <button className="border border-gray-400 p-2 rounded-tr-full rounded-br-full px-5 py-2 bg-gray-100">
          🔍
        </button>
      </div>
      {showSuggestions && 
      <div className="fixed bg-white  py-4 px-2 w-[42rem] rounded-md border border-gray-200">
          <ul>
            {suggestion.map((s)=> 
            <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍 {s}</li>
            )}
            
          </ul>
          </div>
          }
      </div>
      <div className="col-span-1">
        <img
          className="h-6"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Eo_circle_deep-orange_white_letter-j.svg/2048px-Eo_circle_deep-orange_white_letter-j.svg.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
