//** FUNCIONES FIREBASE **/
import db from './config_firebase';
import { collection, getDocs, onSnapshot, orderBy, query, where, addDoc, doc, updateDoc } from 'firebase/firestore';

//**READ DB **/
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

//**WRITE DB **/
//**CREAR DATO EN DB */
export const createDataDB = async (setCollection, data) => {
    const collectionRef = collection(db, setCollection);
    const docRef = await addDoc(collectionRef, data);
    return docRef;
};

//**ACTUALIZAR DATO EN DB */
export const updateDataDB = async (setCollection, id, data) => {
    const collectionRef = collection(db, setCollection);
    const q = query(collectionRef, where('id', '==', id));
    const snapshot = await getDocs(q);
    const docRef = doc(collectionRef, snapshot.docs[0].id);
    await updateDoc(docRef, data);
};

//**BORRAR DATO DB */
export const deleteDataDB = async (setCollection, id) => {
    const collectionRef = collection(db, setCollection);
    const docRef = doc(collectionRef, id);
    await docRef.delete();
};

export const readOrdersDB = async (setCollection, setStatus) => {
    const collectionRef = collection(db, setCollection);
    const q = query(collectionRef);
    const snapshot = await getDocs(q);
    const results = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    return setStatus(results);
};




