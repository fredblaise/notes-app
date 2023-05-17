import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function InitialModal() {
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-zinc-800  p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="font-medium leading-6 text-gray-900 dark:text-white"
                                    >
                                        Welcome!
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500 dark:text-gray-100">
                                            This notes app was written to demonstrate my ability to design a UI and work with local storage in a cohesive manner. The app was built with the following dependencies:<br/><br />
                                            <ul className='pl-4 list-disc'>
                                                <li>React + Vite</li>
                                                <li>Tailwind CSS</li>
                                                <li>React Markdown</li>
                                                <li>Headless UI</li>
                                            </ul><br />
                                            Please feel free to have a look around and create a few notes.
                                        </p>
                                    </div>

                                    <div className="mt-4 w-full flex justify-end">
                                        <button
                                            type="button"
                                            className="ml-auto inline-flex justify-center rounded-full transition hover:bg-blue-500 px-4 py-2 text-md font-medium text-blue-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
