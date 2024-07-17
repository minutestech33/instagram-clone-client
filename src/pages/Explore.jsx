import React from 'react'
import { explore } from '../utils/explore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'

function Explore() {
  return (
    <div className='w-full flex flex-col items-center mt-6 max-md:mt-3'>
      <div className='max-w-[950px] h-max grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-3 max-md:px-3 gap-1'>
        {
          explore.map((item, index) => {
            return (
              <div key={index} className='w-full relative group'>
                <img src={item.photos[0]} className='w-full max-lg:w-80 h-80 max-md:w-52 max-md:h-52 max-sm:w-32 max-sm:h-32 object-cover' alt="" />

                {/* When hovering on images */}
                <div className='w-full h-full invisible group-hover:visible group-hover:cursor-pointer bg-black/30 absolute top-0 left-0 flex justify-center items-center gap-3 z-20'>
                  <FontAwesomeIcon
                    icon={faComment}
                    className='text-xl text-zinc-100'
                  />
                  <p className='font-bold text-sm text-zinc-100'>{item.comments}</p>
                </div>
                {
                  item.photos.length > 1 && (
                    <FontAwesomeIcon
                      icon={faLayerGroup}
                      className='text-xl max-md:text-sm text-zinc-100 absolute right-3 top-3 z-10'
                    />
                  )
                }
              </div>
            )
          })
        }
      </div>
      <Footer />
    </div>
  )
}

export default Explore
