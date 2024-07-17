import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

function LoginAccount() {
    return (
        <div className='w-full flex justify-between items-center p-4'>
            <div className='flex items-center gap-3'>
                <img src="https://scontent.fspd3-1.fna.fbcdn.net/v/t39.30808-6/422864407_350092587789629_7234687580464905655_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHGK-pTFG3ZpjiRV_8toeMnboJPIWvt8cZugk8ha-3xxnUvL_73p1m0eegaBHbEBwRPSyATdphE32gGtT25Sb3d&_nc_ohc=M_HqYm_RkpgQ7kNvgGoWP8U&_nc_ht=scontent.fspd3-1.fna&oh=00_AYB6EdxAaILNVdgtnelvl_EspO6kejIKz55SXLMjJIxx5g&oe=6696B570" className='h-14 select-none w-14 rounded-full object-cover' alt="" />
                <p className='font-medium text-zinc-100 text-sm'>shuvopal89</p>
            </div>
            <FontAwesomeIcon
                icon={faCircleCheck}
                className='text-zinc-100 text-2xl hover:cursor-pointer'
            />
        </div>
    )
}

export default LoginAccount
