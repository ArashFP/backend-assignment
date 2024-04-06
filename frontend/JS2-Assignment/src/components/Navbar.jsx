import { Link, NavLink } from "react-router-dom";
import { GrTechnology } from "react-icons/gr";
import { IoCartSharp } from "react-icons/io5";
import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {


  const { totalQuantity } = useSelector(state => state.shoppingCart)


  return (
    <nav className="bg-blue-950 py-8 relative">
      <ul className="flex justify-between items-center mx-5">
        <div className="flex gap-5">
          <li><NavLink className="text-white [&.active]:underline" to="/">Home</NavLink></li>
          <li><NavLink className="text-white [&.active]:underline" to="/products">Products</NavLink></li>
          <li><NavLink className="text-white [&.active]:underline" to="/about">About Us</NavLink></li>
          <li><NavLink className="text-white [&.active]:underline" to="/contact">Contact Us</NavLink></li>
        </div>
        <ul className="flex gap-5">
          <li className="relative">
            { totalQuantity > 0 && <div className="absolute bg-red-600 -right-4 w-4 h-4 items-center flex justify-center rounded-full z-10">
              <p className="text-xs"> { totalQuantity }</p>
            </div>}
            <Dropdown>
              <IoCartSharp className="flex cursor-pointer" size="1.5em" />
            </Dropdown>
          </li>
          <li><NavLink className="text-white [&.active]:underline" to="/private">Account</NavLink></li>
          <li className="place-self-end px-5 bg-blue-800 ml-2 text-white rounded-lg"><Link to="/auth/login">Log in</Link></li>
          <li className="place-self-end px-5 bg-blue-800 mr-2 text-white rounded-lg"><Link to="/auth/register">Register</Link></li>
        </ul>
      </ul>
      <div className="flex items-center text-center absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
        <p className="text-3xl underline text-white">Tech</p>
        <GrTechnology className="text-white" size="4em"/>
        <p className="text-3xl underline text-white">Hub</p>
      </div>
    </nav>
  )
}

export default Navbar;
