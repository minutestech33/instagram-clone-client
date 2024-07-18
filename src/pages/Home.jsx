import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faCompass, faSquarePlus, faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'
import { NavLink, Outlet } from 'react-router-dom'
import SingleMenuLink from '../components/SingleMenuLink'
import SingleMenuItem from '../components/SingleMenuItem'
import { DesignContext } from '../context/DesignContent'
import ShowMore from '../components/Popup/ShowMore'
import CreatePost from '../components/Popup/CreatePost'
import SwitchAccount from '../components/Popup/SwitchAccount'
import PostMore from '../components/Popup/PostMore'
import Header from '../components/Header'
import BottomNavigation from '../components/BottomNavigation'

function Home() {
  const { showMore, showSwitch, showPostMore, showCreatePost } = useContext(DesignContext)

  return (
    <div className='w-full h-screen'>
      <div className='w-full h-screen bg-black flex'>
        {/* Home left menu section */}
        <div className={`h-screen w-72 max-[1350px]:w-[72px] border-r border-zinc-800 max-md:hidden px-3 pt-6 pb-5 flex flex-col justify-between`}>
          {/* Home left menu upper section */}
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
              <SingleMenuLink icon={faEnvelopeOpen} title={"Home"} link={"/"} />
              <SingleMenuLink icon={faMagnifyingGlass} title={"Search"} link={'/search'} />
              <SingleMenuLink icon={faCompass} title={"Explore"} link={"/explore"} />
              <SingleMenuLink icon={faHeart} title={"Notifications"} link={'/notifications'} />
              <SingleMenuItem icon={faSquarePlus} title={"Create"} />
            </div>
          </div>
          {/* Home left menu bottom section */}
          <div className='flex flex-col gap-3 w-full'>
            <SingleMenuLink title={"Profile"} link={"/shuvopal89"} />
            <SingleMenuItem icon={faBars} title={'More'} />
          </div>
        </div>
        {/* Home right menu or main content container */}
        <div className='h-screen w-full text-zinc-100'>
          <div className='w-full h-[8vh] hidden max-md:block border-b border-zinc-800'>
            <Header />
          </div>
          <div className='w-full h-[100vh] max-md:h-[84vh] overflow-y-scroll'><Outlet /></div>
          <div className='w-full h-[8vh] hidden max-md:block border-t border-zinc-800'>
            <BottomNavigation />
          </div>
        </div>
      </div>

      {/* All the absolute containers started from here  */}
      {showMore && <ShowMore />}
      {showCreatePost && <CreatePost />}
      {showSwitch && <SwitchAccount />}
      {showPostMore && <PostMore />}
    </div>
  )
}

export default Home
