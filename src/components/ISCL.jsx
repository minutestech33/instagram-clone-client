import React from 'react'
import { NavLink } from 'react-router-dom'

function ISCL({link, title}) {
    return (
        <>
            <NavLink className='hover:underline' target='_blank' to={link}>{title}</NavLink>.
        </>
    )
}

export default ISCL
