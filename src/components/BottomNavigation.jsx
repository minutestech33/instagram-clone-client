import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCompass, faSquarePlus, faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'
import { DesignContext } from '../context/DesignContent'

function BottomIcon({ icon, link }) {
    return (
        <NavLink to={link} className='h-11 w-11 flex justify-center items-center rounded-md'>
            <FontAwesomeIcon
                icon={icon}
                className='text-2xl text-zinc-100 hover:scale-110 active:scale-95'
            />
        </NavLink>
    )
}

function BottomNavigation() {
    const {setShowCreatePost} = useContext(DesignContext) 
    return (
        <div className='w-full h-full flex justify-between items-center px-3'>
            <BottomIcon icon={faEnvelopeOpen} link={'/'} />
            <BottomIcon icon={faMagnifyingGlass} link={'/search'} />
            <FontAwesomeIcon
                icon={faSquarePlus}
                onClick={() => setShowCreatePost(true)}
                className='text-2xl text-zinc-100 hover:scale-110 active:scale-95'
            />
            <BottomIcon icon={faCompass} link={'/explore'} />
            <NavLink to={'/shuvopal89'}>
                <img src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" className='h-6 w-6 select-none rounded-full object-cover hover:scale-110 active:scale-95' alt="" />
            </NavLink>
        </div>
    )
}

export default BottomNavigation
