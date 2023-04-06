import { useState, useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams, useNavigate } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setshowSuggestions] = useState(false);
  const [hoverSuggestion, setHoverSuggestion] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const onSelectSuggestion = (e, buttonFlag) => {
    const event = !buttonFlag ? e.target.innerText : searchQuery;

    setSearchQuery(event);
    setshowSuggestions(false);

    navigate({
      pathname: "results",
      search: createSearchParams({
        search_query: e.target.innerText
      }).toString()
    });
  }

  useEffect(() => {
    const timer = setTimeout(() => {

      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      } else {
        getSeachSuggestions();
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col p-5 shadow-xl sticky top-0 bg-white">
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
      <div className="col-span-10">
        <div className="flex justify-center">
          <input
            value={searchQuery}
            placeholder='Search'
            className="py-2.5 px-4 w-1/2 rounded-l-3xl border border-gray-500"
            type="text"
            onFocus={() => setshowSuggestions(true)}
            onBlur={() => !hoverSuggestion && setshowSuggestions(false)}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="px-6 text-white text-sm rounded-r-3xl bg-white hover:text-black border border-gray-500"
            onClick={(e) => onSelectSuggestion(e, true)}
          >
            <img
              className="w-6 h-6"
              alt="search-icon"
              src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
            />
          </button>
        </div>
        <ul
          className="bg-white mt-1 shadow-lg absolute w-1/3 left-[30.5%] text-left rounded-lg"
          onMouseOver={() => setHoverSuggestion(true)}
          onMouseOut={() => setHoverSuggestion(false)}
        >
          {showSuggestions && suggestions.map((suggestion, index) => {
            return (
              <li
                key={suggestion + index}
                className="flex p-2 cursor-pointer hover:bg-gray-100"
                onClick={onSelectSuggestion}
              >
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