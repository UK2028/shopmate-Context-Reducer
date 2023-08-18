import { useCart } from "../context/cartContext"

export const Card = ({item}) => {

  const { cartList, addToCart, removeFromCart } = useCart();
  const itemAdded = cartList.some(ele => item.id === ele.id);

  return (
    
<div className="w-[23rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 ">
    <div>
        <img className=" min-h-[16rem]" src={item.image} alt="product" />
    </div>
    <div className=" py-5 ">
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text- mb-5">{item.name}</h5>
        <div className="flex items-center justify-between">
            <span className="text-xl font-medium text-gray-900 dark:text-white">${item.price}</span>
            {itemAdded ?
            <button onClick={() => {removeFromCart(item)}} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove</button> :
            <button onClick={() => {addToCart(item)}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>}
        </div>
    </div>
</div>

  )
}
