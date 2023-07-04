import React from 'react'

import { ProfileProps } from './Profile'
import Login from './Login'

type TypeOfProps = {
    isLoggedIn : boolean,
    COMPONENT : React.ComponentType<ProfileProps>
}

const Private : React.FC<TypeOfProps> = (props) => {

    const {isLoggedIn,COMPONENT : ProfileComponent} = props

    if(isLoggedIn){
        return <ProfileComponent name="React + TypeScript" />
    } else {
        return <Login />
    }

}

export default Private