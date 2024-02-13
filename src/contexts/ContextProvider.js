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
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState('false');



const setMode = (e) => {
setCurrentMode(e.target.value);
localStorage.setItem('themeMode', e.target.value);

setThemeSettings(false);
}

const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
    setThemeSettings(false);
    
    }

   




    return (
        <stateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            currentColor,
            currentMode,
            setCurrentColor,
            setCurrentMode,
            themeSettings,
            setThemeSettings,
            setColor,
            setMode
            
            }}>
            {children}
        </stateContext.Provider>
    )
}

export const useStateContext = () => useContext(stateContext);