import { createContext, useState } from "react";

export const DesignContext = createContext()

export const DesignContextProvider = ({ children }) => {
  const [showMore, setShowMore] = useState(false);
  const [showSwitch, setShowSwitch] = useState(false);
  const [showPostMore, setShowPostMore] = useState(false);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showCreateNote, setShowCreateNote] = useState(false);
  const [showProfileSettings, setShowProfileSettings] = useState(false);
  return (
    <DesignContext.Provider
      value={{
        showMore, setShowMore,
        showSwitch, setShowSwitch,
        showPostMore, setShowPostMore,
        showCreatePost, setShowCreatePost,
        showCreateNote, setShowCreateNote,
        showProfileSettings, setShowProfileSettings
      }}
    >
      {children}
    </DesignContext.Provider>
  )
}