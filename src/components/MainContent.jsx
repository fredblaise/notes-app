import ReactMarkdown from "react-markdown";
import { useState } from 'react'

const MainContent = ({ activeNote, onUpdateNote }) => {
    const [showPreview, setShowPreview] = useState(false);

    function handleChange(event) {
        onEditField("body", event.target.value);
    }

    const onEditField = (field, value) => {
        onUpdateNote({
            ...activeNote,
            [field]: value,
            charCount: value.length,
            wordCount: value.trim().split(/\s+/).filter(Boolean).length,
            lastModified: Date.now(),
        });
    };

    let empty = "Nothing to see here...";

    if (!activeNote)
        return (
            <>
                <div className="row-span-1 col-span-3 md:col-span-2 grid place-items-center text-zinc-500">
                    <p className="text-5xl">No Active Note</p>
                </div>
            </>
        );

    return (
        <div className="row-span-1 col-span-3 md:col-span-2 flex flex-col justify-between">
            <div className="min-h-full flex-1 flex flex-col gap-4">
                <div className="flex justify-between gap-4">
                    <input
                        type="text"
                        id="title"
                        placeholder="Note Title"
                        value={activeNote.title}
                        onChange={(e) => onEditField("title", e.target.value)}
                        autoFocus
                        className="text-4xl w-full px-2 bg-zinc-200 dark:bg-zinc-700 dark:text-white dark:placeholder-gray-400 rounded-md"
                    />
                    <button onClick={() => setShowPreview(!showPreview)} className='hidden md:block font-semibold aspect-square p-2 h-20 transition dark:text-white dark:hover:bg-gray-500 hover:bg-gray-200 rounded-full'>
                        Show<br />{showPreview ? "Source" : "Preview"}
                    </button>
                    <button onClick={() => setShowPreview(!showPreview)} className='md:hidden font-semibold aspect-square p-2 h-12 bg-gray-500 text-white rounded-full'>
                        {showPreview ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                            </svg>
                        }
                    </button>
                </div>
                <textarea
                    id="body"
                    placeholder="Add some notes..."
                    value={activeNote.body}
                    rows="20"
                    onChange={handleChange}
                    className={`resize-none h-full w-full p-2 bg-zinc-200 dark:bg-zinc-700 dark:text-white dark:placeholder-zinc-400 rounded-md ${showPreview ? "hidden" : ""}`}
                />
                <div className={`${showPreview ? "" : "hidden"} dark:text-white break-words h-full p-2 overflow-y-scroll`}>
                    <ReactMarkdown >
                        {activeNote.body}
                    </ReactMarkdown>
                    <p className={`${activeNote.body ? "hidden" : "text-zinc-500"}`}>
                        Nothing to see here...
                    </p>
                </div>
                <p className="ml-auto dark:text-white">{activeNote.charCount} characters | {activeNote.wordCount} words</p>
            </div>
        </div>
    );
};

export default MainContent;