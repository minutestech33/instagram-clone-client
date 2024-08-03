import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function ProfileRoute({ title, icon, link }) {
    const pathname = useLocation().pathname;
    return (
        <Link to={link} className={`w-max active:text-zinc-600 flex items-center gap-2 py-4 border-t ${pathname === link ? 'border-zinc-100 text-zinc-100' : 'border-black text-zinc-400'}`}>
            <FontAwesomeIcon
                icon={icon}
                className='text-xs'
            />
            <p className='text-xs font-medium tracking-wide'>{title}</p>
        </Link>
    )
}

export default ProfileRoute
