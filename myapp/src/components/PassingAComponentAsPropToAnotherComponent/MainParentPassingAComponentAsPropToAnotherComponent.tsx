import React from 'react'
import Private from './Private'
import Profile from './Profile'

const MainParentPassingAComponentAsPropToAnotherComponent = () => {
  return (
    <div>
        <Private isLoggedIn={true} COMPONENT={Profile}/>
        <Profile name="TypeScript" />
    </div>
  )
}

export default MainParentPassingAComponentAsPropToAnotherComponent