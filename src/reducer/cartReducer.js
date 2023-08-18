export const cartReducer = (state,action) => {

    const { type,payload } = action;

    switch(type){
        case "ADD_TO_CART":
            return { ...state, cartList: payload.products, total: payload.amount };
        
        case "REMOVE_FROM_CART":
            return { ...state, cartList: payload.products, total: payload.amount };
        
        default:
            throw new Error("NO MATCH CASE FOUND");
    }
}