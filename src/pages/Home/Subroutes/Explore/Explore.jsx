import React from 'react'
import { explore } from '../../../../utils/explore'
import Footer from '../../../../components/Footer'
import ExplorePost from '../../../../components/ExplorePost'

function Explore() {
  return (
    <div className='w-full flex flex-col items-center mt-6 max-md:mt-3'>
      <div className='max-w-[950px] h-max grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-3 max-md:px-3 gap-1'>
        {
          explore.map((item, index) => <ExplorePost key={index} photo={item.photos} comments={item.comments} />)
        }
      </div>
      <Footer />
    </div>
  )
}

export default Explore
