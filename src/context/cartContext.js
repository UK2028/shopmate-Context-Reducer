import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const initialState = {
    total: 0,
    cartList: []
}

const cartContext = createContext(initialState);

export const CartProvider = ({children}) => {

    const [state,dispatch] = useReducer(cartReducer,initialState);

    const addToCart = (product) => {
        const updatedCartList = state.cartList.concat(product);
        const updatedTotal = state.total + product.price;
        dispatch({
            type: "ADD_TO_CART",
            payload:{
                products: updatedCartList,
                amount: updatedTotal
            }
        });
    }

    const removeFromCart = (product) => {
        const updatedCartList = state.cartList.filter(item => item.id !==product.id);
        const updatedTotal = state.total - product.price;
        dispatch({
            type: "REMOVE_FROM_CART",
            payload:{
                products: updatedCartList,
                amount: updatedTotal
            }
        });
    }

    const value={
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart
    }

    return (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    )
}

export const useCart = () => useContext(cartContext);