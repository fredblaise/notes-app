import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import MainContent from "./components/MainContent";
import StaticSidebar from "./components/StaticSidebar";
import SidebarContent from "./components/SidebarContent";
import InitialModal from './components/InitialModal';
import Navbar from "./components/Navbar";

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: nanoid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
      charCount: 0,
      wordCount: 0,
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  return (
    <>
      <InitialModal />
      <div className="[min-height:100svh;] grid grid-cols-3 grid-rows-[auto_1fr)] gap-4 p-4 pt-20 w-full m-auto max-w-7xl">
        <Navbar
          notes={notes}
          onAddNote={onAddNote}
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
        <StaticSidebar>
          <SidebarContent
            notes={notes}
            onAddNote={onAddNote}
            onDeleteNote={onDeleteNote}
            activeNote={activeNote}
            setActiveNote={setActiveNote}
          />
        </StaticSidebar>
        <MainContent
          activeNote={getActiveNote()}
          onUpdateNote={onUpdateNote}
        />
      </div>
    </>
  );
}

export default App;