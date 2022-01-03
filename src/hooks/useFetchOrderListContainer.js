/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import db from '../Firebase/config_firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

export const useFetchOrderListContainer = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const fetchReadAllOrders = () => {
        setLoading(true);
        const collectionRef = collection(db, 'orders');
        const q = query(collectionRef, orderBy('date', 'desc'));
        const unsub = onSnapshot(q, (snapshot) => {
            setTimeout(() => {
                const results = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setOrders(results);
                setLoading(false);
                return unsub;
            }, 2000);
        })
    };

    useEffect(() => {
        setIsMounted(true);
        isMounted && fetchReadAllOrders();
        return () => {
            setIsMounted(false);
            console.log('cleanup useFetchOrderListContainer'); // TODO: remove
        }
    }, [isMounted]);

    return [orders, loading];
};