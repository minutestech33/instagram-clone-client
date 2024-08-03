import React, { useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DesignContext } from '../context/DesignContent'
import { useNavigate, useLocation } from 'react-router-dom'

function SingleMenuItem({ icon, title, link }) {
    const { setShowMore, setShowCreatePost } = useContext(DesignContext);
    const navigate = useNavigate()
    const pathname = useLocation().pathname

    const clickHandler = () => {
        navigate(link)
        switch (title) {
            case 'Home':
                break;
            case 'Search':
                break;
            case 'Explore':
                break;
            case 'Notifications':
                break;
            case 'Create':
                setShowCreatePost(true)
                document.title = "Create new post . Instagram"
                break;
            case 'Profile':
                navigate('/shuvopal89')
                break;
            case 'More':
                setShowMore(true)
                break;
        }
    }
    return (
        <div onClick={clickHandler} className={`group w-full max-[1350px]:w-max flex items-center gap-1 hover:cursor-pointer hover:bg-zinc-800 ${pathname === link && 'bg-zinc-800'} rounded-lg active:opacity-70`}>
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
        </div>
    )
}

export default SingleMenuItem