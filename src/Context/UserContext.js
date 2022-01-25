import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import { auth } from '../Firebase/config_firebase';
import { createDataDB } from '../Firebase/functions';


export const userContext = createContext();
const { Provider } = userContext;

const UserContext = ({ children }) => {
    const [user, setUser] = useState("");

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = () => {
        return signOut(auth);
    };
    const googleSignIn = () => {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    };
    const userRegisterData = (userName, email) => {
        const buyer = {
            name: userName,
            email: email,
        }
        createDataDB('users', buyer);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const valueContext = {
        signUp,
        logIn,
        logOut,
        googleSignIn,
        user,
        userRegisterData,
    };

    return (
        <div>
            <Provider value={valueContext}>
                {children}
            </Provider>
        </div>
    )
};
export default UserContext;