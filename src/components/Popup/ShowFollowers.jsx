import React, { useContext } from 'react'
import { DesignContext } from '../../context/DesignContent'
import { faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { suggested } from '../../utils/suggested'
import ProfileFollowers from '../ProfileFollowers'

function ShowFollowers() {
    const { setShowFollowers } = useContext(DesignContext)
    const createNoteHandler = (e) => {
        if (e.target.classList.contains("parent")) {
            setShowFollowers(false)
        }
    }
    return (
        <div className='absolute top-0 left-0 z-50 parent w-full h-screen flex justify-center items-center bg-black/60' onClick={createNoteHandler}>
            <div className='w-[430px] bg-zinc-800 rounded-2xl max-md:w-full max-md:h-full max-md:rounded-none'>
                <div className='h-[50px] px-4 flex items-center justify-center border-b border-zinc-700 relative'>
                    <p className='text-md font-medium text-zinc-200 text-center'>Followers</p>
                    <FontAwesomeIcon
                        icon={faXmark}
                        onClick={() => setShowFollowers(false)}
                        className='text-zinc-200 text-2xl hover:cursor-pointer absolute top-3 right-5'
                    />
                </div>
                <div className='overflow-y-scroll'>
                    <div className='h-[60px] px-4 flex items-center justify-center w-full'>
                        <div className='relative w-full'>
                            <input type="text" placeholder='Search' className='w-full bg-zinc-700 placeholder:text-zinc-500 caret-zinc-500 text-zinc-200 text-sm font-normal py-[5px] pl-10 pr-3 rounded-md border-none outline-none' />
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className='text-zinc-500 text-sm hover:cursor-pointer absolute top-[9px] left-[17px]'
                            />
                        </div>
                    </div>
                    <div className='h-[360px] px-4 pb-4 flex flex-col gap-5 showFollowers'>
                        {
                            suggested.map((item, index) =>
                                <ProfileFollowers key={index} profile={item.profile} username={item.username} isFollowed={item.isFollowed} name={item.name} btnTitle="Remove" />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowFollowers
