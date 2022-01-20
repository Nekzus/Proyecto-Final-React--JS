import { useContext } from "react";
import { userContext } from "../Context/UserContext";


export const useUser = () => {
    const userResult = useContext(userContext);
    const { user } = userResult;


    user && console.log('user', user.email);


    return {
        isLogged: Boolean(user),
        user,
    }
};

