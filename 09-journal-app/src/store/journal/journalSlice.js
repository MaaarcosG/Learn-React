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
    },
    setNote: (state, action) => {
        state.notes = action.payload;
    },
    setSaving: (state) => {},
    setUpdateNote: (state, action) => {},
    deleteNoteById: (state, action) => {},
  },
});

export const {
  creatingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNote,
  setSaving,
  setUpdateNote,
  deleteNoteById,
} = journalSlice.actions;
