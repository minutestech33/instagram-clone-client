import React from 'react'
import Footer from '../../../../../components/Footer';

function MutedAccounts() {
  return (
    <div className='w-full h-screen overflow-y-scroll'>
      <div className='max-w-[620px] h-[60vh] m-auto mt-12'>
        <p className='text-xl font-bold text-zinc-200'>Muted accounts</p>
        <div className='flex flex-col gap-2 mt-10'>
          <p className='text-center text-sm font-normal text-zinc-400 mt-20'>You haven't muted anyone.</p>
        </div>
      </div>
      <div className='max-w-[700px] m-auto mt-10'>
        <Footer />
      </div>
    </div>
  )
}

export default MutedAccounts