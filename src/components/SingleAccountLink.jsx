import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function SingleAccountLink({ icon, title, link }) {
    const pathname = useLocation().pathname;
    return (
        <Link to={link} className={`flex items-center pl-1 py-3 ${pathname === link ? 'bg-zinc-800' : ''} hover:bg-zinc-800 rounded-md`}>
            <FontAwesomeIcon
                icon={icon}
                className='text-lg text-zinc-200 w-12'
            />
            <p className='text-sm font-normal text-zinc-200'>{title}</p>
        </Link>
    )
}

export default SingleAccountLink
