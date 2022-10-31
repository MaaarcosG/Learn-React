import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { filesUpload } from "../../helpers/filesUpload";
import { loadNotes } from "../../helpers/loadNotes";
import {
  addNewEmptyNote,
  creatingNewNote,
  setActiveNote,
  setNote,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} from "./";

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
    const notesAdd = await loadNotes(uid);
    dispatch(setNote(notesAdd));
  };
};

export const startSavingNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    // traemos el uid del usuario
    const { uid } = getState().auth;
    // traemos la nota activa
    const { active: note } = getState().journal;

    const noteToFirestore = { ...note };
    delete noteToFirestore.id; // eliminar una propiedad de lo que traemos

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToFirestore, { merge: true });

    dispatch(updateNote(note));
  };
};

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving());
    // console.log(files)

    // await filesUpload(files[0]);
    const fileUploadPromise = [];
    for (const file of files) {
      fileUploadPromise.push(filesUpload(file));
    }

    const photoUrls  = await Promise.all(fileUploadPromise);
    // console.log(photoUrls)
    dispatch(setPhotosToActiveNote(photoUrls))


  };
};
