export const cartReducer = (cart, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return {
                ...cart,
                items: [...cart.items, action.payload]
            }
            // return [...cart, action.payload];
        case "REMOVE_FROM_CART":
            return cart.filter((product) => product.id === action.payload);
        case "UPDATE_CART":
            return action.payload;
        default:
            return cart;

    }
}