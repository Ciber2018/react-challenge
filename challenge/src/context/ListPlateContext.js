import { createContext, useState } from "react";
import { menuActive } from "../helpers/helper";

const ListPlateContext = createContext();

const ListPlateProvider = ({children}) => {
    let [list,setList] = useState([]);

    const updatePlateList = (element,text) => {
        setList([...list,text]);
        menuActive(element);
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