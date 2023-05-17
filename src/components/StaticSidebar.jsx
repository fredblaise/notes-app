import React from 'react'

const StaticSidebar = ({children}) => {
    return (
        <div className='h-full w-[calc(100%/3)] hidden md:block'>
            <div className='box-border h-full w-full max-w-lg rounded-md p-4 dark:bg-zinc-800 dark:text-white overflow-hidden'>
                {children}
            </div>
        </div>
    )
}

export default StaticSidebar