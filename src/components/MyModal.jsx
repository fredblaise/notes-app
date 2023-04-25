import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function MyModal({
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote,
}) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

    return (
        <>
            <button
                type="button"
                onClick={openModal}
                className="rounded-md shadow-2xl px-4 py-2 text-sm font-medium bg-blue-400 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
                Notes
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className='flex justify-between w-full'>
                                        <Dialog.Title
                                            as="h3"
                                            className="text-3xl font-medium leading-6 text-gray-900"
                                        >
                                            Notes
                                        </Dialog.Title>
                                        <div className="ml-10">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 text-sm font-medium text-red-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                X
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-2">
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
                                    
                                    <button className=" px-4 pb-3 rounded-full text-blue-500 text-3xl" onClick={onAddNote}>+</button>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
