import { Routes,Route } from "react-router-dom";
import { Home,Cart } from "../pages"

export const AllRoutes = ({items}) => {
  return (
    <Routes>
        <Route path="/" element={<Home items={items} title="Home/Shopping"/>} />
        <Route path="/cart" element={<Cart title="Cart/Shopping"/>} />
    </Routes>
  )
}
