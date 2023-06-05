
// import React, { useContext, useEffect, useState } from 'react'
// import {Box,VStack,Text,Image,HStack, Center, Button} from "@chakra-ui/react"
// import { Link, useParams } from 'react-router-dom'
// import { Appcontext } from '../ContextProvider/AppcontextProvider'
// const ProductDetailsPage = () => {

//    let {cart,setCart}=useContext(Appcontext);
//    let {id}=useParams();
// let [data,setdata]=useState({});
//    let addtoCart=()=>{
//       if(cart.includes(id)){
//          alert("already in cart!")
//       }else{
//          setCart([...cart,id])
//          alert("Successfully added to cart");

//       }
//    }
//    let getdata=async()=>{
//       let res=await fetch(`http://localhost:8080/products/${id}`);
//       let jdata=await res.json();
//       console.log(jdata);
//       setdata(jdata);
//     }
//    useEffect(()=>{
// getdata();
// console.log(data);
//    },[])
//   return (

//    { data.image &&
   
//    <HStack w="100%" border="1px solid black" h="88vh" >

//    <Center  width="50%" h="100%" backgroundColor=" #BEE3F8"  >
//     <Image w="50%"  mt="40px" src="https://www.bing.com/th?id=OIP.sLc2BHOvnXbICJUiNVzkIgHaKQ&w=150&h=208&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"></Image>
//    </Center>
//    <Box    m="0px" p="0px" w="50%"   h="100%">
//     <Box width="85%"    m="auto">  
//     <HStack  mt="20px"  >
//        <Link to="/"><Text>MAIN PAGE /</Text></Link> 
//        <Link to="/products"> <Text>PRODUCTS HONEY</Text></Link> 
        
//        <Link to="/flower/id"> <Text color="green">FLOWER HONEY</Text></Link>
//     </HStack>
//         <Box>  
//         <Text   fontSize='25px'  fontWeight="bold" mt="50px" >NAME BRAND/FLOWER</Text>
//         <Text   mt="-10px" fontSize="25px" fontWeight="bold">HONEY FROM MASURIA</Text>
//         </Box>
//         <Box mt="30px" mb="30px">
//         <hr />
//            <HStack justifyContent="space-between" mt="5px" mb="5px">
//             <p>Product weight 450 g</p>
//             <p>₹450</p>
//            </HStack>
//         <hr  />
//         </Box>
//         <Box>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consectetur magnam cum eveniet  sunt iure, obcaecati in nostrum sed quam assumenda deleniti natus laboriosam totam? Suscipit laboriosam deserunt omnis fugiat, aliquid, minima pariatur voluptatibus expedita hic, distinctio id ad veniam. Fuga in quasi pariatur molestiae voluptatem non? Ipsam optio rem consequuntur, velit accusantium consectetur necessita.</p>
//         </Box>
//         <HStack>
//            <Box>
             
//            </Box>
//            <Box >
//            <HStack  mt="35px" >
//              <Center  border="1px solid black" borderRadius="30px" mr="20px" h="35px" width="80px" >
//                 <button  style={{paddingRight:"10px"}} >-</button>
//                 <Text>1</Text>
//                 <button  style={{paddingLeft:"10px"}} >+</button>
//              </Center>

//              <Button onClick={()=>{
//                addtoCart()
//              }} backgroundColor='#22543D' variant='solid' pl="100px" pr="100px"  color={"white"}  borderRadius="30px">
//                     ADD TO CARD
//                       </Button>
//            </HStack>
//            </Box>
//         </HStack>
//     </Box>
//    </Box>
// </HStack>}
//   )
// }

// export default ProductDetailsPage







import React, { useContext, useEffect, useState } from 'react'
import { Box, VStack, Text, Image, HStack, Center, Button, Heading } from "@chakra-ui/react"
import { Link, useParams } from 'react-router-dom'
import { Appcontext } from '../ContextProvider/AppcontextProvider'

const ProductDetailsPage = () => {
  // let { cart, setCart,itemwithquant,setitemwithquant } = useContext(Appcontext);
  let {cart,setCart,page,isauth,setisauth,setPage,itemwithquant,setitemwithquant,totalPrice,settotalPrice}=useContext(Appcontext);

  let { id } = useParams();
  let [data, setdata] = useState({});
  let [quant,setQuant]=useState(1);


  let increase=(p)=>{
setQuant(quant+1)
settotalPrice(totalPrice+p)
  }
  let decrease=(p)=>{
   setQuant(quant-1)
   settotalPrice(totalPrice-p)

  }

  let addtoCart = () => {
    if (cart.includes(id)) {
      alert("already in cart!");
    } else {
      setCart([...cart, id]);
      setitemwithquant([...itemwithquant,{id,quantity:quant}])
      alert("Successfully added to cart");
    }
  };

  let getdata = async () => {
    let res = await fetch(`http://localhost:8080/products/${id}`);
    let jdata = await res.json();
    console.log(jdata);
    setdata(jdata);

settotalPrice(totalPrice+jdata.price)

  };
console.log(totalPrice)
  useEffect(() => {
    getdata();
    console.log(data);
  }, []);

  return (
   isauth? <>
     data.image && (
      <HStack w="100%" border="1px solid black" h="88vh">
        <Center width="50%" h="100%" backgroundColor=" #BEE3F8">
          <Image w="50%" mt="40px" h={"50%"} src={data.image} />
        </Center>
        <Box m="0px" p="0px" w="50%" h="100%">
          <Box width="85%" m="auto">
            <HStack mt="20px">
              <Link to="/"><Text>MAIN PAGE /</Text></Link>
              <Link to="/products"><Text>PRODUCTS HONEY</Text></Link>
              <Link to="/flower/id"><Text color="green">FLOWER HONEY</Text></Link>
            </HStack>
            <Box>
              <Text fontSize='25px' fontWeight="bold" mt="50px">{data.productName}</Text>
            </Box>
            <Box mt="30px" mb="30px">
              <hr />
              <HStack justifyContent="space-between" mt="5px" mb="5px">
                <p>Product weight 450 g</p>
                <p>Rs.{data.price}</p>
              </HStack>
              <hr />
            </Box>
            <Box>
              <p>{data.description} lorem dessed iffed filed nosed give take money house price best quality</p>
            </Box>
            <HStack>
              <Box>
              </Box>
              <Box>
                <HStack mt="35px">
                  <Center border="1px solid black" borderRadius="30px" mr="20px" h="35px" width="80px">
                    <button onClick={()=>{
                     if(quant>1){
                        decrease(data.price)
                     }
                    }} style={{ paddingRight: "10px" }}>-</button>
                    <Text>{quant}</Text>
                    <button onClick={()=>{
                     if(quant<5){
                        increase(data.price)
                     }else{
                        alert("can buy max 5 of these !!! ")
                     }
                    }} style={{ paddingLeft: "10px" }}>+</button>
                  </Center>
                  <Button onClick={() => { addtoCart() }} backgroundColor='#22543D' variant='solid' pl="100px" pr="100px" color={"white"} borderRadius="30px">
                    ADD TO CARD
                  </Button>
                </HStack>
              </Box>
            </HStack>
          </Box>
        </Box>
      </HStack>
    )
   </>:<Center fontSize={"40px"} color={"purple"}>Login First 😀</Center>
  );
}

export default ProductDetailsPage;
