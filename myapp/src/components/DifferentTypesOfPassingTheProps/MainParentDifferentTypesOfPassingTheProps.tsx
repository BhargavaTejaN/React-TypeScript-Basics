import React from 'react'
import NormalProps from './NormalProps'
import PassingTheChildernProps from './PassingTheChildernProps'
import PassingOtherComponentsAsChildernProps from './PassingOtherComponentsAsChildernProps'
import PassingObjectAsAnProps from './PassingObjectAsAnProps'
import PassingListAsAnProps from './PassingListAsAnProps'

const details = {
    firstName : "React",
    lastName : 'js',
    personalDetails : {
        name : "Bhargava Teja",
        city : "Bangalore",
        age : 22
    },
    hobbies:[
        {hobby:"Playing Cricket",time:5},
        {hobby:"Reading",time:6},
        {hobby:"Watching Tv",time:7}
        ],
  }

const namesList = [
    {
      id:1,
      firstname : "Bhargav Teja",
      lastname : "Narasani"
    },
    {
      id:2,
      firstname : "Udaya Teja",
      lastname : "Narasani"
    },
    {
      id:3,
      firstname : "Srinivasa Rao",
      lastname : "Narasani"
    },
    {
        id:4,
        firstname : "Vijaya Lakshmi",
        lastname : "Narasani"
      },
  ]

const MainParentDifferentTypesOfPassingTheProps = () => {
  return (
    <div>
        <NormalProps name="Bhargava Teja" age={23} />
        <PassingTheChildernProps>Passing This Text As An Childern Prop</PassingTheChildernProps>
        <PassingOtherComponentsAsChildernProps>
            <NormalProps name="Bhargav" age={23}  />
        </PassingOtherComponentsAsChildernProps>
        <PassingObjectAsAnProps details={details}/>
        <PassingListAsAnProps details={namesList} />
    </div>
  )
}

export default MainParentDifferentTypesOfPassingTheProps