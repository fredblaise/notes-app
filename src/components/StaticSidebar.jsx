import React from 'react'

const StaticSidebar = ({children}) => {
    return (
            <div className='flex-col hidden w-full col-span-1 row-span-1 gap-4 p-4 overflow-x-hidden overflow-y-hidden bg-white rounded-md md:flex dark:bg-zinc-700 dark:text-white'>
                {children}
            </div>
    )
}

export default StaticSidebar