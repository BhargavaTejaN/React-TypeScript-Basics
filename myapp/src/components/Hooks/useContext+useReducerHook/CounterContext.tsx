import { createContext,useReducer } from "react";

type ChildernProps = {
    children : React.ReactNode
}

type StateProps = {
    count : number
}

type updateActionType = {
    type : 'increment' | 'decrement',
    payload : number
}

type ResetActionType = {
    type : 'reset'
}

type ActionProps = updateActionType | ResetActionType

type CounterContextPropsType = {
    state : StateProps,
    dispatch : React.Dispatch<ActionProps>
}

const initialState = {
    count: 0
}

export const CounterContext = createContext<CounterContextPropsType>({
    state : initialState,
    dispatch : () => null
})

export const CounterContextProvider : React.FC<ChildernProps> = ({children}) => {

    const reducer = (state : StateProps, action : ActionProps) => {
        switch (action.type) {
          case "increment":
            return {count : state.count + action.payload}
          case "decrement":
            return {count : state.count - action.payload}
          case "reset":
            return initialState;
          default:
            return state;
        }
      };

    const [state,dispatch] = useReducer(reducer,initialState);

    const value = {
        state,dispatch
    }

    return(
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    )
}