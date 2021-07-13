import React from 'react';
const Note = ({ note, handleClick }) => {
    return (
      <li className="note">
        {note.content}
        <strong> {note.important ? "important" : ""}</strong>
        <button onClick={handleClick}>{note.important ? 'make not important':'make important'}</button>
      </li>
    );
  };

  export default Note;