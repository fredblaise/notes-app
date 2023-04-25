import ReactMarkdown from "react-markdown";

const Main = ({ activeNote, onUpdateNote }) => {
    const onEditField = (field, value) => {
        onUpdateNote({
            ...activeNote,
            [field]: value,
            lastModified: Date.now(),
        });
    };

    if (!activeNote) return <div className="no-active-note">No Active Note</div>;

    return (
        <div className="app-main w-full">
            <div className="app-main-note-edit flex flex-col">
                    <input
                        type="text"
                        id="title"
                        placeholder="Note Title"
                        value={activeNote.title}
                        onChange={(e) => onEditField("title", e.target.value)}
                        autoFocus
                        className="p-2"
                    />
                <textarea
                    id="body"
                    placeholder="Write your note here..."
                    value={activeNote.body}
                    rows={20}
                    onChange={(e) => onEditField("body", e.target.value)}
                    className="p-2"
                />
                {/* <div className={`app-main-note-preview h-full`}>
                    <h1 className="preview-title">{activeNote.title}</h1>
                    <ReactMarkdown className="markdown-preview">
                        {activeNote.body}
                    </ReactMarkdown>
                </div> */}
            </div>
        </div>
    );
};

export default Main;