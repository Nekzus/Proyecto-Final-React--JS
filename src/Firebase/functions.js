//** FUNCIONES FIREBASE **/
import db from './config_firebase';
import { collection, getDocs, onSnapshot, orderBy, query, where } from 'firebase/firestore';


//**LEER DATOS EN DB */
export const readDataDB = (setCollection, setStatus, orderCamp, order) => {
    const collectionRef = collection(db, setCollection);
    const q = query(collectionRef, orderBy(orderCamp, order));
    const unsub = onSnapshot(q, (snapshot) => {
        setTimeout(() => {
        setStatus(snapshot.docs.map(doc => (doc.data())))
        return unsub;
        }, 2000);
    })
};

//**BUSCAR ITEM EN DB */
export const searchItemDB = async (setCollection, id, setStatus) => {
    const collectionRef = collection(db, setCollection);
    const q = query(collectionRef, where('id', '==', Number(id)));
    const snapshot = await getDocs(q);
    setTimeout(() => {
    const results = snapshot.docs.map(doc => (doc.data()));
    return setStatus(results);
    }, 2000);
};

//**FILTRAR DATOS EN DB */
export const filterDataDB = async (setCollection, setCamp, id, setStatus) => {
    const collectionRef = collection(db, setCollection);
    const q = query(collectionRef, where(setCamp, 'array-contains', Number(id)));
    const snapshot = await getDocs(q);
    setTimeout(() => {
    const results = snapshot.docs.map(doc => (doc.data()));
    return setStatus(results);
    }, 2000);
};


