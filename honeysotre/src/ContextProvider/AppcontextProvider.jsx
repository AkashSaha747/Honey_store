import React, { createContext, useState } from 'react'
export let Appcontext=createContext();

const AppcontextProvider = ({children}) => {
    // cart will be like [id1,id2,..]

const [cart,setCart]=useState([]);
let [page,setPage]=useState(1);
let [itemwithquant,setitemwithquant]=useState([]);
let [totalPrice,settotalPrice]=useState(0);
let [isauth,setisauth]=useState(false);
return(
    <Appcontext.Provider value={{cart,setCart,page,setPage,itemwithquant,setitemwithquant,totalPrice,settotalPrice,isauth,setisauth}}>
        {children}
    </Appcontext.Provider>
)

}

export default AppcontextProvider
