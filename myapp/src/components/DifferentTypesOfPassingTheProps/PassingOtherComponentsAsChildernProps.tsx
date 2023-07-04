import React from 'react'

type TypeProps = {
    children: React.ReactNode
}

const PassingOtherComponentsAsChildernProps : React.FC<TypeProps> = ({children}) => {
  return (
    <div>
        <h2>Passing Other Components As Childern Props</h2>
        {children}
    </div>
  )
}

export default PassingOtherComponentsAsChildernProps