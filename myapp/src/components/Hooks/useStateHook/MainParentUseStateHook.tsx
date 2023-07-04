import React from 'react'
import LoggedIn from './LoggedIn'
import User from './User'

const MainParentUseStateHook = () => {
  return (
    <div>
        <LoggedIn />
        <User />
    </div>
  )
}

export default MainParentUseStateHook