import React from 'react'
import {ThemeContextProvider} from './ThemeContext'
import Box from './Box'

const MainParentUseContextNormalValue = () => {
  return (
    <div>
        <ThemeContextProvider>
            <Box />
        </ThemeContextProvider>
    </div>
  )
}

export default MainParentUseContextNormalValue