import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

function SingleMenuLink({ icon, title, link }) {
    return (
        <NavLink to={link} className={`group w-full max-[1350px]:w-max flex items-center gap-1 hover:cursor-pointer hover:bg-zinc-800 rounded-lg active:opacity-50`}>
            <div className={`h-12 w-12 rounded-lg flex justify-center items-center`}>
                {
                    title === 'Profile' ? (
                        <img src="https://scontent.fspd3-1.fna.fbcdn.net/v/t39.30808-6/422864407_350092587789629_7234687580464905655_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHGK-pTFG3ZpjiRV_8toeMnboJPIWvt8cZugk8ha-3xxnUvL_73p1m0eegaBHbEBwRPSyATdphE32gGtT25Sb3d&_nc_ohc=M_HqYm_RkpgQ7kNvgGoWP8U&_nc_ht=scontent.fspd3-1.fna&oh=00_AYB6EdxAaILNVdgtnelvl_EspO6kejIKz55SXLMjJIxx5g&oe=6696B570" className='h-6 w-6 select-none rounded-full object-cover group-hover:scale-110 transition-all group-active:scale-95' alt="" />
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
