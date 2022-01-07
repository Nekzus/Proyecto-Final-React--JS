//** FUNCIONES FIREBASE **/
import db from './config_firebase';
import { collection, getDocs, query, where, addDoc, doc, updateDoc } from 'firebase/firestore';


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





