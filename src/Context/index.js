import { useState,useContext } from "react";
import { createContext } from "react";
import {Cities} from "../Components/Constant"
export const MyContext = createContext(null);

export const ApplicationContextProvider = ({children}) => {
  const [unselectedCities,setUnSelectedCities] = useState(Cities);
 const [selectedCities,setSelectedCities]= useState([]);

 const [theme, setTheme] = useState("light");
 const contextValue = {
    selectedCities,
    setSelectedCities,
    unselectedCities,
    setUnSelectedCities,
    theme,
    setTheme
  };


    return(
        <MyContext.Provider value={contextValue}>
          {children}
        </MyContext.Provider>

    )
}
export const useApplicationContext = () => {
    return useContext(MyContext);
  };
