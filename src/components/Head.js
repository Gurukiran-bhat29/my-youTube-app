import { useState, useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  YOUTUBE_KEYWORD_API_PART1,
  YOUTUBE_KEYWORD_API_PART2,
  YOUTUBE_SEARCH_SUGGESTIONS_API
} from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setshowSuggestions] = useState(true);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  const getSeachSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const jsonData = await data.json();
    setSuggestions(jsonData[1]);

    dispatch(
      cacheResults({
        [searchQuery]: jsonData[1]
      })
    )
  }

  const onSelectSuggestion = (e) => {
    setSearchQuery(e.target.innerText)
    setshowSuggestions(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => {

      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      } else {
        getSeachSuggestions();
      }
    }, 200);


    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col p-5 shadow-xl sticky top-0 justify-between bg-pink-100 sm:bg-blue-700 md:bg-purple-400">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-12 cursor-pointer"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC3wMxCwXBR4fAujFYPsrQTgWtn1820Q1l3QmnmU&s"
        />
        <img
          className="h-12"
          alt="youtube"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
        />
      </div>
      <div className="col-span-10 text-center">
        <input
          value={searchQuery}
          className="p-2 w-1/2 rounded-3xl"
          type="text"
          onFocus={() => setshowSuggestions(true)}
          // onBlur={() => setshowSuggestions(false)}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="p-2 text-white text-sm rounded-3xl hover:bg-green-100 hover:text-black"
        >
          Search
        </button>
        <ul className="bg-white mt-1 shadow-lg absolute w-1/3 left-[30.5%] text-left rounded-lg">
          {showSuggestions && suggestions.map((suggestion) => {
            return (
              <li className="flex p-2 cursor-pointer" onClick={onSelectSuggestion}>
                <img
                  className="w-6 h-6 mr-2"
                  alt="suggestion-icon"
                  src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
                />
                {suggestion}
              </li>
            )
          })}
        </ul>
      </div>
      <div className="col-span-2">
        <img
          className="h-12"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSYyNXOWAO3zkAU8IsCQ7ITRY1FxAnQq675gUmpbV_6A&s"
        />
      </div>
    </div>
  )
}

export default Head;