import React from 'react'
import Footer from '../../../../../components/Footer';
import ProfileFollowers from '../../../../../components/ProfileFollowers';

function MutedAccounts() {
  return (
    <div className='w-full h-screen overflow-y-scroll'>
      <div className='max-w-[620px] m-auto mt-12'>
        <p className='text-xl font-bold text-zinc-200'>Muted accounts</p>
        {/* <div className='h-[50vh] mt-8'>
          <p className='text-center text-sm font-normal text-zinc-400 mt-24'>You haven't muted anyone.</p>
        </div> */}
        <div className='flex flex-col gap-1 mt-8 min-h-[50vh]'>
          <ProfileFollowers
            profile={"https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"}
            username={'atiafairoze'}
            btnTitle={'View profile'}
            muted={true}
            postsMuted={true}
            storiesMuted={true}
          />
          <ProfileFollowers
            profile={"https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"}
            username={'atiafairoze'}
            btnTitle={'View profile'}
            muted={true}  
            postsMuted={true}
            storiesMuted={true}
          />
          <ProfileFollowers
            profile={"https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"}
            username={'atiafairoze'}
            btnTitle={'View profile'}
            muted={true}
            postsMuted={true}
            storiesMuted={true}
          />
        </div>
      </div>
      <div className='max-w-[700px] m-auto mt-10'>
        <Footer />
      </div>
    </div>
  )
}

export default MutedAccounts