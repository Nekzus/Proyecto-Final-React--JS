/* eslint-disable react-hooks/exhaustive-deps */
//**HOOK PARA LOGICA CONSULTA FETCH ORDENES  */
import { useEffect, useState } from "react";
import db from '../Firebase/config_firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

export const useFetchOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isMounted, setIsMounted] = useState(false);

    const fetchReadAllOrders = () => {
        setLoading(true);
        const collectionRef = collection(db, 'orders');
        const q = query(collectionRef, orderBy('date', 'desc'));
        const unsub = onSnapshot(q, (snapshot) => {
            setTimeout(() => {
                try {
                    if (isMounted) {
                        const results = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                        setOrders(results);
                        setLoading(false);
                    }
                } catch (error) {
                    setError(error);
                    setLoading(false);
                    console.log('error consulta ordenes');
                }
                return unsub;
            }, 2000);
        })
    };

    useEffect(() => {
        setIsMounted(true);
        isMounted && fetchReadAllOrders();
        return () => {
            setIsMounted(false);
        }
    }, [isMounted]);

    return [orders, loading, error];
};