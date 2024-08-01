import React from 'react'
import { notifications } from '../../../../utils/notifications'
import Notification from '../../../../components/Notification'

function Notifications() {
  return (
    <div className='w-full'>
      <div className='max-w-[650px] m-auto px-3'>
        <p className='text-2xl font-bold text-zinc-100 mt-6'>Notifications</p>
        <div className='pb-4 border-b border-zinc-800 mt-4'>
          <p className='text-lg font-semibold text-zinc-100'>New</p>
          <div className='mt-5 flex flex-col'>
            {
              notifications.filter(notification => notification.read === false).map((item, index) => {
                return (
                  <div key={index}>
                    <Notification
                      id={item.id}
                      username={item.username}
                      message={item.message}
                      profile={item.profile}
                      posted={item.posted}
                      read={item.read}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>

        {/* Earlier notifications container */}
        <div className='pb-4 mt-4'>
          <p className='text-lg font-semibold text-zinc-100'>Earlier</p>
          <div className='mt-5 flex flex-col'>
            {
              notifications.filter(notification => notification.read === true).map((item, index) => {
                return (
                  <div key={index}>
                    <Notification
                      id={item.id}
                      username={item.username}
                      message={item.message}
                      profile={item.profile}
                      posted={item.posted}
                      read={item.read}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Notifications
