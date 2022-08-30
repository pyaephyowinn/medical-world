import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../icons/logo hori.svg";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-12 items-center mx-4 md:mx-8 pb-8 md:pb-12 sm:pt-4">

      <div className="col-span-4">
        <input
          className="hidden border-none sm:block rounded-lg w-36 md:w-56 text-sm p-2 placeholder:text-blue-300"
          type="text"
          placeholder="SEARCH ITEMS"
        />
      </div>

      <div className="col-span-4 flex justify-center">
        <Link to="/">
          <Logo className="w-32 sm:w-48" />
        </Link>
      </div>

      <div  className="lg:col-start-10 col-span-4 lg:col-span-3">
        <div className="flex justify-end md:hidden">
          <AiOutlineMenu className="text-2xl sm:text-3xl" />
        </div>

        <ul className="hidden md:flex justify-between items-center">
          <li className="font-medium">
            <NavLink to="#link">Cart</NavLink>
          </li>
          <li className="font-medium">
            <NavLink to="#link">Orders</NavLink>
          </li>
          <li className="font-medium">
            <NavLink to="#link">Notifications</NavLink>
          </li>
          <li className="font-medium">
            <NavLink to="#link">Profile</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
