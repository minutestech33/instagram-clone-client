import React from 'react'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Profile from './pages/Profile'
import People from './pages/People'
import Feed from './pages/Feed'
import Search from './pages/Search'
import Notifications from './pages/Notifications'
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
