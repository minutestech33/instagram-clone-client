import React from 'react'
import { NavLink } from 'react-router-dom'

function SuggustedProfile({ name }) {
    return (
        <div className='flex items-center justify-between'>
            <NavLink to={"/shuvopal89"} className='flex items-start gap-3'>
                <img src="https://scontent.fspd3-1.fna.fbcdn.net/v/t39.30808-6/422864407_350092587789629_7234687580464905655_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHGK-pTFG3ZpjiRV_8toeMnboJPIWvt8cZugk8ha-3xxnUvL_73p1m0eegaBHbEBwRPSyATdphE32gGtT25Sb3d&_nc_ohc=M_HqYm_RkpgQ7kNvgGoWP8U&_nc_ht=scontent.fspd3-1.fna&oh=00_AYB6EdxAaILNVdgtnelvl_EspO6kejIKz55SXLMjJIxx5g&oe=6696B570" className='h-11 w-11 select-none rounded-full object-cover hover:cursor-pointer' alt="" />
                <div>
                    <p className='font-medium text-zinc-100 text-sm'>{name}</p>
                    <p className='font-normal text-zinc-400 text-xs'>New to Instagram</p>
                </div>
            </NavLink>
            <p className='text-xs text-blue-500 font-normal hover:cursor-pointer hover:text-zinc-100'>Follow</p>
        </div>
    )
}

export default SuggustedProfile
