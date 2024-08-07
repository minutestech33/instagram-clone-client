import React from 'react'
import Footer from '../../../../../components/Footer';
import CloseFriend from '../../../../../components/CloseFriend';

function BlockedAccounts() {
  return (
    <div className='w-full h-screen overflow-y-scroll'>
      <div className='max-w-[620px] m-auto mt-12'>
        <p className='text-xl font-bold text-zinc-200'>Blocked accounts</p>
        {/* <div className='h-[50vh] mt-8'>
          <p className='text-center text-sm font-normal text-zinc-400 mt-24'>You haven't muted anyone.</p>
        </div> */}
        <p className='text-sm font-normal text-zinc-400 mt-6'>You can block people anytime from their profiles.</p>
        <div className='flex flex-col mt-5 min-h-[45vh]'>
          <CloseFriend
            profile={"https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"}
            username={'atiafairoze'}
            name={'Atia Fairoza'}
            btnTitle={'Unblock'}
          />
          <CloseFriend
            profile={"https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"}
            username={'atiafairoze'}
            name={'Atia Fairoza'}
            btnTitle={'Unblock'}
          />
          <CloseFriend
            profile={"https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"}
            username={'atiafairoze'}
            name={'Atia Fairoza'}
            btnTitle={'Unblock'}
          />
        </div>
      </div>
      <div className='max-w-[700px] m-auto mt-10'>
        <Footer />
      </div>
    </div>
  )
}

export default BlockedAccounts