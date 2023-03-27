import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  // Early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="shadow-lg">
      <div className="p-2.5 border-b-2 border-gray-400">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
      </div>
      <div className="p-2.5 border-b-2 border-gray-400">
        <p className="font-bold">Subscriptions</p>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
      <div className="p-2.5">
        <p className="font-bold">Watch Later</p>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar;