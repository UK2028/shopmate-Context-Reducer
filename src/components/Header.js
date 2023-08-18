import { Link, NavLink } from "react-router-dom";
import { useCart } from '../context/cartContext';
import Logo from "../assets/UK LOGO.jpg";

export const Header = () => {

  const { cartList } = useCart();

  const activeClass = "bg-gray-200 rounded py-2 pl-3 pr-4";
  const inactiveClass = "py-2 pl-3 pr-4";
  return (
    <header>
      <nav>
        <div className="max-w-screen-xl flex justify-between items-center mx-auto p-4 shadow-sm">
          <Link to="/">
            <div className="flex items-center">
              <img src={Logo} alt="Logo" className="h-12 mr-2"/>
              <span className="text-2xl">Shopping Cart</span>
            </div>
          </Link>
          <ul className="hidden sm:inline-flex flex flex-row justify-around items-center text-2xl space-x-4">
            <li><NavLink to="/" className={({isActive}) => isActive ? activeClass : inactiveClass}>Home</NavLink></li>
            <li><NavLink to="/cart" className={({isActive}) => isActive ? activeClass : inactiveClass}>Cart</NavLink></li>
          </ul> 
          <div className="text-2xl mr-5">
            <Link to="/cart">Cart:{cartList.length}</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
