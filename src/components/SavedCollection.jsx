import React from 'react'
import { saved } from '../utils/saved'
import { useNavigate } from 'react-router-dom'

function SavedCollection({ name, link }) {
    const navigate = useNavigate()
    return (
        <div onClick={() => {
            navigate(`/shuvopal89/saved/${link}`, {
                state: {
                    collectionName: name
                }
            })
        }} className={`w-[295px] h-72 max-[630px]:h-52 max-[630px]:w-52 max-[455px]:w-40 max-[455px]:h-40 border overflow-hidden rounded-sm ${name === 'All posts' && 'grid grid-cols-2 grid-rows-2'} border-zinc-700 relative hover:cursor-pointer`}>
            {
                name === 'All posts' ? (
                    saved.filter(item => item.user === 'shuvopal89' && item.collection === name).map((item, index) => {
                        return (
                            <img key={index} src={item.photos[0]} className={`w-full h-full object-cover border-zinc-400 ${(index === 0 && 'border-r border-b')} ${(index === 1 && 'border-b border-l')} ${(index === 2 && 'border-t border-r')} ${(index === 3 && 'border-l border-t')}`} alt="" />
                        )
                    })
                ) : (
                    saved.filter(item => item.user === 'shuvopal89' && item.collection === name).map((item, index) => {
                        return (
                            <img key={index} src={item.photos[0]} className={`w-full h-full object-cover border-zinc-400`} alt="" />
                        )
                    })
                )
            }
            <div className='w-full h-full absolute top-0 left-0 bg-black/40 hover:bg-black/60'></div>
            <p className='text-xl font-normal text-zinc-300 absolute bottom-5 left-6'>{name}</p>
        </div>
    )
}

export default SavedCollection