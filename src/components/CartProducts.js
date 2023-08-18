import { useCart } from '../context/cartContext';

export const CartProducts = ({item}) => {

  const { removeFromCart } = useCart();

  return (
    <div className="p-4 flex justify-between items-center rounded-sm shadow gap-4 ">
        <img className="max-h-[8rem] hidden sm:block mr-2" src={item.image} alt="cart product" />
        <div className="w-[22rem] mr-2 text-start ">{item.name}</div>
        <div className="w-24 mr-2 ">${item.price}</div>
        <button onClick={() => removeFromCart(item)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove</button>
    </div>
  )
}
