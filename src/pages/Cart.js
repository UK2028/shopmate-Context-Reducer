import { useCart } from '../context/cartContext';
import {CartProducts} from "../components"
import { useTitle } from "../hooks/useTitle";

export const Cart = ({ title }) => {

  const { total, cartList } = useCart();

  useTitle(title);

  return (
    <main className="max-w-screen-xl min-h-screen mx-auto mt-10">
      <h1 className="text-2xl text-center font-bold my-5">Cart:{cartList.length}/ ${total}</h1>
      <div className="flex flex-col gap-2">
        {cartList && cartList.map((item)=><CartProducts key={item.id} item={item} />)}
      </div>
    </main>
  )
}
