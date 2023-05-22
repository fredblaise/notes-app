import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function SlidingSidebar({ children }) {
    let [isOpen, setIsOpen] = useState(false)
    
    function closeModal() {
        setIsOpen(false)
    }
    
    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="flex items-center justify-center md:hidden">
                <button
                    type="button"
                    onClick={openModal}
                    className="text-sm font-medium text-white aspect-square focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>

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
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex items-center h-full p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="translate ease-out duration-300"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="translate ease-in duration-200"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="flex flex-col w-3/4 h-full max-w-md gap-4 p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl dark:bg-zinc-700 dark:text-white">
                                    {children}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
