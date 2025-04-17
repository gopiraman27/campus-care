import { createContext } from "react";
import {doctors} from "../assets/assets"

//create AppContext
export const AppContext = createContext();
// provider mai wrap kro 
const AppContextProvider = ({children}) => {
 
    const value = {
        doctors
    }

    return (
       <AppContext.Provider value={value}>
        {children}
       </AppContext.Provider>
    )
};

export default AppContextProvider;


