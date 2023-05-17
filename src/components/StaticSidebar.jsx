import React from 'react'

const StaticSidebar = ({children}) => {
    return (
            <div className='row-span-1 col-span-1 hidden md:flex flex-col w-full overflow-hidden max-w-lg rounded-md p-4 gap-4 bg-zinc-200 dark:bg-zinc-700 dark:text-white'>
                {children}
            </div>
    )
}

export default StaticSidebar