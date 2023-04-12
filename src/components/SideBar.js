import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  // Early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="px-4 h-[100%] bg-white fixed lg:sticky top-[88px] sm:w-[25%] lg:w-auto">
      <div className="border-b-2 py-2.5 border-gray-300">
        <ul className="text-center">
          <Link to='/' className="flex bg-gray-300 p-2 justify-center items-center rounded-lg">
            <img className="w-8 h-8" alt='Home' src='https://cdn-icons-png.flaticon.com/512/25/25694.png' />
            <li className="text-gray-800 mx-4">Home</li>
          </Link>
          <li className="py-2 text-gray-800">Shorts</li>
          <li className="py-2 text-gray-800">Videos</li>
          <li className="py-2 text-gray-800">Live</li>
        </ul>
      </div>
      <div className="py-2.5 px-4 border-b-2 border-gray-300 text-center">
        <p className="font-bold py-1">Subscriptions</p>
        <ul>
          <li className="py-2 text-gray-800">Music</li>
          <li className="py-2 text-gray-800">Sports</li>
          <li className="py-2 text-gray-800">Gaming</li>
          <li className="py-2 text-gray-800">Movies</li>
        </ul>
      </div>
      <div className="py-2.5 px-4 text-center">
        <p className="font-bold py-1">Watch Later</p>
        <ul className="text-center">
          <li className="py-2 text-gray-800">Music</li>
          <li className="py-2 text-gray-800">Sports</li>
          <li className="py-2 text-gray-800">Gaming</li>
          <li className="py-2 text-gray-800">Movies</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar;