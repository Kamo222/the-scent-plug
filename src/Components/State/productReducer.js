export const productReducer = (products, action) => {
    switch(action.type){
        case "UPDATE_PRODUCTS":
            return action.payload;
        default:
            return products;

    }
}