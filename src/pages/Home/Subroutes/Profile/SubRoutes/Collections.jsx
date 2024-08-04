import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from '../../../../../components/Footer';
import PSTDefault from '../../../../../components/Default/PSTDefault';

function Collections() {
    const navigate = useNavigate();
    const { state } = useLocation();
    return (
        <div className='w-full mt-8'>
            <div className='w-full max-w-[900px] h-3 m-auto'>
                <div onClick={() => navigate(-1)} className='flex max-lg:px-3 items-center gap-2 hover:cursor-pointer text-zinc-400 active:text-zinc-500'>
                    <FontAwesomeIcon
                        icon={faAngleLeft}
                        className='text-xl'
                    />
                    <p className='text-sm font-medium'>Saved</p>
                </div>
                <div className='mt-4 flex items-center max-lg:px-3 justify-between'>
                    <p className='text-lg font-normal text-zinc-100'>{state.collectionName}</p>
                    {
                        state.collectionName !== 'All posts' && (<FontAwesomeIcon
                            icon={faEllipsis}
                            className='text-lg text-zinc-100 hover:cursor-pointer'
                        />)
                    }
                </div>
                <div className='w-full'>
                    <PSTDefault
                        icon={faBookmark}
                        title={'Start Saving'}
                        desc={'Save photos and videos to your collection.'}
                        extra={'Add to collection'}
                    />
                </div>
                <div className='pb-20'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Collections
