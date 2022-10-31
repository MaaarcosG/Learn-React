import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSaving: false,
  messageSaved: "",
  notes: [],
  active: null,
  // active: {
  //     id: "ABC123",
  //     title: "",
  //     body: "",
  //     date: 1234567,
  //     imageUrls: []
  // }
};

export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    creatingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = "";
    },
    setNote: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
      // TODO: MENSAJE DE ERROR
    },
    updateNote: (state, action) => {
      //payload: note
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });
      //TODO: MOSTRAR MENSAJE DE ACTUALIZACION
      state.messageSaved = `${action.payload.title}, actualizada correctamente`;
    },
    setPhotosToActiveNote: (state, action) => {
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
      state.isSaving = false
    },
    deleteNoteById: (state, action) => {},
  },
});

export const {
  creatingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNote,
  setSaving,
  updateNote,
  deleteNoteById,
  setPhotosToActiveNote
} = journalSlice.actions;
