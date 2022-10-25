import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEmptyNote, creatingNewNote, setActiveNote, setNote } from "./";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(creatingNewNote());

    // uid para guarda en firestore
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id; // le damos la propiedad a esa nota

    //! dispatch
    dispatch(addNewEmptyNote(newNote));
    // dispatch(activarNote)
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    // uid para guarda en firestore
    const { uid } = getState().auth;
    if (!uid) throw new Error("EL UID DEL USUARIO NO EXISTE");
    const notesAdd = await loadNotes(uid)
    dispatch(setNote(notesAdd));
  };
};
