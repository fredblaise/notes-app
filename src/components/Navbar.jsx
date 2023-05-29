import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import SlidingSidebar from "./SlidingSidebar";
import SidebarContent from "./SidebarContent";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) {
    return (
        <Disclosure as="nav" className="fixed top-0 left-0 w-full h-16 bg-gray-800">
            {({ open }) => (
                <>
                    <div className="w-full px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between w-full h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                                {/* Mobile menu button*/}
                                <SlidingSidebar>
                                    <SidebarContent
                                        notes={notes}
                                        onAddNote={onAddNote}
                                        onDeleteNote={onDeleteNote}
                                        activeNote={activeNote}
                                        setActiveNote={setActiveNote}
                                    />
                                </SlidingSidebar>
                            </div>
                            <div className="flex items-center justify-center flex-1 md:items-stretch">
                                <div className="flex items-center flex-shrink-0">
                                    <p className="text-4xl text-white">
                                        NOTES
                                    </p>
                                </div>
                            </div>
                            {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">

                                * Profile dropdown *
                                <Menu as="div" className="relative ml-3 disabled">
                                    <div>
                                        <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div> */}
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}
