import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../Firebase/config_firebase';
import { createDataDB } from '../Firebase/functions';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import db from '../Firebase/config_firebase';

export const userContext = createContext();
const { Provider } = userContext;

const UserContext = ({ children }) => {
    const [user, setUser] = useState("");
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isMounted, setIsMounted] = useState(false);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = () => {
        return signOut(auth);
    };
    
    const userRegisterData = (userName, email) => {
        const buyer = {
            name: userName,
            email: email,
        }
        createDataDB('users', buyer);
    };

    useEffect(() => {
        setIsMounted(true);
        if(isMounted) {
        const collectionRef = collection(db, 'users');
        const q = query(collectionRef, orderBy('email', 'asc'));
        const unsub = onSnapshot(q, (snapshot) => {
            try {
                    const results = snapshot.docs.map(doc => (doc.data()));
                    const userDB = results.find(users => users.email === user.email);
                    setUsers(userDB);
                
            } catch (error) {
                setError(error);
            }
            return unsub;
        }); 
        }
        return () => {
            setIsMounted(false);
            setUsers([]);
        }
    }, [user, isMounted]);

    useEffect(() => {
        setIsMounted(true);
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            isMounted && setUser(currentUser);
        });
        return () => {
            setIsMounted(false);
            unsubscribe();
        }
    }, [isMounted]);

    const valueContext = {
        signUp,
        logIn,
        logOut,
        user,
        users,
        userRegisterData,
        error,
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