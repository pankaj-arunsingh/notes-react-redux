import React from "react";
import { createNote } from "../reducers/noteReducer";
import { useDispatch } from "react-redux";

export const NewNote = (props) => {
  const dispatch = useDispatch();

  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";
    dispatch(createNote(content));
  };

  return (
    <div>
      <form onSubmit={addNote}>
        <input name="note" placeholder="add note" />
        <button type="submit">add</button>
      </form>
    </div>
  );
};
