import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

function SingleMenuLink({ icon, title, link }) {
    return (
        <NavLink to={link} className={`group w-full max-[1350px]:w-max flex items-center gap-1 hover:cursor-pointer hover:bg-zinc-800 rounded-lg active:opacity-50`}>
            <div className={`h-12 w-12 rounded-lg flex justify-center items-center`}>
                {
                    title === 'Profile' ? (
                        <img src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" className='h-6 w-6 select-none rounded-full object-cover group-hover:scale-110 transition-all group-active:scale-95' alt="" />
                    ) : (
                        <FontAwesomeIcon
                            icon={icon}
                            className='text-2xl text-zinc-100 group-hover:scale-110 transition-all group-active:scale-95'
                        />
                    )
                }
            </div>
            <p className={`text-md font-normal text-zinc-100 max-[1350px]:hidden`}>{title}</p>
        </NavLink>
    )
}

export default SingleMenuLink
