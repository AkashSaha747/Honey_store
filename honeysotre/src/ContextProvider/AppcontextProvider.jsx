import React, { createContext, useState } from 'react'
export let Appcontext=createContext();

const AppcontextProvider = ({children}) => {
    // cart will be like [id1,id2,..]

const [cart,setCart]=useState([]);
let [page,setPage]=useState(1);
return(
    <Appcontext.Provider value={{cart,setCart,page,setPage}}>
        {children}
    </Appcontext.Provider>
)

}

export default AppcontextProvider
