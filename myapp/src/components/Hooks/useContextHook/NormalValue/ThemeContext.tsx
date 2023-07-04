import React,{createContext} from 'react'
import {Theme, ThemeProps} from './Theme'

type ThemeContextProviderProps = {
    children : React.ReactNode
}

type ProviderValueProps = {
    theme : ThemeProps,
    onConsoleText : () => void
    addTwoNumbers :(a: number ,  b:number) => number 
    getData : () => Promise<Array<Object>>
}

export const ThemeContext = createContext<ProviderValueProps>({
    theme : Theme,
    onConsoleText : () => {},
    addTwoNumbers : (a: number ,  b:number) => a + b,
    getData : () => Promise.resolve([])
});

export const ThemeContextProvider : React.FC<ThemeContextProviderProps> = ({children}) => {

    const onConsoleText = () => {
        return console.log("Hello This Is Console");
    }

    const addTwoNumbers = (a : number,b : number) => {
        return a + b
    }

    const getData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await response.json()
        return data
    }

    const value : ProviderValueProps = {
        theme : Theme,
        onConsoleText : onConsoleText,
        addTwoNumbers : addTwoNumbers,
        getData : getData
    }

    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}