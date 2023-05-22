import React from 'react'

const SidebarContent = ({
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote,
}) => {
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified)

    return (
        <>
            <div className="flex flex-col h-full overflow-y-scroll divide-y divide-zinc-400 dark:divide-zinc-500">
                {sortedNotes.map(({ id, title, body, lastModified }, i) => (
                    <div
                        className={`flex justify-between w-full p-4 gap-2 cursor-pointer dark:text-white ${id === activeNote ? 'bg-zinc-200 dark:bg-zinc-800' : 'hover:bg-zinc-200 hover:dark:bg-zinc-800'} group`}
                        onClick={() => {
                            setActiveNote(id)
                        }}
                        key={i}
                    >
                        <div className="flex flex-col overflow-clip">
                            <strong>{title}</strong>
                            <p className="truncate">
                                {body}
                            </p>
                            <small className="text-zinc-800 dark:text-zinc-300">
                                Last Modified:{' '}
                                {new Date(lastModified).toLocaleDateString(
                                    'en-US',
                                    {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        hour12: true,
                                    }
                                )}
                            </small>
                        </div>

                        <div className='flex place-items-center'>
                            <button
                                onClick={(e) => onDeleteNote(id)}
                                className="md:hidden aspect-square rounded-full p-1 text-red-500 transition hover:scale-105 bg-red-500 max-sm:text-white md:bg-transparent md:hover:bg-red-500 md:hover:text-white group-hover:block"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="sticky top-0 w-full grid place-items-center max-sm:p-8">
                <button
                    className="rounded-full text-xl max-sm:text-2xl px-2 md:text-blue-500 transition hover:scale-105 hover:bg-blue-500 bg-blue-500 md:bg-transparent text-white hover:text-white"
                    onClick={onAddNote}
                >
                    + Add Note
                </button>
            </div>
        </>
    )
}

export default SidebarContent
