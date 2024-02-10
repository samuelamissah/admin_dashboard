import { click } from "@syncfusion/ej2-react-grids";
import React, {createContext, useContext} from "react";
import {useState} from "react";


const stateContext = createContext();


const initialState = {
    chat: false,
    cart: false,
    userProfile: false, 
    notification: false,
}


export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);


    const handleClick = (clicked) => {
        setIsClicked ({...initialState, [clicked]: true})
    }

    const [screenSize, setScreenSize] = useState(undefined);

    return (
        <stateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize
            
            }}>
            {children}
        </stateContext.Provider>
    )
}

export const useStateContext = () => useContext(stateContext);