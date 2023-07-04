import React from 'react'

type PassingTheChildernTypeProps = {
    children: string
}

const PassingTheChildernProps : React.FC<PassingTheChildernTypeProps> = ({children}) => {
  return (
    <div>
        <h2>{children}</h2>
    </div>
  )
}

export default PassingTheChildernProps