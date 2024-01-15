// NoteList.js

import React from "react";

const NoteList = ({ notes }) => {
  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index} style={{ backgroundColor: note.color }}>
          {note.text}
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
