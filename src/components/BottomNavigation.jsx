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
                <img src="https://scontent.fspd3-1.fna.fbcdn.net/v/t39.30808-6/422864407_350092587789629_7234687580464905655_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHGK-pTFG3ZpjiRV_8toeMnboJPIWvt8cZugk8ha-3xxnUvL_73p1m0eegaBHbEBwRPSyATdphE32gGtT25Sb3d&_nc_ohc=M_HqYm_RkpgQ7kNvgGoWP8U&_nc_ht=scontent.fspd3-1.fna&oh=00_AYB6EdxAaILNVdgtnelvl_EspO6kejIKz55SXLMjJIxx5g&oe=6696B570" className='h-6 w-6 select-none rounded-full object-cover hover:scale-110 active:scale-95' alt="" />
            </NavLink>
        </div>
    )
}

export default BottomNavigation
