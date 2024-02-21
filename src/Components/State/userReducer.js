export const userReducer = (user, action) => {
    switch(action.type){
        case "LOAD_USER":
            return action.payload;
        default:
            return user;

    }
}