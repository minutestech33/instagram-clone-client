import { faMagnifyingGlass, faBars, faChartLine, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faCompass, faSquarePlus, faUser, faEnvelopeOpen, faSun, faBookmark } from '@fortawesome/free-regular-svg-icons'

export const postMoreOptions = [
    { title: 'Report', color: 'text-red-500' },
    { title: 'Unfollow', color: 'text-red-500' },
    { title: 'Add to favorite', color: 'text-zinc-200' },
    { title: 'Go to post', color: 'text-zinc-200' },
    { title: 'Copy link', color: 'text-zinc-200' },
    { title: 'About this account', color: 'text-zinc-200' },
    { title: 'Cancel', color: 'text-zinc-200' }
]

export const singleMenuOptions = [
    { icon: faEnvelopeOpen, title: 'Home', link: '/' },
    { icon: faMagnifyingGlass, title: 'Search', link: '/search' },
    { icon: faCompass, title: 'Explore', link: '/explore' },
    { icon: faHeart, title: 'Notifications', link: '/notifications' },
    { icon: faSquarePlus, title: 'Create' },
    { title: 'Profile' },
    { icon: faBars, title: 'More' },
]

export const bottomNavigationOptions = [
    { icon: faEnvelopeOpen, link: '/' },
    { icon: faMagnifyingGlass, link: '/search' },
    { icon: faCompass, link: '/explore' },
    { icon: faSquarePlus, title: 'Create' },
    { icon: faUser, link: '/explore/people' },
    { title: 'Profile' }
]

export const showMoreOptions = [
    { icon: faSun, title: 'Settings', link: '#' },
    { icon: faChartLine, title: 'Your activity', link: '#' },
    { icon: faBookmark, title: 'Saved', link: '#' },
    { icon: faCircleExclamation, title: 'Report a problem', link: '#' },
]

export const footerOptions = [
    { title: 'Meta', link: 'https://about.meta.com/' },
    { title: 'About', link: 'https://about.instagram.com/' },
    { title: 'Blog', link: 'https://about.instagram.com/blog/' },
    { title: 'Jobs', link: 'https://about.instagram.com/about-us/careers' },
    { title: 'Help', link: 'https://help.instagram.com/' },
    { title: 'API', link: 'https://developers.facebook.com/docs/instagram-platform' },
    { title: 'Privacy', link: 'https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect' },
    { title: 'Terms', link: 'https://help.instagram.com/581066165581870/' },
    { title: 'Locations', link: 'https://about.instagram.com/' },
    { title: 'Instagram Lite', link: 'https://www.instagram.com/web/lite/' },
    { title: 'Threads', link: 'https://www.threads.net/' },
    { title: 'Contact Uploading & Non-Users', link: 'https://www.facebook.com/help/instagram/261704639352628' },
    { title: 'Meta Verified', link: 'https://accountscenter.instagram.com/meta_verified/?entrypoint=web_footer' }
]