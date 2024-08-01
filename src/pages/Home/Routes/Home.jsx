import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { NavLink, Outlet } from 'react-router-dom'
import { DesignContext } from '../../../context/DesignContent'
import ShowMore from '../../../components/Popup/ShowMore'
import CreatePost from '../../../components/Popup/CreatePost'
import SwitchAccount from '../../../components/Popup/SwitchAccount'
import PostMore from '../../../components/Popup/PostMore'
import Header from '../../../components/Header'
import BottomNavigation from '../../../components/BottomNavigation'
import { singleMenuOptions } from '../../../utils/LinkOptions'
import SingleMenuItem from '../../../components/SingleMenuItem'

function Home() {
  const { showMore, showSwitch, showPostMore, showCreatePost } = useContext(DesignContext);
  return (
    <div className='w-full h-screen'>
      <div className='w-full h-screen bg-black flex'>
        <div className={`h-screen w-72 max-[1350px]:w-[72px] border-r border-zinc-800 max-md:hidden px-3 pt-6 pb-5 flex flex-col justify-between`}>
          <div className='flex flex-col'>
            <NavLink to={"/"} className='w-full flex items-center gap-1 hover:cursor-pointer select-none'>
              <div className={`hidden max-[1350px]:block`}>
                <div className='h-11 w-12 rounded-lg flex justify-center items-center'>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className='text-2xl text-zinc-100'
                  />
                </div>
              </div>
              <p className={`text-2xl font-normal px-3 pt-3 text-zinc-100 font-lobster max-[1350px]:hidden`}>Instagram</p>
            </NavLink>
            <div className='flex flex-col gap-2 w-full mt-9'>
              {
                singleMenuOptions.slice(0, 5).map((item, index) =>
                  <SingleMenuItem key={index} icon={item.icon} title={item.title} link={item.link} />)
              }
            </div>
          </div>
          <div className='flex flex-col gap-3 w-full'>
            {
              singleMenuOptions.slice(5, 7).map((item, index) =>
                <SingleMenuItem key={index} icon={item.icon} title={item.title} link={item.link} />)
            }
          </div>
        </div>
        <div className='h-screen w-full text-zinc-100 overflow-y-scroll'>
          <div className='w-full sticky top-0 h-10 z-10 bg-black hidden max-md:block border-b border-zinc-800'>
            <Header />
          </div>
          <div className='w-full'>
            <Outlet />
          </div>
          <div className='w-full fixed bottom-0 bg-black h-10 hidden max-md:block border-t border-zinc-800'>
            <BottomNavigation />
          </div>
        </div>
      </div>
      {showMore && <ShowMore />}
      {showCreatePost && <CreatePost />}
      {showSwitch && <SwitchAccount />}
      {showPostMore && <PostMore />}
    </div>
  )
}

export default Home
