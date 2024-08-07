import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

function CloseFriend({ profile, username, name, isClosed, btnTitle }) {
    return (
        <div className={`flex justify-between items-center rounded-md py-[11px] ${btnTitle ? '' : 'px-[11px] hover:cursor-pointer active:bg-zinc-800'} select-none`}>
            <div className='flex items-center gap-3'>
                <img src={profile} className='w-12 h-12 rounded-full flex-shrink-0' alt="" />
                <div className='flex flex-col gap-0'>
                    <p className='font-medium text-sm text-zinc-200'>{username}</p>
                    <p className='font-normal text-sm text-zinc-400'>{name}</p>
                </div>
            </div>
            {
                btnTitle ? (
                    <button className='py-[7px] px-3 rounded-md bg-zinc-700 text-zinc-200 text-sm font-medium hover:bg-zinc-600'>{btnTitle}</button>
                ) : (
                    isClosed ? (
                        <FontAwesomeIcon
                            icon={faCircleCheck}
                            className='text-2xl text-blue-500'
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faCircle}
                            className='text-2xl text-zinc-700'
                        />
                    )
                )
            }
        </div>
    )
}

export default CloseFriend
