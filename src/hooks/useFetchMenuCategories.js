/* eslint-disable react-hooks/exhaustive-deps */
//**HOOK PARA LOGICA CONSULTA FETCH CATEGORIAS */
import { useEffect, useState } from "react";
import db from '../Firebase/config_firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

export const useFetchMenuCategories = () => {
    const [categories, setCategories] = useState([]);
    const [isMounted, setIsMounted] = useState(false);

    const fetchReadAllCategories = () => {
        const collectionRef = collection(db, 'categories');
        const q = query(collectionRef, orderBy('name', 'asc'));
        const unsub = onSnapshot(q, (snapshot) => {
            setTimeout(() => {
                const results = snapshot.docs.map(doc => (doc.data()));
                setCategories(results);
                return unsub;
            }, 2000);
        })
    };

    useEffect(() => {
        setIsMounted(true);
        isMounted && fetchReadAllCategories();

        return () => {
            setIsMounted(false);
        }
    }, [isMounted]);

    return [categories];
};
