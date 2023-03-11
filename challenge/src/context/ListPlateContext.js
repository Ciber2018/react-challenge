import { createContext, useState } from "react";

const ListPlateContext = createContext();

const ListPlateProvider = ({children}) => {
    const [list,setList] = useState([]);  
    const [openDropdown,setOpenDropdown] = useState(false);   
    const [openDropdownAsMenuItem,setOpenDropdownAsMenuItem] = useState(false);     

    const updatePlateList = (element,text) => {
        setList([...list,text]);      
    }

    const data = {list,openDropdown,setOpenDropdown,openDropdownAsMenuItem,setOpenDropdownAsMenuItem,updatePlateList};
    return(
        <ListPlateContext.Provider value={data}>
            {children}
        </ListPlateContext.Provider>
    )
};

export{ListPlateProvider};
export default ListPlateContext;