import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div className='w-full mt-28 pb-6 flex flex-col items-center justify-center gap-5'>
            <div className='flex justify-center max-md:px-5 items-center flex-wrap gap-4'>
                <NavLink className='text-xs font-normal text-zinc-400 hover:underline' target='_blank' to={'https://about.meta.com/'}>Meta</NavLink>
                <NavLink className='text-xs font-normal text-zinc-400 hover:underline' target='_blank' to={'https://about.instagram.com/'}>About</NavLink>
                <NavLink className='text-xs font-normal text-zinc-400 hover:underline' target='_blank' to={'https://about.instagram.com/blog/'}>Blog</NavLink>
                <NavLink className='text-xs font-normal text-zinc-400 hover:underline' target='_blank' to={'https://about.instagram.com/about-us/careers'}>Jobs</NavLink>
                <NavLink className='text-xs font-normal text-zinc-400 hover:underline' target='_blank' to={'https://help.instagram.com/'}>Help</NavLink>
                <NavLink className='text-xs font-normal text-zinc-400 hover:underline' target='_blank' to={'https://developers.facebook.com/docs/instagram-platform'}>API</NavLink>
                <NavLink className='text-xs font-normal text-zinc-400 hover:underline' target='_blank' to={'https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect'}>Privacy</NavLink>
                <NavLink className='text-xs font-normal text-zinc-400 hover:underline' target='_blank' to={'https://help.instagram.com/581066165581870/'}>Terms</NavLink>
                <NavLink className='text-xs font-normal text-zinc-400 hover:underline' target='_blank' to={'#'}>Locations</NavLink>
                <NavLink className='text-xs font-normal text-zinc-400 hover:underline' target='_blank' to={'https://www.instagram.com/web/lite/'}>Instagram Lite</NavLink>
                <NavLink className='text-xs font-normal text-zinc-400 hover:underline' target='_blank' to={'https://www.threads.net/'}>Threads</NavLink>
                <NavLink className='text-xs font-normal text-zinc-400 hover:underline' target='_blank' to={'https://www.facebook.com/help/instagram/261704639352628'}>Contact Uploading & Non-Users</NavLink>
                <NavLink className='text-xs font-normal text-zinc-400 hover:underline' target='_blank' to={'https://accountscenter.instagram.com/meta_verified/?entrypoint=web_footer'}>Meta Verified</NavLink>
            </div>
            <p className='text-xs text-zinc-400 font-normal'>© 2024 Instagram from Meta</p>
        </div>
    )
}

export default Footer
