import React from 'react'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TextAngle({ title }) {
    return (
        <div className='flex items-center justify-between p-4 hover:cursor-pointer'>
            <p className='text-sm font-normal text-zinc-200'>{title}</p>
            <FontAwesomeIcon
                icon={faAngleRight}
                className='text-sm text-zinc-400'
            />
        </div>
    )
}

export default TextAngle
