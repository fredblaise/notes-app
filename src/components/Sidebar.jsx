const Sidebar = ({
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote,
}) => {

    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

    return (
        <div className="app-sidebar hidden md:block">
            <div className="app-sidebar-header">
                <h1 className="text-3xl font-semibold">Notes</h1>
                <button className="px-4 text-blue-500 text-3xl" onClick={onAddNote}>+</button>
            </div>
            <div className="app-sidebar-notes">
                {sortedNotes.map(({ id, title, body, lastModified }, i) => (
                    <div
                        className={`app-sidebar-note ${id === activeNote && "active"}`}
                        onClick={() => setActiveNote(id)}
                    >
                        <div className="sidebar-note-title">
                            <strong>{title}</strong>
                            <button onClick={(e) => onDeleteNote(id)}>Delete</button>
                        </div>

                        <p>{body && body.substr(0, 100) + "..."}</p>
                        <small className="note-meta">
                            Last Modified{" "}
                            {new Date(lastModified).toLocaleDateString("en-GB", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </small>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Sidebar;