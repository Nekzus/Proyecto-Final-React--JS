/* eslint-disable react-hooks/exhaustive-deps */
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import db from '../Firebase/config_firebase';
import { useContext, useEffect, useState } from "react";
import { userContext } from "../Context/UserContext";

export const useUser = () => {
    const userResult = useContext(userContext);
    const { user } = userResult;
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const collectionRef = collection(db, 'users');
        const q = query(collectionRef, orderBy('email', 'asc'));
        const unsub = onSnapshot(q, (snapshot) => {
            try {
                    const results = snapshot.docs.map(doc => (doc.data()));
                    const userDB = results.find(users => users.email === user.email);
                    isMounted && setUsers(userDB);
                
            } catch (error) {
                setError(error);
                console.log('error consulta usuarios');
            }
            return unsub;
        });
    
        return () => {
            setIsMounted(false);
            setUsers([]);
        }
    }, [user, isMounted]);

    return {
        isLogged: Boolean(user),
        user,
        users,
        error,
    };
};
