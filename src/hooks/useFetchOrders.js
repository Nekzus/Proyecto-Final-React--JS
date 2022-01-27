/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import db from '../Firebase/config_firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useUser } from "./useUser";

export const useFetchOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isMounted, setIsMounted] = useState(false);
    const { user } = useUser("")

    const fetchReadAllOrders = () => {
        setLoading(true);
        const collectionRef = collection(db, 'orders');
        const q = query(collectionRef, orderBy('date', 'desc'));
        const unsub = onSnapshot(q, (snapshot) => {
            setTimeout(() => {
                try {
                    if (isMounted) {
                        const results = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                        const userDB = results.filter(order => order.buyer.email === user.email);
                        setOrders(userDB);
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