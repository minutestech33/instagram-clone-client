import React from 'react'
import Home from './pages/Home/Routes/Home'
import Explore from './pages/Home/Subroutes/Explore/Explore'
import Profile from './pages/Home/Subroutes/Profile/Profile'
import People from './pages/Home/Subroutes/People/People'
import Feed from './pages/Home/Subroutes/Feed/Feed'
import Search from './pages/Home/Subroutes/Search/Search'
import Notifications from './pages/Home/Subroutes/Notifications/Notifications'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='' element={<Feed />} />
          <Route path='search' element={<Search />} />
          <Route path='explore' element={<Explore />} />
          <Route path='notifications' element={<Notifications />} />
          <Route path=':username' element={<Profile />} />
          <Route path='explore/people' element={<People />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
