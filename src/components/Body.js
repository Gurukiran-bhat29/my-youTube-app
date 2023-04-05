import { Outlet } from "react-router-dom";
import Head from "./Head";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <>
      <Head />
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </>
  )
}

export default Body;