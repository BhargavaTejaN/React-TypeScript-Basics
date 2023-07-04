import React,{createContext,useState}  from 'react'

type UserContextProviderProps = {
    children : React.ReactNode
}

type AuthUser = {
    name : string,
    email : string
}

type UserContextProps = {
    user : AuthUser | null,
    setuser : React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext<UserContextProps | null>(null);

export const UserContextProvider : React.FC<UserContextProviderProps> = ({children}) => {

    const [user, setuser] = useState<AuthUser | null>(null)

    const value={
        user,setuser
    }

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}