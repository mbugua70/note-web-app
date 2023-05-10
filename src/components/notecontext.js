import React, { useEffect } from "react";
import { createContext } from "react";
import { v4 as uuid } from "uuid";
export const NoteContext = createContext();

export const NoteContextProvider = (props) => {
  const [note, setNote] = React.useState([]);

  const handleUpdate = (id, title, details) => {
    const updatedNotes = note.map((note) =>
      note.id === id ? { ...note, title, details } : note
    );
    setNote(updatedNotes);
    localStorage.setItem("note", JSON.stringify(updatedNotes));
  };

  const removeNote = (id) => {
    console.log(localStorage.getItem(id));
    localStorage.removeItem(id);
    console.log(localStorage);
    setNote((prev) => prev.filter((note) => note.id !== id));
  };

  const addNote = (title, details) => {
    const id = uuid();
    const newnotesItems = {
      title,
      details,
      id,
    };
    setNote((prevNote) => [...prevNote, newnotesItems]);
    const storedNotes = JSON.parse(localStorage.getItem("note") || []);
    localStorage.setItem(
      "note",
      JSON.stringify([...storedNotes, newnotesItems])
    );
  };

  useEffect(() => {
    const updatedNote = localStorage.getItem("note");

    if (updatedNote) {
      try {
        setNote(JSON.parse(updatedNote));
        console.log("present");
        console.log(updatedNote);
      } catch (error) {
        console.log("no items ");
        console.error(error);
        setNote([]);
      }
    }
  }, []);

  return (
    <>
      <NoteContext.Provider value={{ note, addNote, removeNote, handleUpdate }}>
        {props.children}
      </NoteContext.Provider>
    </>
  );
};
