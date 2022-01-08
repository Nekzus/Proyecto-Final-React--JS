/* eslint-disable react-hooks/exhaustive-deps */
//**HOOK PARA LOGICA CONSULTA FETCH PELICULAS / X CATEGORIA  */
import { useEffect, useState } from "react";
import db from '../Firebase/config_firebase';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';

export const useFetchItemListContainer = (params) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const fetchReadAllItems = () => {
        setLoading(true);
        const collectionRef = collection(db, 'movies');
        const q = query(collectionRef, orderBy('vote_average', 'desc'));
        const unsub = onSnapshot(q, (snapshot) => {
            setTimeout(() => {
                const results = snapshot.docs.map(doc => (doc.data()));
                setItems(results);
                setLoading(false);
                return unsub;
            }, 2000);
        })
    };
    const fetchReadFilterItems = () => {
        setLoading(true);
        const collectionRef = collection(db, 'movies');
        const q = query(collectionRef, where('genre_ids', 'array-contains', Number(params)));
        const unsub = onSnapshot(q, (snapshot) => {
            setTimeout(() => {
                const results = snapshot.docs.map(doc => (doc.data()));
                setItems(results);
                setLoading(false);
                return unsub;
            }, 2000);
        })
    };
    useEffect(() => {
        setIsMounted(true);

        (!params)
            ? isMounted && fetchReadAllItems()
            : isMounted && fetchReadFilterItems();
        return () => {
            setIsMounted(false);
        }
    }, [params, isMounted]);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    return [items, loading];
};
