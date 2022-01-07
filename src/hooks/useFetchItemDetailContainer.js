/* eslint-disable react-hooks/exhaustive-deps */
//**HOOK PARA LOGICA CONSULTA FETCH DETALLE POR PELICULA  */
import { useEffect, useState } from "react";
import db from '../Firebase/config_firebase';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

export const useFetchItemDetailContainer = (params) => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState([false]);
    const [isMounted, setIsMounted] = useState(false);

    const fetchReadItem = () => {
        setLoading(true);
        const collectionRef = collection(db, 'movies');
        const q = query(collectionRef, where('id', '==', Number(params)));
        const unsub = onSnapshot(q, (snapshot) => {
            setTimeout(() => {
                const result = snapshot.docs.map(doc => (doc.data()));
                setItem(result);
                setLoading(false);
                return unsub;
            }, 2000);
        })
    };
    useEffect(() => {
        setIsMounted(true);
        isMounted && fetchReadItem();
        return () => {
            setIsMounted(false);
        }
    }, [isMounted]);
    
    return [item, loading];
};
