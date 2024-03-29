import { collection, doc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotes = async (uid = "") => {
    if (!uid) throw new Error("EL UID DEL USUARIO NO EXISTE");

    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);
    const notes = [];
    docs.forEach(doc => {
        notes.push({
            id: doc.id,
            ...doc.data()})
    })
    //console.log(notes)
    return notes
};