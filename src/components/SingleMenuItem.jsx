import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DesignContext } from '../context/DesignContent'

function SingleMenuItem({ icon, title }) {
    const { setShowMore, setShowCreatePost } = useContext(DesignContext)
    const clickHandler = () => {
        switch (title) {
            case 'Create':
                setShowCreatePost(true)
                document.title = "Create new post . Instagram"
                break;
            case 'More':
                setShowMore(true)
                break;
        }
    }
    return (
        <div onClick={clickHandler} className={`group w-full max-[1350px]:w-max flex items-center gap-1 hover:cursor-pointer hover:bg-zinc-800 rounded-lg active:opacity-50`}>
            <div className={`h-12 w-12 rounded-lg flex justify-center items-center`}>
                <FontAwesomeIcon
                    icon={icon}
                    className='text-2xl text-zinc-100 group-hover:scale-110 transition-all group-active:scale-95'
                />
            </div>
            <p className={`text-md font-normal text-zinc-100 max-[1350px]:hidden`}>{title}</p>
        </div>
    )
}

export default SingleMenuItem