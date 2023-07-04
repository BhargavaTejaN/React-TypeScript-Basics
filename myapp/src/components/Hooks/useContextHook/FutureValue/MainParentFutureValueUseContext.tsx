import React from 'react'
import {UserContextProvider } from './UserContext'
import User from './User'

const MainParentFutureValueUseContext = () => {
  return (
    <div>
        <UserContextProvider>
            <User />
        </UserContextProvider>
    </div>
  )
}

export default MainParentFutureValueUseContext