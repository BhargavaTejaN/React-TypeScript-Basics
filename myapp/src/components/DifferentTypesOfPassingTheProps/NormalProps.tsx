import React from 'react'

interface GreetProps {
    name : string,
    age : 23
}

const NormalProps : React.FC<GreetProps> = (props) => {

    const {name,age} = props

  return (
    <div>
        <h1>Hello This is {name} & of Age {age}</h1>
    </div>
  )
}

export default NormalProps