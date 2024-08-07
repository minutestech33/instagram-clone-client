import React from 'react'
import Home from './pages/Home/Routes/Home'
import Explore from './pages/Home/Subroutes/Explore/Explore'
import Profile from './pages/Home/Subroutes/Profile/Profile'
import People from './pages/Home/Subroutes/People/People'
import Feed from './pages/Home/Subroutes/Feed/Feed'
import Search from './pages/Home/Subroutes/Search/Search'
import Notifications from './pages/Home/Subroutes/Notifications/Notifications'
import POSTS from './pages/Home/Subroutes/Profile/SubRoutes/POSTS'
import SAVED from './pages/Home/Subroutes/Profile/SubRoutes/SAVED'
import TAGGED from './pages/Home/Subroutes/Profile/SubRoutes/TAGGED'
import Collections from './pages/Home/Subroutes/Profile/SubRoutes/Collections'
import Accounts from './pages/Home/Subroutes/Accounts/Accounts'
import EditProfile from './pages/Home/Subroutes/Accounts/SubRoutes/EditProfile'
import MutedAccounts from './pages/Home/Subroutes/Accounts/SubRoutes/MutedAccounts'
import LikeCount from './pages/Home/Subroutes/Accounts/SubRoutes/LikeCount'
import AccountPrivacy from './pages/Home/Subroutes/Accounts/SubRoutes/AccountPrivacy'
import CloseFriends from './pages/Home/Subroutes/Accounts/SubRoutes/CloseFriends'
import BlockedAccounts from './pages/Home/Subroutes/Accounts/SubRoutes/BlockedAccounts'
import TagsMentions from './pages/Home/Subroutes/Accounts/SubRoutes/TagsMentions'
import Comments from './pages/Home/Subroutes/Accounts/SubRoutes/Comments'
import RestrictedAccounts from './pages/Home/Subroutes/Accounts/SubRoutes/RestrictedAccounts'
import PersonalDetails from './pages/Home/Subroutes/Accounts/SubRoutes/PersonalDetails'
import PasswordSecurity from './pages/Home/Subroutes/Accounts/SubRoutes/PasswordSecurity'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='' element={<Feed />} />
          <Route path='search' element={<Search />} />
          <Route path='explore' element={<Explore />} />
          <Route path='notifications' element={<Notifications />} />
          <Route path=':username' element={<Profile />}>
            <Route path='' element={<POSTS />} />
            <Route path='saved' element={<SAVED />} />
            <Route path='tagged' element={<TAGGED />} />
          </Route>
          <Route path=':username/saved/:collection' element={<Collections />} />
          <Route path='explore/people' element={<People />} />
          <Route path='/accounts/' element={<Accounts />}>
            <Route path='edit' element={<EditProfile />} />
            <Route path='personal_details' element={<PersonalDetails />} />
            <Route path='password_and_security' element={<PasswordSecurity />} />
            <Route path='muted_accounts' element={<MutedAccounts />} />
            <Route path='like_count' element={<LikeCount />} />
            <Route path='privacy_setting' element={<AccountPrivacy />} />
            <Route path='close_friends' element={<CloseFriends />} />
            <Route path='blocked_accounts' element={<BlockedAccounts />} />
            <Route path='tags_and_mentions' element={<TagsMentions />} />
            <Route path='comments' element={<Comments />} />
            <Route path='restricted_accounts' element={<RestrictedAccounts />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
