// NoteApp.js

import React, { useState } from "react";
import NoteList from "./NoteList";
import "./App.css";

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [selectedColor, setSelectedColor] = useState("#ffffff"); // Default color

  const addNote = () => {
    if (newNote.trim() === "") return;

    const newNoteObj = {
      text: newNote,
      color: selectedColor,
    };

    setNotes([...notes, newNoteObj]);
    setNewNote("");
  };

  console.log(notes);

  return (
    <div className="container">
      <textarea
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Type your note..."
      />
      <div className="color_add">
        <div className="info" style={{ color: selectedColor }}>
          Renk Seç
        </div>
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <NoteList notes={notes} />
    </div>
  );
};

export default NoteApp;
