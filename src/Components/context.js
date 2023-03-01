import { useState,createContext } from "react";

const AppContext=createContext();

const AppProvider=({children})=>{


    const scrollDown = (ref) => {
        window.scrollTo({
          top: ref.current.offsetTop,
          behavior: 'smooth',
        });
      };

    return <AppContext.Provider value={{scrollDown}} >
        {children}
    </AppContext.Provider>
}

export {AppContext,AppProvider}

