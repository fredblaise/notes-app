import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import MainContent from "./components/MainContent";
import StaticSidebar from "./components/StaticSidebar";
import SlidingSidebar from "./components/SlidingSidebar";
import SidebarContent from "./components/SidebarContent";
import InitialModal from './components/InitialModal';

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
    <div className="[height:100dvh;] w-full max-w-7xl m-auto grid grid-rows-1 grid-cols-3 gap-4 p-4">
      <InitialModal />
      <StaticSidebar>
        <SidebarContent
          notes={notes}
          onAddNote={onAddNote}
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
      </StaticSidebar>
      <SlidingSidebar>
        <SidebarContent
          notes={notes}
          onAddNote={onAddNote}
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
      </SlidingSidebar>
      <MainContent
        activeNote={getActiveNote()}
        onUpdateNote={onUpdateNote}
      />
    </div>
  );
}

export default App;