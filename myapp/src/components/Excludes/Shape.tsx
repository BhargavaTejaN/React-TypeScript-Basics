import React from 'react'

type ShapeType = 'cube' | 'square' | 'rectangle' | 'triangle'

// containes all the values of ShapeType except cube
type TwoDShapeType = Exclude<ShapeType,'cube'>

type ThemeType = 'dark' | 'light'
type ColorType = 'red' | 'blue' | 'yellow'

type ItemProps = {
    color : `${ThemeType}-${ColorType}`
    // color : EXclude<`${ThemeType}-${ColorType}`,'dark-yellow'>
}
 
const Shape : React.FC<ItemProps> = (props) => {

    const shape : ShapeType = 'cube'
    const twoDShape : TwoDShapeType = 'rectangle' 

  return (
    <div>Shape</div>
  )
}

export default Shape