export const StateReducer = (state, action) => {

    const { user, products } = state;
    const { basket } = user;
    switch(action.type){

        case "ADD_TO_CART":

            const newState = {
                ...state,
                user: {
                    ...user,
                    basket: [...basket, action.payload]
                }
            }
            window.localStorage.setItem('state', JSON.stringify(newState))
            return (newState)
        default:
            return state;

    }
}