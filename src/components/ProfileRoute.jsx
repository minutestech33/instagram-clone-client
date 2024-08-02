import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function ProfileRoute({ title, icon, link }) {
    const pathname = useLocation().pathname;
    return (
        <Link to={link} className={`w-max flex items-center gap-2 py-3 border-t ${pathname === link ? 'border-zinc-100' : 'border-black'}`}>
            <FontAwesomeIcon
                icon={icon}
                className='text-xs text-zinc-400'
            />
            <p className='text-xs font-bold tracking-wide text-zinc-400'>{title}</p>
        </Link>
    )
}

export default ProfileRoute
