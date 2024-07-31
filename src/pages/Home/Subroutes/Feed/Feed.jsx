import React, { useContext, useState } from 'react'
import SuggustedProfile from '../../../../components/SuggustedProfile'
import ISCL from '../../../../components/ISCL'
import { stories } from '../../../../utils/story'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import Post from '../../../../components/Post'
import { dummyPosts } from '../../../../utils/posts'
import { NavLink } from 'react-router-dom'
import { DesignContext } from '../../../../context/DesignContent'
import Footer from '../../../../components/Footer'
import { useSliceStr } from '../../../../hooks/useSliceStr'

function Feed() {
  const [storyObsolete, setStoryObsolete] = useState(0)
  const { setShowSwitch } = useContext(DesignContext)

  const goToPrev = () => (storyObsolete !== 0) && setStoryObsolete(storyObsolete => storyObsolete -= 4)
  const goToNext = () => (storyObsolete !== stories.length - 4) && setStoryObsolete(storyObsolete => storyObsolete += 4)

  return (
    <div className='w-full flex justify-center gap-20'>
      {/* Home feed section */}
      <div className='w-[636px] max-md:w-full h-max mt-9 max-md:mt-0'>
        {/* Home story section */}
        <div className='relative w-full'>
          <div className='w-full flex max-md:px-[6.5px] items-center select-none overflow-x-scroll no-scrollbar border-zinc-800 max-md:border-b max-md:py-3'>
            {
              stories.map((item, index) => {
                return (
                  <div key={index} className='flex-shrink-0 w-[79.6px] flex justify-center transition-transform ease-in-out duration-300' style={{ transform: `translateX(-${storyObsolete * 100}%)` }}>
                    <div className='flex flex-col justify-center items-center gap-1 hover:cursor-pointer'>
                      <div style={{ padding: '2px' }} className='flex justify-center items-center bg-gradient-to-r from-fuchsia-400 from-10% via-amber-400 via-30% to-rose-400 to-90% rounded-full'>
                        <img src={item.profile} className='w-16 h-16 object-cover rounded-full border-4 border-black' />
                      </div>
                      <p className='text-xs font-normal'>{useSliceStr({ text: item.name, length: 9 })}</p>
                    </div>
                  </div>
                )
              })
            }
            {
              storyObsolete !== 0 && (
                <FontAwesomeIcon
                  icon={faCircleChevronLeft}
                  onClick={goToPrev}
                  className='text-2xl max-[670px]:hidden absolute top-6 max-md:top-10 left-5 text-zinc-100 hover:cursor-pointer transition-all hover:scale-110'
                />
              )
            }
            {
              storyObsolete !== stories.length - 8 && (
                <FontAwesomeIcon
                  icon={faCircleChevronRight}
                  onClick={goToNext}
                  className='text-2xl max-[670px]:hidden absolute top-6 max-md:top-10 right-5 text-zinc-100 hover:cursor-pointer transition-all hover:scale-110'
                />
              )
            }
          </div>
        </div>
        {/* Home main feed (all single feed) section */}
        <div className='w-full h-max mt-4 max-md:mt-0 flex flex-col items-center justify-center divide-y divide-zinc-700'>
          {
            dummyPosts.map((post, index) => {
              return (
                <div key={index}>
                  <Post
                    id={post.id}
                    name={post.name}
                    created={post.created}
                    photos={post.photos}
                    likes={post.likes}
                    isActiveStory={post.isActiveStory}
                    comments={post.comments}
                    shares={post.shares}
                    tags={post.tags}
                    credit={post.credit}
                    description={post.description}
                  />
                </div>
              )
            })
          }
        </div>
        <Footer />
      </div>
      {/* Home your profile and suggestion profile section  */}
      <div className='w-[300px] h-max mt-9 max-[1150px]:hidden'>
        {/* Home profile section */}
        <div className='flex items-center justify-between'>
          <div className='flex items-start gap-3'>
            <img src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" className='h-11 select-none w-11 rounded-full object-cover hover:cursor-pointer' alt="" />
            <div>
              <p className='font-medium text-zinc-100 text-sm'>shuvopal89</p>
              <p className='font-normal text-zinc-400 text-sm'>Shuvo Pal</p>
            </div>
          </div>
          <p onClick={() => setShowSwitch(true)} className='text-xs text-blue-500 font-normal hover:cursor-pointer hover:text-zinc-100'>Switch</p>
        </div>
        {/* Home suggested profile header section */}
        <div className='mt-6 flex justify-between items-center'>
          <p className='text-sm font-medium text-zinc-400'>Suggested for you</p>
          <NavLink to="/explore/people" className='text-xs text-zinc-100 font-medium hover:cursor-pointer hover:text-blue-500'>See All</NavLink>
        </div>
        {/* Home main suggested profile section */}
        <div className='mt-4 flex flex-col gap-4'>
          <SuggustedProfile name={'anglenila7'} />
          <SuggustedProfile name={'r_ahaaaaa12'} />
          <SuggustedProfile name={'onabi29'} />
          <SuggustedProfile name={'ra.ika9492'} />
          <SuggustedProfile name={'posted_by_sanamm'} />
        </div>
        {/* Home suggested profile and your profile bottom section */}
        <div className='mt-10 flex items-center gap-1 flex-wrap font-normal text-xs text-zinc-500'>
          <ISCL link={'https://about.instagram.com/'} title={'About'} />
          <ISCL link={'https://help.instagram.com/'} title={'Help'} />
          <ISCL link={'https://about.instagram.com/blog'} title={'Press'} />
          <ISCL link={'https://developers.facebook.com/docs/instagram-platform'} title={'API'} />
          <ISCL link={'https://about.instagram.com/about-us/careers'} title={'Jobs'} />
          <ISCL link={'https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect'} title={'Privacy'} />
          <ISCL link={'https://help.instagram.com/581066165581870/'} title={'Terms'} />
          <ISCL link={'https://about.instagram.com/'} title={'Locations'} />
          <ISCL link={'https://help.instagram.com/'} title={'Language'} />
          <a className='hover:underline' target='_blank' href="https://accountscenter.instagram.com/meta_verified/?entrypoint=web_footer">Meta Verified</a>
        </div>
        <p className='text-xs text-zinc-500 font-normal uppercase mt-5'>© 2024 Instagram from Meta</p>
      </div>
    </div>
  )
}

export default Feed
