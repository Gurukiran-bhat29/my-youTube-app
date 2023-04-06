import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  // Early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="mx-2 h-[100%] sticky top-[9%]">
      <div className="py-2.5 px-4 border-b-[1px] border-gray-300">
        <ul className="text-center">
          <Link to='/' className="flex">
            <img className="w-8 h-8" alt='Home' src='https://cdn-icons-png.flaticon.com/512/25/25694.png' />
            <li className="py-2 px-4 text-gray-800">Home</li>
          </Link>
          <li className="py-2 text-gray-800">Shorts</li>
          <li className="py-2 text-gray-800">Videos</li>
          <li className="py-2 text-gray-800">Live</li>
        </ul>
      </div>
      <div className="py-2.5 px-4 border-b-[1px] border-gray-300">
        <p className="font-bold py-1">Subscriptions</p>
        <ul className="text-center">
          <li className="py-2 text-gray-800">Music</li>
          <li className="py-2 text-gray-800">Sports</li>
          <li className="py-2 text-gray-800">Gaming</li>
          <li className="py-2 text-gray-800">Movies</li>
        </ul>
      </div>
      <div className="py-2.5 px-4">
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