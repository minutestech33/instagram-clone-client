import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { DesignContext } from '../context/DesignContent'

function Header() {
    const {setShowSwitch} = useContext(DesignContext)
    return (
        <div className='w-full h-full flex justify-between items-center px-3'>
            <NavLink to={"/"} className='text-xl font-semibold font-lobster text-zinc-100'>Instagram</NavLink>
            <div className='flex items-center gap-3'>
                <div onClick={() => setShowSwitch(true)} className='flex items-center gap-2 bg-zinc-800 px-3 py-2 rounded-md active:scale-95'>
                    <p className='text-sm font-semibold text-zinc-100'>shuvopal89</p>
                    <FontAwesomeIcon
                        icon={faAngleDown}
                        className='text-sm text-zinc-100'
                    />
                </div>
                <FontAwesomeIcon
                    icon={faHeart}
                    className='text-2xl text-zinc-100 hover:scale-110 active:scale-95'
                />
            </div>
        </div>
    )
}

export default Header
