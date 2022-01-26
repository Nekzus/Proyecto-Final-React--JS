import { useContext } from "react";
import { userContext } from "../Context/UserContext";

export const useUser = () => {
    const userResult = useContext(userContext);
    const { user, users, error } = userResult;


    return {
        isLogged: Boolean(user),
        user,
        users,
        error,
    };
};
