import { createContext, useState } from "react";

const ListPlateContext = createContext();

const ListPlateProvider = ({children}) => {
    const [list,setList] = useState([]);     

    const updatePlateList = (element,text) => {
        setList([...list,text]);      
    }

    const data = {list,updatePlateList};
    return(
        <ListPlateContext.Provider value={data}>
            {children}
        </ListPlateContext.Provider>
    )
};

export{ListPlateProvider};
export default ListPlateContext;