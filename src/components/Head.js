import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  const getSeachSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const jsonData = await data.json();
    setSuggestions(jsonData[1]);
  }

  useEffect(() => {
    const timer = setTimeout(() => getSeachSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col p-5 shadow-xl justify-between bg-pink-100 sm:bg-blue-700 md:bg-purple-400">
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
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="p-2 text-white text-sm rounded-xl hover:bg-green-100 hover:text-black"
        >
          Search
        </button>
        <ul>
          {suggestions.map((suggestion) => <li>{suggestion}</li>)}
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