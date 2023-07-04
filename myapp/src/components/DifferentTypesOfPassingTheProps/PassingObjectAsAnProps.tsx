import React from 'react'

type TypeofProps = {
    details : {
        firstName : string,
        lastName : string,
        personalDetails : {
            name : string,
            city : string,
            age : number
        }
        hobbies : {
            hobby : string,
            time : number
        }[]
    }
}

const PassingObjectAsAnProps : React.FC<TypeofProps> = (props) => {

    const {details} = props 
    const {firstName,lastName,personalDetails,hobbies} = details 
    const {name,city,age} = personalDetails

  return (
    <div>
        <h2>This is {firstName} {lastName} Course</h2>
        <h2>The Person Enroled Is {name} of age {age} from {city}</h2>
        <h3>My Hobbies Are</h3>
        {hobbies.map((each,index) => (
            <li style={{ listStyleType: "none" }} key={index}>
                <p>{each.hobby} at {each.time}</p>
            </li>
        ))}
    </div>
  )
}

export default PassingObjectAsAnProps