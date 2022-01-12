/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useCheckStock = (cart, items, handleCheckout) => {
    const [stockLow, setStockLow] = useState([])
    const [stockOk, setStockOk] = useState([])
    const [withStock, setWithStock] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const checkStock = (handleCheckout) => {
        if (handleCheckout && cart.length > 0 && items.length > 0) {
            const preItemStock = cart.map(product => {
                const item = items.find(item => item.id === product.id);
                if (item.stock < product.quantity) {
                    return { ...product, stock_Low: true, stock: item.stock };
                } else {
                    return { ...product, stock_Low: false, stock: item.stock };
                }
            });
            const preStockLow = preItemStock.filter(item => item.stock_Low === true);
            const preStockOk = preItemStock.filter(item => item.stock_Low === false);
            setStockLow(preStockLow);
            setStockOk(preStockOk);
            const preWithStock = cart.every(product => {
                const item = items.find(item => item.id === product.id);
                return item.stock >= product.quantity;
            });
            setWithStock(preWithStock);
        }
    };
    useEffect(() => {
        setIsMounted(true);
        isMounted && checkStock(handleCheckout);
        return () => {
            setIsMounted(false);
        };
    }, [cart, items, handleCheckout, isMounted]);

    return [withStock, stockLow, stockOk];
};







