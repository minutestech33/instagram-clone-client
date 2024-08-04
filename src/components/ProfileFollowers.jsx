import React from 'react'

function ProfileFollowers({profile, username, isFollowed, name, btnTitle}) {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <img src={profile} className='w-12 h-12 rounded-full flex-shrink-0' alt="" />
                <div className='flex flex-col gap-0'>
                    <div className='flex items-center gap-1 text-zinc-100'>
                        <p className='font-medium text-sm'>{username}</p>
                        <p>.</p>
                        {isFollowed && <p className='text-xs font-medium text-blue-500 hover:cursor-pointer'>Follow</p>}
                    </div>
                    <p className='text-zinc-400 font-normal text-sm leading-5'>{name}</p>
                </div>
            </div>
            <button className='py-[7px] px-4 rounded-md bg-zinc-700 text-zinc-200 text-sm font-medium hover:bg-zinc-600'>{btnTitle}</button>
        </div>
    )
}

export default ProfileFollowers
