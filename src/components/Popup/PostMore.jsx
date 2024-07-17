import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { DesignContext } from '../../context/DesignContent'

function PostMore() {
    const { setShowPostMore, showPostMore } = useContext(DesignContext)

    const Item = ({ title, color }) => {
        const handleItemClick = () => {
            switch (title) {
                case "Cancel":
                    setShowPostMore(false);
                    break;
            }
        }
        return (
            <p onClick={handleItemClick} className={`text-center text-sm font-medium ${color} py-4`}>{title}</p>
        )
    }
    const handlePostShowMore = (e) => e.target.classList.contains("parent") && setShowPostMore(false)

    return (
        <div className={`parent w-full h-screen absolute top-0 left-0 flex justify-center items-center bg-black/60 z-50`} onClick={handlePostShowMore}>
            <div className={`w-[350px] bg-zinc-800 rounded-2xl divide-y divide-zinc-700 hover:cursor-pointer ${showPostMore ? 'scaleAnimShow' : ''}`}>
                <Item title={'Report'} color={'text-red-500'} />
                <Item title={'Unfollow'} color={'text-red-500'} />
                <Item title={'Add to favorite'} color={'text-zinc-100'} />
                <div className='flex justify-center'>
                    <NavLink to={'/shuvopal90'} className='w-full py-4 text-center text-sm font-medium text-zinc-100'>Go to post</NavLink>
                </div>
                <Item title={'Copy link'} color={'text-zinc-100'} />
                <Item title={'About this account'} color={'text-zinc-100'} />
                <Item title={'Cancel'} color={'text-zinc-100'} />
            </div>
        </div>
    )
}

export default PostMore
