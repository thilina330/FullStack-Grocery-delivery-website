import { Children, createContext } from "react";



export const AppContext = createContext();


export const AppContextProvider = ({Children}) => {
    return <AppContext.Provider>
        {Children}
    </AppContext.Provider>
}

