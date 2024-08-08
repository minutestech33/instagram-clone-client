import React from 'react'
import Footer from '../../../../../components/Footer';
import CloseFriend from '../../../../../components/CloseFriend';

function RestrictedAccounts() {
  return (
    <div className='w-full h-screen overflow-y-scroll max-xl:px-3'>
      <div className='max-w-[620px] m-auto mt-12 max-md:mt-4'>
        <p className='text-xl font-bold text-zinc-200'>Restricted accounts</p>
        {/* <div className='h-[50vh] mt-8'>
          <p className='text-center text-sm font-normal text-zinc-400 mt-24'>You haven't muted anyone.</p>
        </div> */}
        <p className='text-sm font-normal text-zinc-400 mt-6'>Protect yourself from unwanted interactions without having to block or unfollow people you know. You can restrict them anytime from their profiles.</p>
        <div className='flex flex-col mt-5 min-h-[45vh]'>
          <CloseFriend
            profile={"https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"}
            username={'atiafairoze'}
            name={'Atia Fairoza'}
            btnTitle={'Unrestrict'}
          />
          <CloseFriend
            profile={"https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"}
            username={'atiafairoze'}
            name={'Atia Fairoza'}
            btnTitle={'Unrestrict'}
          />
          <CloseFriend
            profile={"https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"}
            username={'atiafairoze'}
            name={'Atia Fairoza'}
            btnTitle={'Unrestrict'}
          />
        </div>
      </div>
      <div className='max-w-[700px] m-auto mt-10 mb-14'>
        <Footer />
      </div>
    </div>
  )
}

export default RestrictedAccounts